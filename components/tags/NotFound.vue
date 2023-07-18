<script setup>
const message = " Sorry, we couldn't find any articles with the specified tag.";
</script>

<template>
  <div class="items-center justify-center mt-10">
    <div
      class="bg-white p-8 rounded shadow-md max-w-md w-full border border-cardbg-dark custom_shadow"
    >
      <h1 class="text-2xl font-bold mb-4">Article Not Found</h1>
      <p class="text-gray-600">
        {{ message }}
      </p>
    </div>
  </div>
</template>
