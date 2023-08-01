<script setup>
defineProps({
  description: {
    type: String,
    default: "daily ui images",
  },
});
</script>

<template>
  <div class="overflow-hidden">
    <slot />
  </div>
</template>
