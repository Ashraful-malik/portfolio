<script>
export default {
  props: ["date"],
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
  },
};
</script>

<template>
  <p
    class="tracking-widest text-base title-font font-medium text-gray-500 my-2 block"
  >
    {{ formatDate(date) }}
  </p>
</template>
