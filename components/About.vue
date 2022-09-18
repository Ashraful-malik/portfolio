<template>
  <div
    class="w-full h-auto sm:h-screen flex items-center justify-center bg-red-500"
    id="about"
  >
    <div class="w-90 m-auto">
      <div
        class="sm:grid sm:grid-cols-2 sm:place-items-center sm:place-content-center flex items-center flex-col-reverse justify-center"
      >
        <div class="about_me w-full h-full">
          <p class="sm:text-8xl text-6xl font-semibold mb-16 text-black">
            About Me
          </p>

          <p
            class="text-white tracking-wide sm:w-90 sm:leading-loose leading-relaxed"
          >
            {{ aboutMe.info }}
          </p>

          <div class="mt-12 mb-12 text-center sm:text-left sm:mb-0">
            <a href="/#contact">
              <button
                class="text-base bg-blue-500 py-3 px-8 rounded-full font-normal"
              >
                Contact
              </button>
            </a>
          </div>
        </div>
        <div class="image sm:bg-black rounded-2xl p-7">
          <img
            src="@/assets/images/ashraful.jpeg"
            alt="image"
            class="sm:w-80 w-44 rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutMe: {
        info: `I am Ashraful Malik UI designer from India. I always have been interest in
              Design, and this has led me to pursue a career in UI Design. I strongly believe
              that good design is all about solving problems in a creative and efficient way.
              I am constantly striving to improve my skills and knowledge in order to be able
              to create the best possible solutions for the problem.`,
      },
    };
  },
};
</script>
