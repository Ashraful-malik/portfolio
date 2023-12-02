<template>
  <div>
    <div class="w-full bg-bkg relative">
      <!-- test navbar
       -->

      <div class="absolute left-1/2 -top-10 transform -translate-x-40">
        <GradientAnimation />
      </div>

      <!-- <div class="cursor" id="cursor"></div> -->
      <div class="flex justify-center min-h-screen mx-auto" id="home ">
        <div
          class="flex justify-center lg:mb-14 items-center flex-col max-w-2xl text-center z-10"
        >
          <h1 class="text-3xl font-bold text-gray-30 leading-none">
            Hello, I'm Ashraful,
            <span class="text-outline">Frontend Developer & UI Designer</span>
          </h1>
          <div class="container mx-auto mt-20 flex flex-col items-center">
            <nuxt-link
              to="/#project"
              class="btn text-gray-80 hover:bg-accents-dark border border-gray-200 hover:text-gray-20"
            >
              <span class="texts">
                <p>Projects</p>
                <p>Projects</p>
              </span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <!-- Skills -->
      <!-- <Skills /> -->
    </div>
    <!-- Projects Section-->
    <Projects />
    <!-- About Section -->
    <About />
    <!-- Contact Section -->
    <Contact />
  </div>
</template>

<script setup></script>

<style scoped>
@import "/assets/css/index.css";

/* button effect */
.btn {
  height: 2.5rem;
  width: 7rem;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}
.texts {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: transform 273ms ease;
}
.btn p {
  text-align: center;
  font-size: 16px;
  position: absolute;
}

.btn p:nth-child(2) {
  transform: translateY(40px);
}
.btn:hover .texts {
  transform: translateY(-40px);
}
</style>
