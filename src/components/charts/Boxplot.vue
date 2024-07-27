<template>
  <!-- Konten Utama -->
  <div class="w-full flex relative">
    <!-- Download Button -->
    <div
      :class="[
        'w-9 h-9 absolute top-0 right-0 rounded-full flex justify-center items-center bg-primary hover:bg-secondary group',
        { hidden: data.length === 0 },
      ]"
    >
      <Download class="text-white w-6 h-6" />
      <div
        class="absolute -bottom-[9.5rem] right-0 z-50 my-4 w-max text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-lg shadow-lg transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
      >
        <ul class="py-2 font-medium" role="none">
          <li>
            <div
              @click="downloadSVG"
              class="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-primary rounded-lg"
            >
              <FileSvg class="text-primary w-6 h-6" />
              <div
                class="inline-flex items-center text-primary text-md font-semibold"
              >
                SVG
              </div>
            </div>
          </li>
          <li>
            <div
              @click="downloadPNG"
              class="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-primary rounded-lg"
            >
              <FilePng class="text-primary w-6 h-6" />
              <div class="inline-flex items-center text-primary text-md">
                PNG
              </div>
            </div>
          </li>
          <li>
            <div
              @click="downloadPDF"
              class="cursor-pointer flex w-full justify-center gap-1 px-4 py-2 hover:bg-stone-300 text-primary rounded-lg"
            >
              <FilePdf class="text-primary w-6 h-6" />
              <div class="inline-flex items-center text-primary text-md">
                PDF
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Chart -->
    <svg :id="title" class="chart h-full w-full"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import Download from "../icons/chart/Download.vue";
import FileSvg from "../icons/chart/FileSvg.vue";
import FilePdf from "../icons/chart/FilePdf.vue";
import FilePng from "../icons/chart/FilePng.vue";
import jsPDF from "jspdf";

export default {
  name: "BoxplotChart",
  components: {
    Download,
    FileSvg,
    FilePdf,
    FilePng,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
    },
    daerahName: {
      type: String,
      required: true,
    },
    variabelName: {
      type: String,
      required: true,
    },
    selectedKategori: {
      type: Object,
      required: true,
    },
    changeSelectedKategori: {
      type: Function,
      required: true,
    },
    isPercentage: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    createChart() {
      d3.select(`#${this.title}`).style("background-color", "transparent");
      d3.select(`#${this.title}`).selectAll("*").remove();

      if (this.data.length === 0) {
        d3.select(`#${this.title}`)
          .style("display", "flex")
          .style("justify-content", "center")
          .style("align-items", "center")
          .style("background-color", "rgb(214,211,209)")
          .style("border-radius", "24px")
          .append("text")
          .attr("x", "50%")
          .attr("y", "50%")
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("class", "font-bold")
          .text("CENTANG MINIMAL SATU CHECKBOX DI BAWAH")
          .style("font-size", "2rem");
        return;
      }

      const margin = { top: 50, right: 25, bottom: 50, left: 50 };
      const containerWidth = document.querySelector(
        `#${this.title}`
      ).clientWidth;
      const width = containerWidth - margin.left - margin.right;
      const height = 0.55 * width;

      const svg = d3
        .select(`#${this.title}`)
        .attr(
          "viewBox",
          `0 0 ${containerWidth} ${height + margin.top + margin.bottom}`
        )
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Create tooltip
      const tooltip = d3
        .select("body")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background-color", "rgba(0, 0, 0, 0.7)")
        .style("color", "white")
        .style("border", "1px solid #ccc")
        .style("padding", "5px")
        .style("border-radius", "4px")
        .style("box-shadow", "0 0 10px rgba(0,0,0,0.1)")
        .style("pointer-events", "none");

      // Flatten the data to work with boxplot
      const flattenedData = this.data.flat();

      // Group the data by category
      const dataByCategory = d3.groups(flattenedData, (d) => d.label);

      // Prepare the boxplot data
      const boxplotData = dataByCategory.map(([key, values]) => {
        const sortedValues = values.map((d) => d.value).sort(d3.ascending);
        const q1 = d3.quantile(sortedValues, 0.25);
        const median = d3.quantile(sortedValues, 0.5);
        const q3 = d3.quantile(sortedValues, 0.75);
        const min = d3.min(sortedValues);
        const max = d3.max(sortedValues);

        return {
          key,
          q1,
          median,
          q3,
          min,
          max,
        };
      });

      // Create scales
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(boxplotData.map((d) => d.key))
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(boxplotData, (d) => d.max)]);

      // Create axes
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x).tickSize(0))
        .selectAll(".domain")
        .remove()
        .selectAll("text")
        .attr("transform", "translate(0,4)")
        .attr("text-anchor", "middle")
        .style("font-size", "200px");

      // Create boxplots
      svg
        .selectAll(".box")
        .data(boxplotData)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${x(d.key)},0)`)
        .each(function (d) {
          const g = d3.select(this);

          // Box
          g.append("rect")
            .attr("x", 0)
            .attr("y", y(d.q3))
            .attr("width", x.bandwidth())
            .attr("height", y(d.q1) - y(d.q3))
            .attr("fill", "#951A2E")
            .attr("opacity", 0)
            .transition()
            .duration(800)
            .attr("opacity", 1);

          // Median line
          g.append("line")
            .attr("x1", 0)
            .attr("x2", x.bandwidth())
            .attr("y1", y(d.median))
            .attr("y2", y(d.median))
            .attr("stroke", "black")
            .attr("opacity", 0)
            .transition()
            .duration(800)
            .attr("opacity", 1);

          // Min and max lines
          g.append("line")
            .attr("x1", x.bandwidth() / 2)
            .attr("x2", x.bandwidth() / 2)
            .attr("y1", y(d.min))
            .attr("y2", y(d.max))
            .attr("stroke", "black")
            .attr("opacity", 0)
            .transition()
            .duration(800)
            .attr("opacity", 1);

          // Min and max caps
          g.append("line")
            .attr("x1", x.bandwidth() / 4)
            .attr("x2", (3 * x.bandwidth()) / 4)
            .attr("y1", y(d.min))
            .attr("y2", y(d.min))
            .attr("stroke", "black")
            .attr("opacity", 0)
            .transition()
            .duration(800)
            .attr("opacity", 1);

          g.append("line")
            .attr("x1", x.bandwidth() / 4)
            .attr("x2", (3 * x.bandwidth()) / 4)
            .attr("y1", y(d.max))
            .attr("y2", y(d.max))
            .attr("stroke", "black")
            .attr("opacity", 0)
            .transition()
            .duration(800)
            .attr("opacity", 1);

          // Add event listeners for tooltips
          g.on("mouseover", function (event, d) {
            tooltip
              .html(
                `<strong>${d.key}</strong><br>Min: ${d.min}<br>Q1: ${d.q1}<br>Median: ${d.median}<br>Q3: ${d.q3}<br>Max: ${d.max}`
              )
              .style("visibility", "visible");
          })
            .on("mousemove", function (event) {
              tooltip
                .style("top", event.pageY - 10 + "px")
                .style("left", event.pageX + 10 + "px");
            })
            .on("mouseout", function () {
              tooltip.style("visibility", "hidden");
            });
        });
    },

    downloadSVG() {
      const svgElement = document.querySelector(`#${this.title}`);
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const blob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${this.title}.svg`;
      a.click();
      URL.revokeObjectURL(url);
    },

    downloadPNG() {
      const svgElement = document.querySelector(`#${this.title}`);
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      const image = new Image();
      image.src = url;

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleFactor = 12; // Faktor resolusi yang lebih tinggi (contoh: 2 untuk 2x lebih besar)
        canvas.width = image.width * scaleFactor;
        canvas.height = image.height * scaleFactor;
        const context = canvas.getContext("2d");

        // Aktifkan anti-aliasing
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        // Gambar ulang dengan faktor resolusi yang lebih tinggi
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Konversi ke PNG dengan kualitas gambar yang lebih tinggi
        const pngDataUrl = canvas.toDataURL("image/png", 1.0); // Gunakan kualitas 1.0 untuk PNG terbaik
        const a = document.createElement("a");
        a.href = pngDataUrl;
        a.download = `${this.title}.png`;
        a.click();
        URL.revokeObjectURL(url);
      };
    },

    downloadPDF() {
      const svgElement = document.querySelector(`#${this.title}`);
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      const image = new Image();
      image.src = url;

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleFactor = 8; // Faktor resolusi yang lebih tinggi (contoh: 8 untuk 8x lebih besar)
        canvas.width = image.width * scaleFactor;
        canvas.height = image.height * scaleFactor;
        const context = canvas.getContext("2d");

        // Aktifkan anti-aliasing
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        // Gambar ulang dengan faktor resolusi yang lebih tinggi
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Konversi ke PDF dengan orientasi landscape
        const pdf = new jsPDF({
          orientation: "landscape", // Atur orientasi landscape
          unit: "pt", // Satuan ukuran (contoh: poin)
          format: [canvas.height, canvas.width], // Ukuran halaman sesuai dengan gambar yang dihasilkan
        });
        pdf.addImage(
          canvas.toDataURL("image/png"),
          "PNG",
          0,
          0,
          canvas.width,
          canvas.height
        );

        // Simpan PDF dengan nama file yang sesuai
        pdf.save(`${this.title}.pdf`);
        URL.revokeObjectURL(url);
      };
    },
  },
  watch: {
    data() {
      this.createChart();
    },
    selectedKategori() {
      this.createChart();
    },
  },
  mounted() {
    this.createChart();
  },
};
</script>

<style scoped></style>
