<template>
  <div>
    <div class="h-auto py-20 relative">
      <div
        class="w-11/12 bg-gray-700 p-10 rounded-2xl m-auto flex items-start flex-wrap gap-12 justify-between relative"
      >
        <div class="img">
          <nuxt-link to="/" class="logo">
            <img
              src="@/assets/images/ashraful_logo.png"
              class="w-16 rounded-full"
              alt="logo"
            />
          </nuxt-link>
        </div>
        <div class="page_link">
          <p class="text-gray-70 font-semibold uppercase">Sitemap</p>
          <div class="gap-2 mt-3 flex w-40 flex-wrap">
            <div
              class="link text-gray-80 mr-2"
              v-for="(link, index) in pageLinks"
              :key="index"
            >
              <nuxt-link
                :to="link.link"
                class="uppercase hover:text-gray-50 text-sm font-medium"
                >{{ link.name }}</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="social_contact">
          <p class="text-gray-70 font-semibold uppercase">Social link</p>
          <div class="gap-2 mt-3 flex-wrap">
            <div
              class="link mt-2"
              v-for="(link, index) in socialLinks"
              :key="index"
            >
              <a
                :href="link.link"
                target="_black"
                class="flex items-center hover:text-gray-50 text-sm text-gray-80"
              >
                <span class="uppercase font-medium">{{ link.name }}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="email">
          <p class="text-gray-70 font-semibold uppercase">Email</p>
          <a
            :href="email"
            target="_black"
            class="flex items-center flex-wrap mt-3 hover:text-gray-50"
          >
            <div class="text-base text-gray-80 hover:text-gray-50">
              {{ email }}
            </div>
          </a>
        </div>
      </div>

      <!-- copy rights -->
      <div class="copyright absolute bottom-0 left-0 right-0 mr-0 ml-0 pb-4">
        <div class="text-sm text-gray-100 flex items-center justify-center">
          <p class="mr-2">©2023 Ashraful Malik | Build with</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 text-red-500"
            >
              <path
                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
<script setup>
const email = ref("ashraful.inbox@gmail.com");
const pageLinks = ref([
  { name: "Home", link: "/" },
  { name: "Projects", link: "/#project" },
  { name: "About", link: "/#about" },
  { name: "Contact", link: "/#contact" },
  { name: "Blogs", link: "/blog" },
]);
const socialLinks = ref([
  { name: "Instagram", link: "https://www.instagram.com/uiwebbyte/" },
  { name: "Twitter", link: "https://twitter.com/Ashraful__malik" },
  { name: "Codepen", link: "https://codepen.io/ashraful404" },
  { name: "Linkdin", link: "https://www.linkedin.com/in/ashraful-malik/" },
]);
</script>
