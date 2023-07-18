<template>
  <div>
    <div class="w-full neo_background">
      <!-- <div class="cursor" id="cursor"></div> -->
      <div class="flex justify-center h-full max-w-6xl m-auto" id="home">
        <div
          class="flex justify-center flex-col max-w-3xl lg:py-36 p-2 lg:p-0 py-36"
        >
          <header>
            <h1 class="home_heading">
              Hello, I'm Ashraful, a Designer and Web Developer based in India.
            </h1>
          </header>
          <div class="mt-8">
            <a class="float-left" href="/#project">
              <button
                class="flex text-white px-10 py-3 items-center font-medium text-sm lg:text-sm text-center primary_button"
              >
                Work
                <div class="pl-2">
                  <ArrowLongRightIcon class="icon" />
                </div>
              </button>
            </a>
          </div>
        </div>
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
<script setup>
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped>
@import "/assets/css/index.css";
</style>
