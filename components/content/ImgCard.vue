<script setup>
defineProps({
  description: {
    type: String,
    default: "Default description",
  },
});
</script>

<template>
  <div class="p-6 border bg-slate-100 overflow-hidden">
    <slot />
  </div>
</template>
