<template>
  <!-- Konten Utama -->
  <div class="w-full flex relative">
    <!-- Download Button -->
    <div
      :class="[
        'w-9 h-9 absolute top-12 md:top-0 right-0 rounded-full flex justify-center items-center bg-primary hover:bg-secondary group',
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
  name: "GroupBarChart",
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
    keys: {
      type: Array,
      required: true,
    },
    warna: {
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
          .attr("class", " font-bold")
          .text("CENTANG MINIMAL SATU CHECKBOX DI BAWAH")
          .style("font-size", "2rem");
        return;
      }

      const margin = { top: 50, right: 25, bottom: 50, left: 25 };
      const containerWidth = document.querySelector(
        `#${this.title}`
      ).clientWidth;
      let width = containerWidth - margin.left - margin.right;
      width = width > 1080 ? 1080 : width;
      let height = 0.55 * width;

      const svg = d3
        .select(`#${this.title}`)
        .attr(
          "viewBox",
          `0 0 ${containerWidth} ${height + margin.top + margin.bottom}`
        )
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x0 = d3.scaleBand().rangeRound([0, width]).paddingInner(0.1);
      const x1 = d3.scaleBand().padding(0.05);
      const y = d3.scaleLinear().rangeRound([height, 0]);
      const color = d3.scaleOrdinal().range(this.warna);

      // Function to flatten the data
      const flattenData = (data, keys) => {
        const result = [];
        data[0].forEach((d, i) => {
          const item = { label: d.label };
          keys.forEach((key, k) => {
            item[key] = data[k][i].value;
          });
          result.push(item);
        });
        return result;
      };

      const flattenedData = flattenData(this.data, this.keys);

      x0.domain(flattenedData.map((d) => d.label));
      x1.domain(this.keys).rangeRound([0, x0.bandwidth()]);
      y.domain([
        0,
        d3.max(flattenedData, (d) => d3.max(this.keys, (key) => d[key])),
      ]).nice();

      svg
        .append("g")
        .selectAll("g")
        .data(flattenedData)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${x0(d.label)},0)`)
        .selectAll("rect")
        .data((d) =>
          this.keys.map((key) => ({
            key,
            value: d[key],
            label: d.label,
          }))
        )
        .enter()
        .append("rect")
        .attr("x", (d) => x1(d.key))
        .attr("y", height)
        .attr("width", x1.bandwidth())
        .attr("height", 0)
        .attr("fill", (d) => color(d.key))
        .on("mouseover", function (event, d) {
          tooltip
            .html(
              `<strong>${d.label}</strong><br/>${
                d.key
              }<br/><span style="color:${color(d.key)};">&#9632;</span> ${
                d.value
              }`
            )
            .style("opacity", 0.9)
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 28}px`)
            .style("cursor", "pointer");
        })
        .on("mousemove", function (event) {
          tooltip
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY - 28}px`)
            .style("cursor", "pointer");
        })
        .on("mouseout", function () {
          tooltip.style("opacity", 0);
        })
        .transition()
        .duration(800)
        .delay((d, i) => i * 400)
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => height - y(d.value));

      svg
        .append("g")
        .selectAll("g")
        .data(flattenedData)
        .enter()
        .append("g")
        .attr("transform", (d) => `translate(${x0(d.label)},0)`)
        .selectAll("text")
        .data((d) =>
          this.keys.map((key) => ({
            key,
            value: d[key],
            label: d.label,
          }))
        )
        .enter()
        .append("text")
        .attr("x", (d) => x1(d.key) + x1.bandwidth() / 2)
        .attr("y", (d) => y(d.value) - 50)
        .attr("text-anchor", "middle")
        .attr("fill", "black")
        .style("opacity", 0)
        .text((d) => d.value + (this.isPercentage ? "%" : ""))
        .style("font-size", "12px")
        .transition()
        .duration(800)
        .delay((d, i) => i * 400)
        .style("opacity", 1)
        .attr("y", (d) => y(d.value) - 5);

      svg
        .append("g")
        .attr("class", "axis")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x0).tickSize(0))
        .selectAll("text")
        .attr("font-size", "12px")
        .attr("transform", "translate(0,4)")
        .attr("text-anchor", "center");

      const svgWidth = svg.node().getBoundingClientRect().width;
      console.log(svgWidth);
      const legend = svg
        .append("g")
        .attr("font-size", 12)
        .attr("text-anchor", "start")
        .selectAll("g")
        .data(this.keys)
        .enter()
        .append("g")
        .attr(
          "transform",
          (d, i) =>
            `translate(${
              svgWidth / 2 - (this.keys.length / 2) * 130 + i * 130
            },-40)`
        );

      legend
        .append("rect")
        .attr("x", 0)
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", color);

      legend
        .append("text")
        .attr("x", 32)
        .attr("y", 13)
        .attr("dy", "0.3em")
        .text((d) => d);

      let tooltip = d3.select("body").select(`.tooltip${this.title}`);
      if (tooltip.empty()) {
        tooltip = d3
          .select("body")
          .append("div")
          .attr("class", `tooltip${this.title}`)
          .style("opacity", 0)
          .style("position", "absolute")
          .style("padding", "10px")
          .style("background", "#333")
          .style("color", "white")
          .style("border-radius", "5px")
          .style("cursor", "pointer");
      }
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
    data: {
      handler() {
        this.createChart();
      },
      deep: true,
    },
    keys: {
      handler() {
        this.createChart();
      },
      deep: true,
    },
    selectedKategori: {
      handler() {
        this.createChart();
      },
      deep: true,
    },
  },
  mounted() {
    this.createChart();
    window.addEventListener("resize", this.createChart);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.createChart);
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
