<script setup>
import { pilihanData, kategori } from "../data/kor";
import { ref, watch } from "vue";

const dataTerpilih = ref(0);
const kategoriTerpilih = ref({
  anak: true,
  dewasa: true,
  ortu: true,
});
const wilayahTerpilih = ref({
  badung: true,
  bangli: true,
  buleleng: true,
  denpasar: true,
  gianyar: true,
  jembrana: true,
  karangasem: true,
  klungkung: true,
  tabanan: true,
  provinsi: true,
});

const kab = [
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

const data = [
  {
    title: "Estimasi Perilaku Pelestarian Budaya",
    data: {
      badung: 60,
      bangli: 20,
      buleleng: 68,
      denpasar: 41,
      gianyar: 23,
      jembrana: 57,
      karangasem: 36,
      klungkung: 20,
      tabanan: 69,
    },
  },
  {
    title: "Estimasi Perilaku Digital",
    data: {
      badung: 60,
      bangli: 20,
      buleleng: 68,
      denpasar: 41,
      gianyar: 23,
      jembrana: 57,
      karangasem: 36,
      klungkung: 20,
      tabanan: 69,
    },
  },
  {
    title: "Estimasi Perilaku Belajar",
    data: {
      badung: 60,
      bangli: 20,
      buleleng: 68,
      denpasar: 41,
      gianyar: 23,
      jembrana: 57,
      karangasem: 36,
      klungkung: 20,
      tabanan: 69,
    },
  },
];

const currentData = ref();
const tabelShow = ref(false);
const selectedData = ref(data);

const handleDataChoose = (item) => {
  currentData.value = item;
};

const addData = () => {
  if (
    !selectedData.value.some((item) => item.title === currentData.value.title)
  ) {
    selectedData.value.push(currentData.value);
    tabelShow.value = true;
  }
};

const resetdata = () => {
  selectedData.value = [];
  tabelShow.value = false;
};
</script>

<template>
  <h3 class="text-primary text-left">Pilih Data</h3>
  <select
    name="data"
    id="data"
    class="w-full border-2 border-primary bg-white rounded-xl focus:border-primary focus:ring-primary py-1 px-2"
    v-model="dataTerpilih"
  >
    <option v-for="item in pilihanData" :key="item.value" :value="item.value">
      {{ item.name }}
    </option>
  </select>

  <div class="flex flex-col md:flex-row justify-center gap-4 mt-4">
    <div class="w-full">
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
    </div>
  </div>

  <h3 class="text-primary text-center text-3xl font-bold my-6">Tabel Tabulasi</h3>
  <div class="overflow-x-scroll md:overflow-hidden">
    <table class="mx-auto border border-collapse border-gray-400">
      <thead class="bg-gray-50">
        <tr class="bg-amber-300">
          <th class="px-6 py-3 text-center font-bold uppercase text-secondary">
            Kabupaten/Kota
          </th>
          <th
            class="px-6 py-3 text-center font-bold uppercase text-secondary"
            v-for="item in selectedData"
            :key="item.title"
          >
            {{ item.title }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-show="wilayahTerpilih.badung">
          <td class="p-2">Badung</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.badung }}
          </td>
        </tr>
        <tr v-show="wilayahTerpilih.bangli">
          <td class="p-2">Bangli</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.bangli }}
          </td>
        </tr>
        <tr v-show="wilayahTerpilih.buleleng">
          <td class="p-2">Buleleng</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.buleleng }}
          </td>
        </tr>
        <tr v-show="wilayahTerpilih.denpasar">
          <td class="p-2">Denpasar</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.denpasar }}
          </td>
        </tr>
        <tr v-show="wilayahTerpilih.gianyar">
          <td class="p-2">Gianyar</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.gianyar }}
          </td>
        </tr>
        <tr v-show="wilayahTerpilih.jembrana">
          <td class="p-2">Jembrana</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.jembrana }}
          </td>
        </tr>
        <tr v-show="wilayahTerpilih.karangasem">
          <td class="p-2">Karangasem</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.karangasem }}
          </td>
        </tr>
        <tr v-show="wilayahTerpilih.klungkung">
          <td class="p-2">Klungkung</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.klungkung }}
          </td>
        </tr>
        <tr v-show="wilayahTerpilih.tabanan">
          <td class="p-2">Tabanan</td>
          <td
            v-for="item in selectedData"
            :key="item.title"
            class="text-center"
          >
            {{ item.data.tabanan }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
