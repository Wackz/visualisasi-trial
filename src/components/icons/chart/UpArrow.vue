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
    <path fill="currentColor" d="m7 14l5-5l5 5z" />
  </svg>
</template>
