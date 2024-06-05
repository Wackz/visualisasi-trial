<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";
import Close from "../icons/shape/Close.vue";
import MenuBar from "../icons/shape/MenuBar.vue";

// Membuat ref untuk menandai apakah dropdown mobile terbuka atau tidak
const isMobileDropdownOpen = ref(false);

// Fungsi untuk mengubah status dropdown mobile
const toggleMobileDropdown = () => {
  isMobileDropdownOpen.value = !isMobileDropdownOpen.value;
};

// Array objek untuk navigasi
const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tabulasi", href: "/tabulasi" },
];

// Fungsi untuk menangani klik pada dokumen dan menutup dropdown mobile
const handleDocumentClick = (event) => {
  const dropdown = document.querySelector(".md\\:hidden");
  if (dropdown && !dropdown.contains(event.target)) {
    isMobileDropdownOpen.value = false;
  }
};

// Menggunakan lifecycle hook onMounted untuk menambahkan event listener
onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});

// Menggunakan lifecycle hook onBeforeUnmount untuk membersihkan event listener
onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>

<template>
  <header
    class="bg-primary font-poppins sticky top-0 w-full z-40 bg-opacity-95 py-2"
  >
    <div class="flex h-16 justify-between items-center px-3">
      <!-- Bagian logo dan judul halaman -->
      <div class="lg:ml-10 flex w-60 items-center md:justify-around">
        <img
          src="/Logo PKL.png"
          alt="logo"
          width="45"
          height="45"
          class="block"
        />
        <p class="text-white leading-5 ml-2 text-left font-semibold">
          Web Hasil PKL D-IV 63 <br />
          <span class="text-amber-400">T.A. 2023/2024</span>
        </p>
      </div>
      <!-- Bagian tombol hamburger untuk dropdown mobile -->
      <div class="relative">
        <button
          @click="toggleMobileDropdown"
          class="transition-transform duration-300 transform hover:scale-110"
          aria-label="hamburger menu"
        >
          <Close v-if="isMobileDropdownOpen" />
          <MenuBar v-else />
        </button>
        <!-- Dropdown mobile -->
        <transition name="fade">
          <div
            :class="[
              'lg:hidden fixed top-0 left-0 w-full h-max -translate-y-full transition-transform duration-300 opacity-0',
              isMobileDropdownOpen && 'translate-y-0 top-20 opacity-100',
            ]"
          >
            <div class="flex flex-col items-center">
              <!-- Iterasi menu navigasi -->
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  'block px-4 py-2 border-b border-accent w-full text-center text-xl text-white',
                  item.href === $route.fullPath
                    ? 'bg-primary text-xl font-bold'
                    : 'bg-primary transition-transform duration-300 transform lg:hover:scale-110',
                  item.name === 'Hasil PKL'
                    ? 'text-primary bg-yellow-500  hover:bg-yellow-400 '
                    : '',
                ]"
                :aria-current="item.current ? 'page' : undefined"
              >
                {{ item.name }}
              </RouterLink>
            </div>
          </div>
        </transition>
      </div>
      <!-- Bagian menu navigasi untuk desktop -->
      <div
        class="hidden lg:flex gap-12 flex-col md:flex-row justify-around mr-16"
      >
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          :class="[
            'transition-transform duration-300 transform rounded-lg px-3 py-2 text-base font-semibold inline-flex justify-center',
            item.name === 'Hasil PKL'
              ? 'text-red-800 bg-yellow-500  hover:bg-yellow-400 '
              : '',
            item.name !== 'Hasil PKL'
              ? 'after:w-8 after:h-0.5 after:bg-accent after:absolute after:-bottom-0 after:transition-all after:opacity-0 hover:after:opacity-100 after:duration-300 hover:after:scale-125'
              : '',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          class="relatif"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
