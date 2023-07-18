<template>
  <div>
    <div class="container">
      <div class="content">
        <h1>{{ error.statusCode }}</h1>
        <h2 v-if="error.statusCode === 404">{{ error.message }}</h2>
        <h2 v-else>An error occurred - {{ error.statusCode }}</h2>
        <button @click="handleError" class="primary_button button">
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  text-align: center;
}

h1 {
  font-size: 10rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
  text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff,
    -1px 1px 0 #fff;
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
