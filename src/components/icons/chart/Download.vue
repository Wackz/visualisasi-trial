<script setup>
defineProps({
  className: String,
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    :className="className"
  >
    <path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z" />
  </svg>
</template>
