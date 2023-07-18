<template>
  <div class="about_container h-auto">
    <div class="max-w-5xl m-auto mt-40">
      <section class="flex flex-wrap h-full justify-center p-4 lg:p-0">
        <div class="about">
          <h1 class="text-gray-900 text-4xl mb-6 font-bold">About Me</h1>

          <div class="img">
            <img
              src="@/assets/images/about_ashraful.png"
              alt="Ashraful Malik"
              class="rounded-2xl w-80 h-52 object-cover"
            />
          </div>

          <div class="text-gray-700 max-w-2xl leading-7 mt-8">
            <article>
              Hi! 👋 I'm Ashraful Malik, a UI designer, Webflow developer, and
              web developer. I love crafting beautiful and functional digital
              experiences that leave a lasting impression.<br />
              <span>
                <h1 class="text-lg font-bold pt-4">UI Design:</h1>
                I create visually appealing and user-friendly designs. I believe
                that a well-designed interface can make a big difference in how
                people interact with websites.
              </span>
              <span class="pt-10">
                <h1 class="text-lg font-bold pt-4">Webflow Development:</h1>
                Using the power of Webflow, I build custom, interactive
                websites. Webflow allows for easy content management, so you can
                effortlessly update your website without technical knowledge.
              </span>
              <span class="pt-10">
                <h1 class="text-lg font-bold pt-4">Web Development:</h1>
                I have expertise in HTML, CSS, JavaScript, and other web
                technologies. I develop responsive websites that work well on
                all devices and browsers.
              </span>
              <br />
              <span class="">
                <p class="pt-4">
                  Let's work together to bring your ideas to life and create an
                  exceptional online presence!
                </p>
              </span>
            </article>
          </div>
          <nuxt-link
            to="/#contact"
            class="inline-block py-2 pr-4 pl-3 text-white rounded-full font-medium primary_button mt-6"
            >Let's connect
          </nuxt-link>
        </div>
      </section>
      <div class="projects my-60">
        <!-- <projects /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
