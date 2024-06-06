<template>
  <ChartLayout :title="allKor2[indexVariabel][indexDaerah].title">
    <div class="w-full flex flex-col xl:flex-row gap-6">
      <div class="flex-col h-full w-full">
        <!-- Dropdown -->
        <div class="w-full flex gap-4 items-center">
          <!-- Dropdown Daerah -->
          <div
            class="relative text-xs md:text-sm inline-flex justify-between gap-3 p-3 py-1.5 rounded-3xl max-w-[8rem] group hover:bg-stone-100 hover:w-[21rem] hover:border-b-0 hover:rounded-b-none border-primary border-[2.5px] items-center font-medium px-4 text-gray-900 cursor-pointer"
          >
            <div class="inline-flex items-center text-primary text-md">
              {{ daerahName }}
            </div>
            <UpArrow
              class="w-7 h-7 text-primary transition-transform duration-500 rotate-0 group-hover:rotate-180"
            />
            <div
              class="absolute top-[1.5rem] -left-[2px] overflow-y-scroll z-20 my-4 w-[8rem] text-base list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-primary border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto max-h-80"
            >
              <ul class="py-2 font-medium" role="none">
                <li
                  v-for="daerah in listDaerahChart"
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
          <div
            class="relative text-xs md:text-sm inline-flex justify-between gap-3 p-3 py-1.5 rounded-3xl max-w-[21rem] group hover:bg-stone-100 hover:w-[21rem] hover:border-b-0 hover:rounded-b-none border-primary border-[2.5px] items-center font-medium px-4 text-gray-900 cursor-pointer"
          >
            <div class="inline-flex items-center text-primary text-md">
              {{ variabelName }}
            </div>
            <UpArrow
              class="w-7 h-7 text-primary transition-transform duration-500 rotate-0 group-hover:rotate-180"
            />
            <div
              class="absolute top-[1.5rem] -left-[2px] z-20 my-4 w-[21rem] text-base max-h-80 overflow-y-scroll list-none bg-stone-100 divide-y divide-stone-100 rounded-b-2xl border-primary border-[2.5px] border-t-[2.5px] border-t-stone-400 shadow-lg transition-transform duration-500 transform opacity-0 pointer-events-none translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
            >
              <ul class="py-2 font-medium" role="none">
                <li
                  v-for="variabel in pilihanData"
                  :key="variabel.name"
                  :class="{
                    hidden: variabel.name === variabelName,
                    hidden: variabel.value == 14,
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
          </div>
        </div>
        <!-- Chart -->
        <GroupBarChart
          :data="data"
          :keys="label"
          :warna="warna"
          :daerahName="daerahName"
          :variabelName="variabelName"
          :selectedKategori="selectedKategori"
          :changeSelectedKategori="changeSelectedKategori"
          :isPercentage="
            allKor2[indexVariabel][indexDaerah].isPercentage
          "
          :title="title"
          class="mx-auto flex xl:basis-2/3"
        />
        <!-- Checkbox Filter -->
        <div class="w-full flex items-center justify-center gap-4">
          <div
            v-for="(item, index) in allKor2[indexVariabel][indexDaerah].label"
            :key="item"
          >
            <div class="flex items-center justify-center">
              <input
                :id="`${title}-${item}`"
                type="checkbox"
                :checked="selectedKategori[`group${index + 1}`]"
                @click="changeSelectedKategori(`group${index + 1}`)"
                class="w-4 h-4 md:w-7 md:h-7 bg-transparent border-primary rounded focus:ring-primary accent-primary"
              />
              <label
                :for="`${title}-${item}`"
                class="w-full ml-2 text-sm font-medium text-primary"
              >
                {{ item }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex xl:basis-1/2 gap-2 flex-col">
        <h2 class="text-xl text-primary font-bold text-center mt-2">
          Interpretasi
        </h2>
        <div class="w-full my-1 h-0.5 bg-primary bg-opacity-50"></div>
        <p class="text-black text-md">
          {{
            allKor2[indexVariabel][indexDaerah].interpretasi
          }}
        </p>
      </div>
    </div>
  </ChartLayout>
</template>

<script>
import { ref, watch } from "vue";
import ChartLayout from "../charts/ChartLayout.vue";
import GroupBarChart from "../charts/GroupBarChart.vue";
import { allKor2, pilihanData, listDaerahChart } from "../../data/kor";
import UpArrow from "../icons/chart/UpArrow.vue";

export default {
  components: {
    UpArrow,
    ChartLayout,
    GroupBarChart,
  },
  setup() {
    const title = "groupbarchart-kor";
    const daerahName = ref("Bali");
    const variabelName = ref("Menghadiri Upacara Adat");
    const indexDaerah = ref(0);
    const indexVariabel = ref(0);
    const data = ref(allKor2[indexVariabel.value][indexDaerah.value].data);
    const warna = ref(allKor2[indexVariabel.value][indexDaerah.value].warna);
    const label = ref(allKor2[indexVariabel.value][indexDaerah.value].label);
    const selectedKategori = ref({
      group1: true,
      group2: true,
      group3: true,
    });
    const indexSelectedKategori = ref([0, 1, 2]);

    const changeDaerahName = (value) => {
      changeSelectedKategori("all");
      daerahName.value = value;
    };

    const changeVariabelName = (value) => {
      changeSelectedKategori("all");
      variabelName.value = value;
    };

    const changeDaerah = (daerahName) => {
      switch (daerahName) {
        case "Bali":
          return 0;
        case "Badung":
          return 1;
        case "Bangli":
          return 2;
        case "Buleleng":
          return 3;
        case "Denpasar":
          return 4;
        case "Gianyar":
          return 5;
        case "Jembrana":
          return 6;
        case "Karangasem":
          return 7;
        case "Klungkung":
          return 8;
        case "Tabanan":
          return 9;
        default:
          return 0;
      }
    };

    const changeVariabel = (variabelName) => {
      switch (variabelName) {
        case "Menghadiri Upacara Adat":
          return 0;
        case "Berpartisipasi aktif dalam Upacara Adat":
          return 1;
        case "Menggunakan Bahasa Daerah di Rumah":
          return 2;
        case "Menggunakan Bahasa Daerah di Lingkungan Pergaulan":
          return 3;
        case "Menggunakan Bahasa Daerah di Media Sosial":
          return 4;
        case "Jumlah Dongeng Diketahui":
          return 5;
        case "Kunjungan Langsung ke Tempat Bersejarah":
          return 6;
        case "Kunjungan Tidak Langsung ke Tempat Bersejarah":
          return 7;
        case "Menonton Pertunjukan Seni secara Langsung":
          return 8;
        case "Menonton Pertunjukan Seni secara Tidak Langsung":
          return 9;
        case "Berperan sebagai Pemeran Pertunjukan Seni":
          return 10;
        case "Berperan dalam produksi Pertunjukan Seni":
          return 11;
        case "Penggunaan Produk Tradisional":
          return 12;
        case "Frekuensi melakukan Permainan Rakyat":
          return 13;
        default:
          return 0;
      }
    };

    const changeSelectedKategori = (value) => {
      switch (value) {
        case "group1":
          selectedKategori.value.group1 = !selectedKategori.value.group1;
          if (indexSelectedKategori.value.includes(0)) {
            indexSelectedKategori.value = indexSelectedKategori.value.filter(
              (item) => item !== 0
            );
          } else {
            indexSelectedKategori.value.push(0);
          }
          indexSelectedKategori.value.sort();
          break;
        case "group2":
          selectedKategori.value.group2 = !selectedKategori.value.group2;
          if (indexSelectedKategori.value.includes(1)) {
            indexSelectedKategori.value = indexSelectedKategori.value.filter(
              (item) => item !== 1
            );
          } else {
            indexSelectedKategori.value.push(1);
          }
          indexSelectedKategori.value.sort();
          break;
        case "group3":
          selectedKategori.value.group3 = !selectedKategori.value.group3;
          if (indexSelectedKategori.value.includes(2)) {
            indexSelectedKategori.value = indexSelectedKategori.value.filter(
              (item) => item !== 2
            );
          } else {
            indexSelectedKategori.value.push(2);
          }
          indexSelectedKategori.value.sort();
          break;
        case "all":
          selectedKategori.value = {
            group1: true,
            group2: true,
            group3: true,
          };
          indexSelectedKategori.value = [0, 1, 2];
          break;
        default:
          break;
      }
    };

    watch(
      () => variabelName.value,
      (newValue) => {
        indexVariabel.value = changeVariabel(newValue);
      }
    );

    watch(
      () => daerahName.value,
      (newValue) => {
        indexDaerah.value = changeDaerah(newValue);
      }
    );

    watch(
      [indexSelectedKategori, indexDaerah, indexVariabel],
      () => {
        const newData = [];
        const newWarna = [];
        const newLabel = [];
        indexSelectedKategori.value.forEach((index) => {
          newWarna.push(
            allKor2[indexVariabel.value][indexDaerah.value].warna[index]
          );
          newLabel.push(
            allKor2[indexVariabel.value][indexDaerah.value].label[index]
          );
          newData.push(
            allKor2[indexVariabel.value][indexDaerah.value].data[index]
          );
        });
        data.value = newData;
        warna.value = newWarna;
        label.value = newLabel;
      },
      { deep: true }
    );

    return {
      title,
      data,
      warna,
      label,
      daerahName,
      variabelName,
      indexDaerah,
      indexVariabel,
      selectedKategori,
      indexSelectedKategori,
      changeDaerahName,
      changeVariabelName,
      changeSelectedKategori,
      allKor2,
      pilihanData,
      listDaerahChart,
    };
  },
};
</script>
