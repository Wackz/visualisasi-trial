<template>
  <div>
    <div
      class="bg-primary mt-6 text-lg font-bold text-white rounded-t-2xl p-2 px-4"
    >
      {{ title.toUpperCase() }}
    </div>
    <div
      :class="[
        'relative p-4 flex flex-col w-full shadow-xl bg-[#FFFCFA] rounded-b-2xl border-1 mx-auto lg:px-8 transition-all duration-300 opacity-0',
        current === 0 && 'opacity-100',
      ]"
      v-if="current === 0"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const current = ref(0);
</script>
