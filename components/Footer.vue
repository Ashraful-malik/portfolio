<template>
  <div>
    <div class="sm:h-96 h-auto border-t border-gray-600 bg-dark-bg">
      <div
        class="sm:w-90 w-auto m-auto flex sm:items-start sm:justify-around justify-center items-center flex-wrap pt-16 sm:flex-row flex-col"
      >
        <div class="logo sm:w-32 w-28">
          <NuxtLink to="/">
            <img src="@/assets/images/Logo1.svg" alt="Logo" class="" />
          </NuxtLink>
        </div>
        <div class="page_links">
          <p
            class="text-base text-gray-100 mb-2 font-semibold mt-11 sm:mt-0 text-center"
          >
            Page links
          </p>
          <ul class="flex flex-col items-start">
            <li class="mb-4 text-gray-400 hover:bg-sky-700 cursor-pointer">
              <a href="/#home"> Home</a>
            </li>
            <li class="mb-4 text-gray-400 hover:text-sky-700">
              <a href="/#project">Project</a>
            </li>
            <li class="mb-4 text-gray-400">
              <a href="/#home"> About </a>
            </li>

            <li class="text-gray-400">
              <a href="/#contact"> Contact </a>
            </li>
          </ul>
        </div>
        <div class="contact hidden sm:block">
          <p class="text-base text-gray-100 mb-2 font-semibold">Email</p>
          <a
            href="mailto: ashrafulmalik71@gmail.com"
            class="text-base text-blue-600"
            >ashrafulmalik71@gmail.com
          </a>
        </div>
        <div class="">
          <p
            class="text-base text-gray-100 mb-2 font-semibold pt-0 text-center mr-4 mt-9 sm:mr-0 sm:mt-0"
          >
            Connect
          </p>

          <div class="flex">
            <div class="mr-4">
              <a href="https://www.instagram.com/devxmedia/" target="_blank"
                ><i data-feather="instagram" class="text-blue-500"></i>
              </a>
            </div>
            <div class="">
              <a href="https://dribbble.com/Ashraful404" target="_blank"
                ><i data-feather="dribbble" class="text-blue-500"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
li:hover {
  /* background: red; */
  cursor: pointer;
  color: rgb(71, 126, 245);
}
img {
  transform-origin: top left;
  transform: rotate(8deg);
}
img:hover {
  transform: rotate(0deg);
}
</style>
