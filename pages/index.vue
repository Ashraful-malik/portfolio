<template>
  <div class="bg-dark-bg">
    <Herosection />
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  name: "IndexPage",
  mounted() {
    feather.replace();
  },
};
</script>
