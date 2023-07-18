<template>
  <div>
    <div class="all-projects max-w-6xl m-auto my-32 p-4 lg:p-0">
      <h1 class="lg:text-4xl text-3xl font-bold mb-10">All projects</h1>

      <ul class="lg:grid grid-cols-3 lg:gap-4">
        <li
          v-for="project of projects"
          :key="project.slug"
          class="bg-white rounded-xl overflow-hidden border border-gray-200 mb-4 lg:mb-0"
        >
          <NuxtLink
            :to="{ name: 'project-slug', params: { slug: project.slug } }"
          >
            <div class="img-container w-full h-56 overflow-hidden">
              <img
                :src="require(`@/assets/images/thumbnail/${project.img}`)"
                class="w-full rounded-tl-xl h-full object-cover"
              />
            </div>
            <div class="p-2">
              <h2 class="text-xl font-semibold mt-4">{{ project.title }}</h2>
              <p class="text-base text-gray-500 mt-2 overme overflow-hidden">
                {{ project.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  layout: "blogs-layout", //custom layout for the all blog page
  async asyncData({ $content, params }) {
    const projects = await $content("project")
      .only(["title", "description", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      projects,
    };
  },
  head() {
    return {
      title: "Projects",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "design and development related projects.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.overme {
  /* display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden; */
  @apply truncate;
}
</style>
