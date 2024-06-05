<template>
  <!-- Konten Utama -->
  <div class="w-full flex relative">
    <!-- Download Button -->
    <div
      :class="[
        'w-9 h-9 absolute top-0 right-0 z-20 rounded-full flex justify-center items-center bg-primary hover:bg-secondary group',
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
    <div :id="title" class="relative flex-col h-full w-full mx-auto"></div>
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
  name: "SpiderChart",
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

      // Penyamaan Format Data

      const label = this.keys;
      const hexColor = this.warna;
      const color = d3.scaleOrdinal().range(hexColor);

      // Responsive Width
      const containerWidth = document.querySelector(
        `#${this.title}`
      ).clientWidth;

      const margin = {
        top: containerWidth > 1080 ? 80 : containerWidth > 640 ? 70 : 60,
        right: containerWidth > 1080 ? 60 : containerWidth > 640 ? 50 : 30,
        bottom: containerWidth > 1080 ? 70 : containerWidth > 640 ? 50 : 40,
        left: containerWidth > 1080 ? 60 : containerWidth > 640 ? 50 : 30,
      };

      const width = containerWidth - margin.left - margin.right;
      const widthFix = width > 480 ? 480 : width;
      const height = widthFix; // Adjust height calculation

      const config = {
        w: widthFix, //Lebar Lingkaran
        h: height, //Tinggi Lingkaran
        margin: margin, //Margin SVG
        levels: 5, //Jumlah Data Tampil
        maxValue: 1, //Max Nilai
        labelFactor: containerWidth > 640 ? 1.15 : 1.05, //Seberapa jauh dari radius lingkaran luar label harus ditempatkan
        wrapWidth: 60, //Jumlah piksel setelah mana label perlu diberi baris baru
        opacityArea: 0.35, //Tingkat transparansi area blob
        dotRadius: 4, //Ukuran titik lingkaran berwarna pada setiap blob
        opacityCircles: 0.1, //Tingkat transparansi lingkaran pada setiap blob
        strokeWidth: 2, //Lebar garis tepi di sekitar setiap blob
        roundStrokes: true, //Jika true, area dan garis tepi akan mengikuti jalur melingkar (cardinal-closed)
        color: color, //Fungsi warna
      };

      // Apabila data lebih kecil dari batas nilai, ubah data menjadi batas nilai
      var maxValue = Math.max(
        config.maxValue,
        d3.max(this.data, function (i) {
          return d3.max(
            i.map(function (o) {
              return o.value;
            })
          );
        })
      );

      //Nama dari setiap sumbu/statistik
      var allAxis = this.data[0].map(function (i) {
          return i.axis;
        }),
        //Jumlah sumbu yang berbeda
        total = allAxis.length,
        //Radius lingkaran terluar
        radius = Math.min(config.w / 2, config.h / 2),
        //Lebar dalam radian dari setiap "irisan"
        angleSlice = (Math.PI * 2) / total;

      //Skala untuk radius
      var rScale = d3.scaleLinear().range([0, radius]).domain([0, maxValue]);

      // BUAT CONTAINER SVG
      // Inisiasi SVG
      var svg = d3
        .select(`#${this.title}`)
        .append("svg")
        .attr("width", widthFix + config.margin.left + config.margin.right)
        .attr("height", height + config.margin.top + config.margin.bottom)
        .attr("class", "radar" + `${this.title} mx-auto`);

      //Tambahkan Elemen g
      var g = svg
        .append("g")
        .attr(
          "transform",
          "translate(" +
            (config.w / 2 + config.margin.left) +
            "," +
            (config.h / 2 + config.margin.top) +
            ")"
        );

      // // BUAT FILTER UNTUK GLOW LINE
      // //Garis luar/tepian glow
      // var filter = g.append("defs").append("filter").attr("id", "glow"),
      //   feGaussianBlur = filter
      //     .append("feGaussianBlur")
      //     .attr("stdDeviation", "2.5")
      //     .attr("result", "coloredBlur"),
      //   feMerge = filter.append("feMerge"),
      //   feMergeNode_1 = feMerge.append("feMergeNode").attr("in", "coloredBlur"),
      //   feMergeNode_2 = feMerge.append("feMergeNode").attr("in", "SourceGraphic");

      // TAMBAHKAN GRID LINGKARAN (CIRCULAR)
      //Wrapper Grid & Axes
      var axisGrid = g.append("g").attr("class", "axisWrapper");

      //Warna Latar Belakang Lingkaran
      axisGrid
        .selectAll(".levels")
        .data(d3.range(1, config.levels + 1).reverse())
        .enter()
        .append("circle")
        .attr("class", "gridCircle")
        .attr("r", function (d) {
          return (radius / config.levels) * d;
        })
        .style("fill", "#CDCDCD")
        .style("stroke", "#CDCDCD")
        .style("fill-opacity", config.opacityCircles)
        .style("filter", "url(#glow)");

      // TAMBAHKAN SUMBU VERTIKAL (LEGENDA)
      //Legenda/Text Vertikal Penanda Besaran Nilai
      axisGrid
        .selectAll(".axisLabel")
        .data(d3.range(1, config.levels + 1).reverse())
        .enter()
        .append("text")
        .attr("class", "axisLabel")
        .attr("x", 4)
        .attr("y", function (d) {
          return (-d * radius) / config.levels;
        })
        .attr("dy", "0.4em")
        .style(
          "font-size",
          containerWidth > 1080
            ? "15px"
            : containerWidth > 640
            ? "12px"
            : "10px"
        )
        .attr("fill", "#737373")
        .text(function (d) {
          return (maxValue * d) / config.levels;
        });

      //Garis Lurus Vertikal ke Atas (Legenda)
      var axis = axisGrid
        .selectAll(".axis")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis");

      axis
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", function (d, i) {
          return rScale(maxValue * 1) * Math.cos(angleSlice * i - Math.PI / 2);
        })
        .attr("y2", function (d, i) {
          return rScale(maxValue * 1) * Math.sin(angleSlice * i - Math.PI / 2);
        })
        .attr("class", "line")
        .style("stroke", "white")
        .style(
          "stroke-width",
          containerWidth > 1080 ? "3px" : containerWidth > 640 ? "2.5px" : "2px"
        );

      //Masukkan Label Legenda
      axis
        .append("text")
        .attr("class", "legend")
        .style(
          "font-size",
          containerWidth > 1080 ? "13px" : containerWidth > 640 ? "11px" : "9px"
        )
        .style("font-family", "Poppins")
        .style("font-weight", "medium")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("x", function (d, i) {
          return (
            rScale(maxValue * config.labelFactor) *
            Math.cos(angleSlice * i - Math.PI / 2)
          );
        })
        .attr("y", function (d, i) {
          return (
            rScale(maxValue * config.labelFactor) *
            Math.sin(angleSlice * i - Math.PI / 2)
          );
        })
        .text(function (d) {
          return d;
        })
        .call(wrap, config.wrapWidth);

      // TAMBAHKAN RADAR AREA (BLOBS)
      var radarLine = d3
        .lineRadial()
        .curve(d3.curveBasisClosed)
        .radius(function (d) {
          return rScale(d.value);
        })
        .angle(function (d, i) {
          return i * angleSlice;
        });

      //Apakah Garis Lurus atau Melingkar/Membelok
      if (config.roundStrokes) {
        radarLine.curve(d3.curveCardinalClosed);
      }

      //Wrapper untuk BLOBS
      var blobWrapper = g
        .selectAll(".radarWrapper")
        .data(this.data)
        .enter()
        .append("g")
        .attr("class", "radarWrapper");

      //Latar Belakang Area BLOBS & Set BLOBS
      blobWrapper
        .append("path")
        .attr("class", "radarArea")
        .attr("d", function (d) {
          return radarLine(d);
        })
        .style("fill", function (d, i) {
          return config.color(i);
        })
        .style("fill-opacity", config.opacityArea)
        .on("mouseover", function () {
          //Dim all blobs
          d3.selectAll(".radarArea")
            .transition()
            .duration(200)
            .style("fill-opacity", 0.1)
            .style("cursor", "pointer");
          //Bring back the hovered over blob
          d3.select(this).transition().duration(200).style("fill-opacity", 0.7);
        })
        .on("mouseout", function () {
          //Bring back all blobs
          d3.selectAll(".radarArea")
            .transition()
            .duration(200)
            .style("fill-opacity", config.opacityArea);
        });

      //Tambahkan Outline pada BLOBs
      blobWrapper
        .append("path")
        .attr("class", "radarStroke")
        .attr("d", function (d) {
          console.log("spider", d);
          return radarLine(d);
        })
        .style("stroke-width", config.strokeWidth + "px")
        .style("stroke", function (d, i) {
          return config.color(i);
        })
        .style("fill", "none")
        .style("filter", "url(#glow)");

      //Masukkan BLOBS pada Lingkaran Spider
      blobWrapper
        .selectAll(".radarCircle")
        .data(function (d) {
          return d;
        })
        .enter()
        .append("circle")
        .attr("class", "radarCircle")
        .attr("r", config.dotRadius)
        .attr("cx", function (d, i) {
          return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
        })
        .attr("cy", function (d, i) {
          return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
        })
        .style("fill", function (d, i, j) {
          return config.color(j);
        })
        .style("fill-opacity", 0.8)
        .style("cursor", "pointer");

      // BUAT TOOLTIP
      //Wrapper Tooltip
      var blobCircleWrapper = g
        .selectAll(".radarCircleWrapper")
        .data(this.data)
        .enter()
        .append("g")
        .attr("class", "radarCircleWrapper");

      //Masukkan Tooltip
      blobCircleWrapper
        .selectAll(".radarInvisibleCircle")
        .data(function (d) {
          return d;
        })
        .enter()
        .append("circle")
        .attr("class", "radarInvisibleCircle")
        .attr("r", config.dotRadius * 1.5)
        .attr("cx", function (d, i) {
          return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2);
        })
        .attr("cy", function (d, i) {
          return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2);
        })
        .style("fill", "none")
        .style("cursor", "pointer")
        .style("pointer-events", "all")
        .on("mouseover", function (event, d) {
          var newX = event.pageX;
          var newY = event.pageY;
          let tooltipHtml = `<strong>Indikator ${
            d.axis
          }</strong><br/><i>Kategori ${
            label[d.group]
          }</i><br/><span style="color:${hexColor[d.group]};">&#9632;</span> ${
            d.value
          }`;
          tooltip
            .html(tooltipHtml)
            .style("opacity", 0.9)
            .style("left", `${newX + 10}px`)
            .style("top", `${newY - 28}px`);
        })
        .on("mouseout", function () {
          tooltip.transition().duration(200).style("opacity", 0);
        });

      //Tampilkan Tooltip
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

      // HAHA HIHI

      // TAMBAH LEGENDA
      const svgWidth = svg.node().getBoundingClientRect().width;
      console.log("svgWidth", svgWidth);
      const legend = svg
        .append("g")
        .attr("font-size", 12)
        .attr("font-weight", "bold")
        .attr("text-anchor", "start") // Align text to the start
        .selectAll("g")
        .data(label)
        .enter()
        .append("g")
        .attr(
          "transform",
          (d, i) =>
            `translate(${
              svgWidth / 2 - (this.keys.length / 2) * 100 + i * 100
            }, 10)`
        ); // Center the legend horizontally

      legend
        .append("rect")
        .attr("x", 0) // Adjust the position of the rectangle
        .attr("width", 26)
        .attr("height", 26)
        .attr("fill", (d, i) => color(i)) // Use the color function to assign colors
        .attr("fill-opacity", 0.5) // Add fill-opacity
        .attr("stroke", (d, i) => color(i)) // Use the color function for the stroke color
        .attr("stroke-width", "4px"); // Add stroke width

      legend
        .append("text")
        .attr("x", 32) // Adjust the position of the text
        .attr("y", 13) // Vertically align the text to the center of the rectangle
        .attr("dy", "0.3em")
        .text((d) => d)
        .style("font-family", "Poppins")
        .attr("fill", "#333");

      // FUNGSI WRAP
      function wrap(text, width) {
        text.each(function () {
          var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.4, // ems
            y = text.attr("y"),
            x = text.attr("x"),
            dy = parseFloat(text.attr("dy")),
            tspan = text
              .text(null)
              .append("tspan")
              .attr("x", x)
              .attr("y", y)
              .attr("dy", dy + "em");

          while ((word = words.pop())) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text
                .append("tspan")
                .attr("x", x)
                .attr("y", y)
                .attr("dy", ++lineNumber * lineHeight + dy + "em")
                .text(word);
            }
          }
        });
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
      const svgElement = document.querySelector(`#${this.title} svg`);
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      const image = new Image();
      image.src = url;

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleFactor = 8; // Faktor resolusi yang lebih tinggi (contoh: 2 untuk 2x lebih besar)
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
      const svgElement = document.querySelector(`#${this.title} svg`);
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);

      const image = new Image();
      image.src = url;

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleFactor = 4; // Faktor resolusi yang lebih tinggi (contoh: 2 untuk 2x lebih besar)
        canvas.width = image.width * scaleFactor;
        canvas.height = image.height * scaleFactor;
        const context = canvas.getContext("2d");

        // Aktifkan anti-aliasing
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        // Gambar ulang dengan faktor resolusi yang lebih tinggi
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Konversi ke PDF
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
.spider-chart {
  width: 100%;
  height: 100%;
}
.tooltip {
  position: absolute;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  pointer-events: none;
}
</style>
