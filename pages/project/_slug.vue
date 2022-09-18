<template>
  <article class="mt-28 w-90 m-auto">
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("project", params.slug).fetch();
    return { article };
  },
};
</script>

<style>
article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 1800px;
}
h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
}
</style>
