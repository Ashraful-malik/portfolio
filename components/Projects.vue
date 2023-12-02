<template>
  <div>
    <div class="w-4/5 m-auto lg:mt-20" id="project">
      <section class="projects flex items-center flex-col gap-32">
        <div
          class="w-full lg:h-136 h-auto rounded-3xl"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="project-img w-full h-4/5 overflow-hidden cursor-pointer">
            <NuxtImg
              :src="project.img"
              placeholder
              format="webp"
              fit="cover"
              class="img w-full"
            />
          </div>
          <div class="project-content pt-8 flex items-center justify-between">
            <div class="info max-w-lg">
              <ul
                class="flex gap-3 flex-wrap text-gray-50 border border-gray-400 mb-2 py-2 px-3 rounded-full items-center max-w-max"
              >
                <li v-for="stack in project.tag" :key="project.id">
                  <p class="text-sm">{{ stack }}</p>
                </li>
              </ul>
              <h1 class="text-lg font-medium uppercase text-gray-50">
                {{ project.name }}
              </h1>
              <p class="text-base text-gray-80">
                {{ project.description }}
              </p>
            </div>
            <!-- button -->
            <a :href="project.link" :target="project.target" rel="noopener">
              <div
                class="button w-14 h-14 rounded-full group border border-gray-200 text-center flex items-center justify-center text-gray-200 hover:bg-accents-dark hover:text-gray-40 hover:border-gray-500"
              >
                <div
                  class="icon group-hover:-translate-y-2 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const projects = ref([
  {
    id: 1,
    img: "/projectImages/mytailwind.png",
    link: "https://mytailwind.xyz/",
    tag: ["Vue js", "Nuxt Js", "Tailwind"],
    name: "mytailwind.xyz",
    description: "Web Development",
    target: "_blank",
  },
  {
    id: 2,
    img: "/projectImages/ui-buttons.png",
    link: "https://uibuttons.netlify.app/",
    name: "css buttons",
    tag: ["Vue js", "CSS"],
    description: "Web Development",
    target: "_blank",
  },
]);
</script>

<style scoped>
/* hover effect  */
.project-img {
  border-radius: 1rem;
  transition: border-radius ease-in-out 200ms;
}
.project-img .img {
  transform: scale(1);
  transition: transform ease-in-out 200ms;
}
.project-img:hover .img {
  transform: scale(1.02);
}
.project-img:hover {
  border-radius: 2.3rem;
}
</style>
