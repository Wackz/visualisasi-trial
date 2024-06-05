<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/header/Header.vue";
</script>

<template>
  <Header />
  <main class="py-4 px-8 overflow-x-hidden">
    <RouterView />
  </main>
</template>
