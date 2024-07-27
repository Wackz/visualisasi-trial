<template>
  <div class="relative w-full h-full max-w-full max-h-full">
    <div :class="[
      'w-9 h-9 absolute top-0 right-0 rounded-full flex justify-center items-center bg-primary hover:bg-secondary group'
    ]">
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
    <svg ref="chart" class="w-full h-full" viewBox="0 0 250 250"></svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as d3 from 'd3';
import Download from "../icons/chart/Download.vue";
import FileSvg from "../icons/chart/FileSvg.vue";
import FilePdf from "../icons/chart/FilePdf.vue";
import FilePng from "../icons/chart/FilePng.vue";
import jsPDF from "jspdf";

const chart = ref(null);
const title = ref('pyramid-chart'); // Default title for downloads

const createPyramidChart = () => {
  const width = 250; // Adjusted width
  const height = 250; // Adjusted height
  const svg = d3.select(chart.value)
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', `0 0 ${width} ${height}`);

  const trapeziumHeight = 50;
  const trapeziums = [
    { topWidth: 150, bottomWidth: 200, y: 225, color: 'steelblue', label: 'Label 1', value: 'Value 1' },
    { topWidth: 100, bottomWidth: 150, y: 175, color: 'lightblue', label: 'Label 2', value: 'Value 2' },
    { topWidth: 50, bottomWidth: 100, y: 125, color: 'skyblue', label: 'Label 3', value: 'Value 3' },  // This will be the topmost trapezium
    { topWidth: 0, bottomWidth: 0, y: 75, color: 'deepskyblue' }
  ];

  // Tooltip div
  const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('background', 'rgba(0, 0, 0, 0.8)')
    .style('color', '#fff')
    .style('padding', '5px')
    .style('border-radius', '5px')
    .style('text-align', 'center');

  // Draw trapeziums with animation and add labels
  trapeziums.forEach((trapezium, index) => {
    const x1 = (width - trapezium.bottomWidth) / 2;
    const x2 = x1 + trapezium.bottomWidth;
    const topX1 = (width - trapezium.topWidth) / 2;
    const topX2 = topX1 + trapezium.topWidth;

    svg.append('polygon')
      .attr('points', `${x1},${trapezium.y + trapeziumHeight} ${x2},${trapezium.y + trapeziumHeight} ${topX2},${trapezium.y + trapeziumHeight} ${topX1},${trapezium.y + trapeziumHeight}`)
      .attr('fill', trapezium.color)
      .attr('stroke', 'white')
      .on('mouseover', function (event) {
        tooltip.style('visibility', 'visible')
          .text(`${trapezium.label}: ${trapezium.value}`);
      })
      .on('mousemove', function (event) {
        tooltip.style('top', (event.pageY - 10) + 'px')
          .style('left', (event.pageX + 10) + 'px');
      })
      .on('mouseout', function () {
        tooltip.style('visibility', 'hidden');
      })
      .transition()
      .duration(1000)
      .attr('points', `${x1},${trapezium.y} ${x2},${trapezium.y} ${topX2},${trapezium.y - trapeziumHeight} ${topX1},${trapezium.y - trapeziumHeight}`);

    // Add labels (skip for trapezium with index 3)
    if (index !== 3) {
      svg.append('text')
        .attr('x', width / 2)
        .attr('y', trapezium.y - trapeziumHeight / 2)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .text(`${trapezium.label}: ${trapezium.value}`)
        .attr('fill', 'black')
        .style('font-size', '10px') // Adjusted font size
        .style('font-weight', 'bold');
    }
  });

  const triangleBaseLength = 50; // Adjusted length
  const triangleHeight = 50; // Adjusted height

  const topTrapezium = trapeziums[3];
  const triangleY = topTrapezium.y - triangleHeight;

  svg.append('polygon')
    .attr('points', `${width / 2},${triangleY} ${width / 2 - triangleBaseLength / 2},${triangleY + triangleHeight} ${width / 2 + triangleBaseLength / 2},${triangleY + triangleHeight}`)
    .attr('fill', 'orange')
    .attr('stroke', 'white')
    .on('mouseover', function (event) {
      tooltip.style('visibility', 'visible')
        .text('Brahmana');
    })
    .on('mousemove', function (event) {
      tooltip.style('top', (event.pageY - 10) + 'px')
        .style('left', (event.pageX + 10) + 'px');
    })
    .on('mouseout', function () {
      tooltip.style('visibility', 'hidden');
    })
    .attr('opacity', 0)
    .transition()
    .duration(1000)
    .attr('opacity', 1);

  svg.append('text')
    .attr('x', width / 2)
    .attr('y', triangleY + triangleHeight / 2)
    .attr('dy', '0.35em')
    .attr('text-anchor', 'middle')
    .text('Brahmana')
    .attr('fill', 'black')
    .style('font-size', '10px') // Adjusted font size
    .style('font-weight', 'bold');
};

// Method to download SVG
const downloadSVG = () => {
  const svgElement = chart.value;
  const svgString = new XMLSerializer().serializeToString(svgElement);
  const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${title.value}.svg`;
  a.click();
  URL.revokeObjectURL(url);
};

// Method to download PNG
const downloadPNG = () => {
  const svgElement = chart.value;
  const svgString = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  const image = new Image();
  image.src = url;

  image.onload = () => {
    const canvas = document.createElement("canvas");
    const scaleFactor = 12;
    canvas.width = image.width * scaleFactor;
    canvas.height = image.height * scaleFactor;
    const context = canvas.getContext("2d");

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const pngDataUrl = canvas.toDataURL("image/png", 1.0);
    const a = document.createElement("a");
    a.href = pngDataUrl;
    a.download = `${title.value}.png`;
    a.click();
    URL.revokeObjectURL(url);
  };
};

// Method to download PDF
const downloadPDF = () => {
  const svgElement = chart.value;
  const svgString = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  const image = new Image();
  image.src = url;

  image.onload = () => {
    const canvas = document.createElement("canvas");
    const scaleFactor = 8;
    canvas.width = image.width * scaleFactor;
    canvas.height = image.height * scaleFactor;
    const context = canvas.getContext("2d");

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: [canvas.height, canvas.width],
    });
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`${title.value}.pdf`);
    URL.revokeObjectURL(url);
  };
};

onMounted(() => {
  createPyramidChart();
});
</script>


<style scoped>
.tooltip {
  position: absolute;
  text-align: center;
  width: auto;
  height: auto;
  padding: 2px;
  font: 10px sans-serif;
  /* Adjusted font size */
  background: lightsteelblue;
  border: 0;
  border-radius: 8px;
  pointer-events: none;
}
</style>
