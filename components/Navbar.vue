<template>
  <div>
    <nav class="bg-black px-2 sm:px-4 py-2.5 z-10 relative">
      <div
        class="container flex flex-wrap justify-between items-center mx-auto w-5/6 m-auto"
      >
        <nuxt-link to="/" class="flex items-center">
          <img
            src="@/assets/images/Logo1.svg"
            class="mr-3 w-24"
            alt="ashraful Logo"
          />
        </nuxt-link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          @click="toggle"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class="w-full md:block md:w-auto"
          id="navbar-default"
          :class="open ? 'block' : 'hidden'"
        >
          <ul
            class="flex flex-col p-4 mt-4 text-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
          >
            <li>
              <nuxt-link
                to="/"
                class="block py-2 pr-4 pl-3 md:bg-transparent md:text-blue-700 md:p-0"
                aria-current="page"
                >Home
              </nuxt-link>
            </li>
            <li>
              <a
                href="/#project"
                class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Project</a
              >
            </li>
            <li>
              <a
                href="/#about"
                class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >About</a
              >
            </li>

            <li>
              <a
                href="/#contact"
                class="block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
