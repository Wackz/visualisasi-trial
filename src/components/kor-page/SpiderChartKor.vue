<template>
  <LayoutBaru
    :title="general.title + ' ' + dataSpiderChartKor[indexDaerah].region"
  >
    <div class="w-full flex flex-col xl:flex-row gap-6">
      <div class="flex-col h-full w-full">
        <!-- Dropdown -->
        <div class="w-full flex gap-4 items-center">
          <!-- Dropdown Daerah -->
          <div
            class="relative inline-flex justify-between gap-3 p-3 py-1.5 rounded-3xl max-w-[8rem] group hover:bg-stone-100 hover:w-[21rem] hover:border-b-0 hover:rounded-b-none border-primary border-[2.5px] items-center font-medium px-4 text-gray-900 cursor-pointer"
          >
            <div class="inline-flex items-center text-primary text-md">
              {{ daerahName }}
            </div>
            <UpArrow
              class="w-7 h-7 text-primary transition-transform duration-500 rotate-0 group-hover:rotate-180"
            />
            <div
              class="absolute top-[1.5rem] -left-[2px] z-20 my-4 w-[8rem] text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-primary border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
            >
              <ul class="py-2 font-medium" role="none">
                <li
                  v-for="daerah in listDaerah"
                  :key="daerah.name"
                  :class="{
                    hidden: daerah.name === daerahName,
                  }"
                  @click="changeDaerahName(daerah.name)"
                >
                  <div
                    class="cursor-pointer flex w-full gap-1 px-4 py-2 hover:bg-stone-300 text-primary rounded-lg"
                  >
                    <div
                      class="inline-flex items-center text-primary text-md font-semibold"
                    >
                      {{ daerah.name }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Dropdown Variabel -->
          <!-- <div
            class="relative inline-flex justify-between gap-3 p-3 py-1.5 rounded-3xl max-w-[21rem] group hover:bg-stone-100 hover:w-[21rem] hover:border-b-0 hover:rounded-b-none border-primary border-[2.5px] items-center font-medium px-4 text-gray-900 cursor-pointer"
          >
            <div class="inline-flex items-center text-primary text-md">
              {{ variabelName }}
            </div>
            <UpArrow
              class="w-7 h-7 text-primary transition-transform duration-500 rotate-0 group-hover:rotate-180"
            />
            <div
              class="absolute top-[1.5rem] -left-[2px] z-20 my-4 w-[21rem] text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-primary border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
            >
              <ul class="py-2 font-medium" role="none">
                <li
                  v-for="variabel in listVariabel"
                  :key="variabel.name"
                  :class="{
                    hidden: variabel.name === variabelName,
                  }"
                  @click="changeVariabelName(variabel.name)"
                >
                  <div
                    class="cursor-pointer flex w-full gap-1 px-4 py-2 hover:bg-stone-300 text-primary rounded-lg"
                  >
                    <div
                      class="inline-flex items-center text-primary text-md font-semibold"
                    >
                      {{ variabel.name }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
        <!-- Chart -->
        <SpiderChart
          :data="data"
          :categories="categories"
          :colors="colors"
          :daerahName="daerahName"
          :variabelName="variabelName"
          :selectedKategori="selectedKategori"
          :changeSelectedKategori="changeSelectedKategori"
          :isPercentage="general.isPercentage"
          :title="title"
          class="mx-auto flex lg:basis-1/2"
        />
        <!-- Checkbox Filter -->
        <div class="w-full flex items-center justify-center">
          <div
            v-for="(item, index) in dataSpiderChartKor[indexDaerah].categories"
            :key="item"
            class="w-40"
          >
            <div class="flex items-center justify-center">
              <input
                :id="`${title}-${item}`"
                type="checkbox"
                :disabled="selectedKategori[`group${index + 1}`]"
                :checked="selectedKategori[`group${index + 1}`]"
                @click="changeSelectedKategori(`group${index + 1}`)"
                class="w-7 h-7 bg-transparent border-primary rounded focus:ring-primary accent-primary"
              />
              <label
                :for="`${title}-${item}`"
                class="w-full ml-2 text-md font-medium text-primary"
              >
                {{ item }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex xl:basis-1/3 gap-2 flex-col">
        <h2 class="text-xl text-primary font-bold text-center mt-2">
          Interpretasi
        </h2>
        <div class="w-full my-1 h-0.5 bg-primary bg-opacity-50"></div>
        <p class="text-black text-md">
          {{ general.interpretasi }}
        </p>
      </div>
    </div>
  </LayoutBaru>
</template>

<script>
import { ref, watch } from "vue";
import LayoutBaru from "../charts/ChartLayout.vue";
import SpiderChart from "../charts/SpiderChart.vue";
import { dataSpiderChartKor, listVariabel, listDaerah } from "../../data/kor";
import UpArrow from "../icons/chart/UpArrow.vue";

export default {
  components: {
    UpArrow,
    LayoutBaru,
    SpiderChart,
  },
  setup() {
    const title = "spiderchart-kor-fix";
    const general = ref(dataSpiderChartKor[0].anak[0]);
    const data = ref(general.value.data);
    const categories = ref(general.value.categories);
    const colors = ref(general.value.colors);
    const daerahName = ref("Bali");
    const variabelName = ref("Jumlah Pemilih Tetap");
    const indexDaerah = ref(0);
    const indexVariabel = ref(0);
    const selectedKategori = ref({
      group1: true,
      group2: false,
    });
    const indexSelectedKategori = ref(0);

    const changeDaerahName = (value) => {
      daerahName.value = value;
    };

    const changeVariabelName = (value) => {
      variabelName.value = value;
    };

    const changeDaerah = (daerahName) => {
      const index = listDaerah.findIndex(
        (daerah) => daerah.name === daerahName
      );
      return index !== -1 ? index : 0;
    };

    const changeVariabel = (variabelName) => {
      const index = listVariabel.findIndex(
        (variabel) => variabel.name === variabelName
      );
      return index !== -1 ? index : 0;
    };

    const changeSelectedKategori = (value) => {
      switch (value) {
        case "group1":
          selectedKategori.value.group1 = true;
          selectedKategori.value.group2 = false;
          indexSelectedKategori.value = 0;
          break;
        case "group2":
          selectedKategori.value.group1 = false;
          selectedKategori.value.group2 = true;
          indexSelectedKategori.value = 1;
          break;
        default:
          break;
      }
    };

    watch(
      () => daerahName.value,
      (newValue) => {
        indexDaerah.value = changeDaerah(newValue);
      }
    );

    watch(
      () => variabelName.value,
      (newValue) => {
        indexVariabel.value = changeVariabel(newValue);
      }
    );

    watch(
      [indexSelectedKategori, indexDaerah, indexVariabel],
      () => {
        switch (indexSelectedKategori.value) {
          case 0:
            general.value =
              dataSpiderChartKor[indexDaerah.value].anak[indexVariabel.value];
            data.value = general.value.data;
            categories.value = general.value.categories;
            colors.value = general.value.colors;
            break;
          case 1:
            general.value =
              dataSpiderChartKor[indexDaerah.value].dewasa[indexVariabel.value];
            data.value = general.value.data;
            categories.value = general.value.categories;
            colors.value = general.value.colors;
            break;
          default:
            break;
        }
      },
      { deep: true }
    );

    return {
      title,
      general,
      data,
      colors,
      categories,
      daerahName,
      variabelName,
      indexDaerah,
      indexVariabel,
      selectedKategori,
      indexSelectedKategori,
      changeDaerahName,
      changeVariabelName,
      changeSelectedKategori,
      dataSpiderChartKor,
      listVariabel,
      listDaerah,
    };
  },
};
</script>
