<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header/Header.vue";
</script>

<template>
  <Header />
  <main class="py-4 px-8 md:px-[5%] lg:px-[10%] overflow-x-hidden bg-main-pattern bg-base">
    <RouterView />
  </main>
</template>
