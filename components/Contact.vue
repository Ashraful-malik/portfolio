<template>
  <div>
    <div class="relative h-screen" id="contact">
      <div class="w-4/5 h-full m-auto">
        <div class="title text-center pt-20 text-outline text-gray-40">
          <h1 class="text-3xl font-bold">Let Connect</h1>
        </div>
        <div class="wrapper flex flex-wrap items-center mt-24 flex-col gap-7">
          <div class="email max-w-full text-center">
            <a
              :href="`mailto:${email}`"
              class="hover:text-accents-dark transition-colors text-gray-60 text-lg lg:text-2xl"
            >
              <h2>{{ email }}</h2>
            </a>
          </div>
          <div
            class="social-links flex flex-wrap items-center gap-8 justify-center lg:justify-normal"
          >
            <div class="link" v-for="(link, index) in socialLinks" :key="index">
              <a :href="link.link" target="_black" class="flex items-center">
                <span class="text-base text-gray-100">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = ref("ashraful.inbox@gmail.com");

const socialLinks = ref([
  { name: "Instagram", link: "https://www.instagram.com/uiwebbyte/" },
  { name: "Twitter", link: "https://twitter.com/Ashraful__malik" },
  { name: "Codepen", link: "https://codepen.io/ashraful404" },
  { name: "Linkdin", link: "https://www.linkedin.com/in/ashraful-malik/" },
]);
</script>
<style scoped>
/* hover effect for op social links  */
a {
  position: relative;
}
a span::after,
span::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  @apply bg-accents-dark;
  width: 100%;
  height: 2px;
  transform: scalex(0);
  transform-origin: right;
  transition: transform 250ms ease-in;
}
a span::before {
  bottom: -5px;
  transform-origin: left;
}
a span:hover::after {
  transform: scalex(1);
  transform-origin: left;
}
</style>
