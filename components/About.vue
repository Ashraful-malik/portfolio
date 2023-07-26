<template>
  <div class="w-full h-auto lg:h-screen lg:mt-72 neo_background mt-32">
    <div class="max-w-5xl m-auto py-32 p-2" id="about">
      <section
        class="flex items-center justify-between flex-wrap flex-col-reverse lg:flex-row"
      >
        <div class="about_content p-3 lg:p-0 mt-8 lg:mt-0">
          <h1
            class="lg:text-4xl text-3xl font-semibold lg:mb-6 mb-3 text-gray-900"
          >
            About Me
          </h1>

          <div class="text-gray-900 max-w-lg leading-relaxed">
            <article class="lg:m-0 lg:p-0 lg:text-base text-sm">
              Hello👋, I'm
              <strong> Ashraful Malik, a web developer and web designer</strong
              >.I specialize in creating websites that not only look great but
              also function smoothly . With expertise in both
              <strong> Design and web development.</strong>
            </article>
            <p>
              Read
              <strong>
                <nuxt-link to="/about" class="underline hover:text-blue-500">
                  more about me
                </nuxt-link>
              </strong>
            </p>
          </div>

          <div class="mt-5 text-center sm:text-left sm:mb-0">
            <a href="/#contact">
              <button class="text-sm lg:py-3 py-2 px-4 lg:px-6 primary_button">
                Contact
              </button>
            </a>
          </div>
        </div>
        <div
          class="image rounded-2xl p-2 border border-cardbg-dark border-style-2"
        >
          <img
            src="@/assets/images/ashraful.jpeg"
            alt="Ashraful Malik"
            class="rounded-2xl w-full h-full"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script></script>

<style scoped>
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
