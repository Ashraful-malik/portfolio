<template>
  <div>
    <div class="image-3 absolute top-0 right-0">
      <img src="@/assets/images/background_gradient.svg" class="opacity-70" />
    </div>

    <div class="w-full h-screen relative">
      <!-- ------------------------- -->

      <div class="flex items-center justify-center h-full z-20" id="home">
        <div class="flex flex-col justify-center">
          <div
            class="sm:text-4xl text-lg text-white leading-normal text-center"
          >
            Hello I am Ashraful Malik
          </div>
          <div class="font-medium sm:text-7xl text-center text-4xl">
            <p class="text-gray-100">User interface Designer</p>
          </div>
          <div class="text-gray-400 sm:text-lg text-center pt-4">
            <p>and I love to create UI Design</p>
          </div>
          <div class="flex items-center justify-center">
            <a class="m-4" href="/#project">
              <Button
                class="mt-5 font-medium px-12 py-3 rounded-full bg-blue-500 text-white text-center drop-shadow-2xl"
              >
                Projects</Button
              >
            </a>
          </div>
        </div>

        <!-- Scroll down -->
        <div
          class="absolute py-7 animate-bounce border bottom-10 border-gray-600 rounded-full"
        ></div>
      </div>
    </div>
    <!-- Projects Section-->
    <Projects />
    <!-- About Section -->
    <About />
    <!-- Contact Section -->
    <Contact />
  </div>
</template>
<script>
// export default {
//   async asyncData({ $content, params }) {
//     const articles = await $content("blog", params.slug)
//       .only(["title", "description", "img", "slug"])
//       .sortBy("createdAt", "asc")
//       .fetch();
//     return {
//       articles,
//     };
//   },
// };
</script>
<style scoped>
Button {
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>
