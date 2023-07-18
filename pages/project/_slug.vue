<template>
  <div>
    <div
      class="background-image w-full h-60 bg-cover bg-center p-6 flex items-center justify-center"
      :style="{
        'background-image':
          'url(' +
          'https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' +
          ')',
      }"
    >
      <p class="title">Design Gallery</p>
    </div>
    <div class="project-container max-w-6xl m-auto">
      <article class="mt-28">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>

        <nuxt-content :document="project" />
      </article>
    </div>
    <projects />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("project", params.slug).fetch();
    return { project };
  },
  head() {
    return {
      title: this.project.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project.description,
        },
      ],
    };
  },
};
</script>

<style scoped>
article {
  display: block;
  margin: 0 auto;
  padding: 50px 30px;
  max-width: 1800px;
}
h1 {
  font-size: 28px;
  font-weight: 900;
}
.title {
  font-size: 3rem;

  font-family: "DM Serif Display";
  font-style: normal;
  font-weight: 400;
}
</style>
