<template>
  <div class="max-w-6xl m-auto lg:mt-20" id="project">
    <div class="mb-12 p-4 lg:p-0">
      <h1 class="font-semibold lg:text-5xl text-3xl">Work</h1>
      <p class="text-gray-600 text-sm mt-1">All my latest projects</p>
    </div>
    <section
      class="sm:grid sm:grid-cols-2 sm:gap-5 h-auto flex flex-col lg:p-0 p-3"
    >
      <div v-for="webdev in webDevelopment" :key="webdev.id">
        <div
          class="project rounded-lg relative cursor-pointer p-4 border border-cardbg-dark mb-4 border-width"
        >
          <a :href="webdev.link" target="_blank" rel="noopener">
            <div
              class="project_img h-auto md:h-auto lg:h-96 w-full overflow-hidden rounded-lg s bg-cover bg-center"
            >
              <nuxt-img
                format="webp"
                :src="`/projectImages/${webdev.img}`"
                :alt="webdev.title"
                :title="webdev.title"
                class="w-full h-full hover_effect object-cover"
                quality="90"
              />
            </div>
            <div class="content mt-8 lg:max-w-sm max-w-xs">
              <p class="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, recusandae
              </p>
            </div>
            <div class="flex">
              <div
                class="tag mt-6 text-xs border border-gray-300 rounded-full text-gray-500 py-1 px-2 mr-2"
                v-for="stack in webdev.tag"
              >
                <p>
                  {{ stack }}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webDevelopment: [
        {
          id: 1,
          img: "mytailwind.png",
          link: "https://mytailwind.xyz/",
          title: "mytailwind",
          background: "#fbdb9c",
          tag: ["Vue js", "Nuxt Js", "Tailwind"],
        },
        {
          id: 2,
          img: "button.png",
          link: "https://uibuttons.netlify.app/",
          title: "css buttons",
          background: "#abd5fd",
          tag: ["Vue js", "CSS"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.project_img .hover_effect {
  transition: transform 0.5s ease-in-out;
}
.project_img .hover_effect:hover {
  transform: scale(1.1);
}

.border-width {
  box-shadow: 4px 4px 0px 0px #020617;
}
</style>
