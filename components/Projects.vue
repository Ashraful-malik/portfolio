<template>
  <div class="max-w-6xl m-auto lg:mt-20" id="project">
    <div class="mb-12 p-4 lg:p-0">
      <h1 class="font-semibold lg:text-5xl text-3xl">Work</h1>
      <p class="text-gray-600 text-sm mt-1">All my latest projects</p>
    </div>
    <section
      class="sm:grid sm:grid-cols-2 sm:gap-5 h-auto flex flex-col lg:p-0 p-3"
    >
      <div v-for="project in projects" :key="project.id">
        <div
          class="project rounded-lg relative cursor-pointer p-4 border border-cardbg-dark mb-4 border-width"
        >
          <a :href="project.link" :target="project.target" rel="noopener">
            <div
              class="project_img h-auto md:h-auto lg:h-96 w-full overflow-hidden rounded-lg s bg-cover bg-center"
            >
              <img
                :src="project.img"
                :alt="project.title"
                :title="project.title"
                class="w-full lg:h-96 h-full hover_effect object-cover"
              />
            </div>

            <div class="content mt-8 lg:max-w-sm max-w-xs">
              <h1 class="mb-2 font-bold text-lg">{{ project.title }}</h1>
              <p class="text-gray-600 text-sm">{{ project.description }}</p>
            </div>
            <div class="flex">
              <div
                class="tag mt-6 text-xs border border-gray-300 rounded-full text-gray-500 py-1 px-2 mr-2"
                v-for="stack in project.tag"
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
      projects: [
        {
          id: 1,
          img: "/projectImages/mytailwind.png",
          link: "https://mytailwind.xyz/",
          background: "#fbdb9c",
          tag: ["Vue js", "Nuxt Js", "Tailwind"],
          title: "mytailwind.xyz",
          description:
            "Mytailwind is a website that allows you to easily copy and customize Tailwind components with just a few clicks. ",
          target: "_blank",
        },
        {
          id: 2,
          img: "/projectImages/button.png",
          link: "https://uibuttons.netlify.app/",
          title: "css buttons",
          background: "#abd5fd",
          tag: ["Vue js", "CSS"],
          title: "uibuttons",
          description:
            "The UI button offers a variety of CSS buttons and hover effects",
          target: "_blank",
        },
        {
          id: 3,
          img: "/projectImages/daily-ui-design.png",
          link: "/blog/daily-ui-challange",
          title: "30 Days Daily UI Challenge",
          background: "#FFFFF",
          tag: ["Web design", "ui", "ui design"],
          description: "My 30 Days Daily UI Challenge Project Showcase",
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
