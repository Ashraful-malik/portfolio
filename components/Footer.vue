<template>
  <div>
    <div class="h-auto lg:py-20 border-t border-black relative">
      <div
        class="w-auto lg:max-w-6xl m-auto flex justify-center lg:justify-between items-center lg:items-start flex-wrap pt-16 flex-col lg:flex-row"
      >
        <div class="logo w-16">
          <NuxtLink to="/">
            <img
              src="@/assets/images/ashraful_logo.png"
              alt="Ashraful malik"
              class="rounded-full"
            />
          </NuxtLink>
        </div>
        <div class="page_links">
          <p
            class="text-base text-gray-900 mb-4 font-semibold mt-11 lg:mt-0 text-center"
          >
            Page links
          </p>
          <ul class="flex flex-col justify-center text-center lg:text-left">
            <li class="mb-4 text-gray-700 hover:text-accent">
              <nuxt-link to="/#home"> Home</nuxt-link>
            </li>
            <li class="mb-4 text-gray-700 hover:text-accent">
              <nuxt-link to="/#project">Work</nuxt-link>
            </li>

            <li class="mb-4 text-gray-700 hover:text-accent">
              <nuxt-link to="/blog" aria-current="page">Blog </nuxt-link>
            </li>

            <li class="mb-4 text-gray-700 hover:text-accent">
              <nuxt-link to="/#about"> About </nuxt-link>
            </li>

            <li class="mb-4 text-gray-700 hover:text-accent">
              <nuxt-link to="/#contact"> Contact </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="contact mt-9 lg:mt-0">
          <p
            class="text-base text-gray-900 mb-4 font-semibold text-center lg:text-left"
          >
            Email
          </p>
          <nuxt-link
            to="mailto: ashrafulmalik71@gmail.com"
            class="text-base text-gray-700 hover:text-accent"
            >ashraful.inbox@gmail.com
          </nuxt-link>
        </div>
        <div class="mb-8">
          <p
            class="text-base text-gray-900 mb-4 font-semibold pt-0 mr-4 mt-9 lg:mt-0"
          >
            Connect
          </p>

          <div class="flex mb-4 lg:mb-0 flex-col text-gray-700">
            <div class="hover:text-accent mb-4">
              <nuxt-link
                to="https://www.instagram.com/uiwebbyte/"
                target="_blank"
                class="social_link"
                ><p>Instagram</p>
              </nuxt-link>
            </div>
            <div class="mr-4 hover:text-accent mb-4">
              <nuxt-link
                to="https://dribbble.com/Ashraful404"
                target="_blank"
                class="social_link"
                ><p>Dribbble</p>
              </nuxt-link>
            </div>
            <div class="mr-4 hover:text-accent mb-4">
              <nuxt-link
                to="https://github.com/Ashraful-malik"
                target="_blank"
                class="social_link"
                ><p>Github</p>
              </nuxt-link>
            </div>
            <div class="hover:text-accent mb-4">
              <nuxt-link
                to="https://twitter.com/Ashraful__malik"
                target="_blank"
                class="social_link"
                ><p>Twitter</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright absolute bottom-0 left-0 right-0 mr-0 ml-0 pb-4">
        <div class="text-sm text-gray-500 flex items-center justify-center">
          <p>©2023 Ashraful Malik | Build with</p>
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
