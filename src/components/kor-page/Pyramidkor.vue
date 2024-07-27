<template>
  <LayoutBaru :title="title">
    <div class="w-full flex flex-col xl:flex-row gap-6">
      <div class="flex-col h-full w-full">
        <Pyramid class="mx-auto flex xl:basis-2/3"/>
      </div>
      <div class="w-full flex xl:basis-1/3 gap-2 flex-col">
        <h2 class="text-xl text-primary font-bold text-center mt-2">
          Interpretasi
        </h2>
        <div class="w-full my-1 h-0.5 bg-primary bg-opacity-50"></div>
        <p class="text-black text-md">
          Berdasarkan Gambar X, baik gen Z anak maupun orang tua saat berusia
          yang sama di Provinsi Bali
        </p>
      </div>
    </div>
  </LayoutBaru>
</template>

<script>
import { ref, watch } from "vue";
import LayoutBaru from "../charts/ChartLayout.vue";
import Pyramid from "../charts/Pyramid.vue";
import { dataGroupBarChartKor, listVariabel, listDaerah } from "../../data/kor";

const title = "Pyramid Chart";
export default {
  components: {
    LayoutBaru,
    Pyramid,
  },
  setup() {
    const title = "Pyramid";
    const general = ref(dataGroupBarChartKor[0].anak[0]);
    const data = ref(general.value.data);
    return {
      title,
      data,
    };
  },
};
</script>
