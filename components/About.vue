<template>
  <div class="w-full">
    <div class="w-4/5 m-auto py-40" id="about">
      <section class="grid grid-cols-3 gap-6 items-start">
        <div class="img lg:sticky top-20 lg:col-auto col-span-3">
          <img
            src="@/assets/images/about_ashraful.png "
            alt="Ashraful Malik"
            class="rounded-xl"
          />
          <div class="name lg:pt-8">
            <h1 class="text-base font-bold text-gray-80">Ashraful Malik</h1>
            <p class="font-[14px] text-gray-100">
              UI designer and front-end developer
            </p>
          </div>
        </div>
        <div class="content lg:col-span-2 col-span-3">
          <div class="about-me text-lg max-w-xl gradient-text">
            <p>
              {{ aboutMe }}
            </p>
          </div>
          <div class="skills mt-8 max-w-2xl">
            <div class="skill">
              <div v-for="(skill, index) in mySkills" :key="index" class="mt-8">
                <h1 class="text-lg font-semibold text-gray-40">
                  {{ skill.skillName }}
                </h1>
                <p class="mt-3 text-base text-gray-80">
                  {{ skill.aboutskill }}
                </p>
              </div>
            </div>

            <!-- my tec stacks -->
            <div class="stacks mt-8">
              <div class="title text-lg font-semibold text-gray-40">
                My stacks
              </div>
              <div class="img flex mt-3 items-center gap-8 flex-wrap">
                <div
                  v-for="stack in tecStacks"
                  :key="stack.id"
                  class="w-16 h-16 bg-gray-700 p-2 rounded-md group cursor-pointer"
                >
                  <img
                    :src="stack.img"
                    alt="stack img"
                    class="grayscale-0 group-hover:grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const tecStacks = ref([
  { id: 1, img: "/skillsImg/html5.svg" },
  { id: 2, img: "/skillsImg/css3.svg" },
  { id: 3, img: "/skillsImg/javascript.svg" },
  { id: 4, img: "/skillsImg/nuxt.svg" },
  { id: 5, img: "/skillsImg/tailwind.svg" },
  { id: 6, img: "/skillsImg/figma.svg" },
]);
const aboutMe = ref(
  "Hi! 👋 I'm Ashraful Malik,UI designer and web developer. I love crafting beautiful and functional digital experiences that leave a lasting impression."
);
const mySkills = ref([
  {
    skillName: "UI Design",
    aboutskill:
      "I create visually appealing and user-friendly designs. I believe that a well-designed interface can make a big difference in how people interact with websites.",
  },
  {
    skillName: "Web Development",
    aboutskill:
      "I have expertise in HTML, CSS, JavaScript, and other web technologies. I develop responsive websites that work well on all devices and browsers. Let's work together to bring your ideas to life and create an exceptional online presence.",
  },
]);
</script>

<style scoped>
@import url(../assets/css/index.css);

img {
  width: 17rem;
}

@media (max-width: 400px) {
  img {
    transform-origin: bottom left;
    transform: rotate(0deg);
    width: 14rem;
    margin-bottom: 2rem;
  }
}
</style>
