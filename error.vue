<template>
  <div>
    <div class="w-full h-screen bg-gray-800">
      <div
        class="content flex items-center justify-center flex-col w-full h-full"
      >
        <!-- gradient animation -->

        <h1 class="text-gray-90 animate-pulse">{{ error.statusCode }}</h1>
        <h2 v-if="error.statusCode === 404">{{ error.message }}</h2>
        <h2 v-else>An error occurred - {{ error.statusCode }}</h2>
        <button @click="handleError" class="button bg-accents-dark">
          Go to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
<style scoped>
.content {
  text-align: center;
}

h1 {
  font-size: 10rem;
  font-weight: bold;
  margin-bottom: 1rem;

  /* text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, */
  /* -1px 1px 0 #fff; */
}

h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #666;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
}

.button {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 3rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
  }

  .button {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }
}
</style>
