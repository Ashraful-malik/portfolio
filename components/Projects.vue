<template>
  <div>
    <div class="h-auto bg-cover w-90 m-auto mt-10 mb-60" id="project">
      <div class="sm:grid sm:grid-cols-2 sm:gap-5 h-auto flex flex-col gap-5">
        <div v-for="project in projects" :key="project.id">
          <nuxt-link :to="project.link">
            <div
              class="project h-96 w-full overflow-hidden border border-gray-700 rounded-lg relative cursor-pointer"
            >
              <div class="category z-10">{{ project.name }}</div>
              <img
                alt="image"
                :src="require(`@/assets/images/thumbnail/${project.img}`)"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "UI kit ",
          img: "design_system.png",
          category: "web",
          link: "project/design-system",
        },
        {
          id: 2,
          name: "Web design",
          img: "book.png",
          category: "web",
          link: "project/book",
        },
        {
          id: 3,
          name: "Web design ",
          img: "service-landing-page.png",
          category: "web",
          link: "project/service",
        },
      ],
    };
  },
};
</script>

<style scoped>
.category {
  position: absolute;
  font-size: 2rem;
  color: white;
  width: 100%;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background: black;
}
.project:hover .category {
  display: flex;
}
</style>
