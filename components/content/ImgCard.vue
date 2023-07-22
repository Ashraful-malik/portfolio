<script setup>
defineProps({
  description: {
    type: String,
    default: "Default description",
  },
});
</script>

<template>
  <div class="overflow-hidden">
    <slot />
  </div>
</template>
