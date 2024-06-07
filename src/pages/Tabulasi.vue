<script setup>
import { pilihanData, kategori, allKor2 } from "../data/kor";
import { ref, watch } from "vue";

const dataTerpilih = ref(0);
const wilayahTerpilih = ref(0);
const selectedData = ref(allKor2[dataTerpilih.value][wilayahTerpilih.value]);

const kab = [
  "Provinsi Bali",
  "Badung",
  "Bangli",
  "Buleleng",
  "Denpasar",
  "Gianyar",
  "Jembrana",
  "Karangasem",
  "Klungkung",
  "Tabanan",
];

watch([dataTerpilih, wilayahTerpilih], () => {
  selectedData.value = allKor2[dataTerpilih.value][wilayahTerpilih.value];
});
</script>

<template>
  <div class="min-h-[90vh] flex flex-col justify-start xl:justify-center">
    <h1
      class="text-primary text-3xl md:text-4xl lg:text-5xl font-bold md:mt-12 xl:mt-0"
    >
      Tabulasi
    </h1>
    <h3 class="text-lg md:text-xl lg:text-2xl font-semibold text-primary mb-4">
      Perilaku Pelestarian Budaya <span class="text-accent">Gen-Z</span> di Bali
    </h3>
    <div class="flex flex-col md:flex-row justify-center gap-4">
      <div class="w-full">
        <h3 class="text-primary text-left">Pilih Data</h3>
        <select
          name="data"
          id="data"
          class="w-full border-2 border-primary bg-stone-50 rounded-xl focus:border-primary focus:ring-primary py-1 px-2"
          v-model="dataTerpilih"
        >
          <option
            v-for="item in pilihanData"
            :key="item.value"
            :value="item.value"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="w-full">
        <h3 class="text-primary text-left">Pilih Wilayah</h3>
        <select
          name="wilayah"
          id="wilayah"
          class="w-full border-2 border-primary bg-stone-50 rounded-xl focus:border-primary focus:ring-primary py-1 px-2"
          v-model="wilayahTerpilih"
        >
          <option v-for="(item, index) in kab" :key="index" :value="index">
            {{ item }}
          </option>
        </select>
      </div>
      <!-- <div class="w-full">
        <h3 class="text-primary text-left">Pilih Kategori</h3>
        <div
          class="w-full h-fit flex flex-col p-4 items-stretch justify-center border-2 border-primary bg-white rounded-xl focus:border-primary focus:ring-primary"
        >
          <label
            v-for="(checked, kategori) in kategoriTerpilih"
            :key="kategori"
            class="capitalize"
          >
            <input
              type="checkbox"
              v-model="kategoriTerpilih[kategori]"
              class="text-sm font-medium text-primary focus:border-primary focus:ring-0 rounded-xl"
            />
            {{ kategori }}
          </label>
        </div>
      </div>
      <div class="w-full">
        <h3 class="text-primary text-left">Pilih Daerah</h3>
        <div
          class="w-full flex flex-col p-4 items-stretch justify-center border-2 border-primary bg-white rounded-xl focus:border-primary focus:ring-primary"
        >
          <label
            v-for="(checked, kategori) in wilayahTerpilih"
            :key="kategori"
            class="capitalize"
          >
            <input
              type="checkbox"
              v-model="wilayahTerpilih[kategori]"
              class="text-sm font-medium text-primary focus:border-primary focus:ring-0 rounded-xl"
            />
            {{ kategori }}
          </label>
        </div>
      </div> -->
    </div>
    <h3
      class="text-primary text-center text-xl md:text-2xl lg:text-3xl font-bold my-6"
    >
      {{ selectedData.title }}
    </h3>
    <div class="overflow-x-scroll md:overflow-hidden">
      <table class="mx-auto border rounded-xl bg-white border-separate">
        <thead class="bg-amber-300">
          <th class="px-6 py-3 text-center font-bold uppercase text-secondary border">
            {{ dataTerpilih == 14 ? "Dimensi" : "Kategori Frekuensi" }}
          </th>
          <th
            class="px-6 py-3 text-center font-bold uppercase text-secondary border"
            v-for="item in kategori"
            :key="item.name"
          >
            {{ item.name }}
          </th>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in selectedData.data[0]"
            :key="index"
            :class="{ 'bg-gray-100': index % 2 == 0 }"
            class="border"
          >
            <td class="py-1 px-2 font-semibold border">
              {{ dataTerpilih == 14 ? item.axis : item.label }}
            </td>
            <td class="text-center py-1 px-2 border">{{ item.value }}</td>
            <td class="text-center py-1 px-2 border">
              {{ selectedData.data[1][index].value }}
            </td>
            <td class="text-center py-1 px-2 border">
              {{ selectedData.data[2][index].value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
