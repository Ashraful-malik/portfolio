<template>
  <div>
    <nav
      class="px-2 sm:px-4 w-full z-10 border-b border-cardbg-dark bg-transparent"
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto w-5/6 m-auto"
      >
        <nuxt-link to="/" class="flex items-center">
          <img
            src="@/assets/images/ashraful_logo.png"
            class="mr-2 lg:w-10 w-8 rounded-full"
            alt="ashraful logo"
          />
          <div class="name font-semibold text-lg text-dark">Ashraful Malik</div>
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
            class="w-8 h-8"
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
            class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
          >
            <li>
              <nuxt-link
                to="/"
                class="block py-2 pr-4 pl-3 md:bg-transparent text-gray-900 rounded hover:text-accent font-medium"
                aria-current="page"
                >Home
              </nuxt-link>
            </li>
            <div class="dropdown relative">
              <nuxt-link
                to="/#project"
                class="block py-2 pr-4 pl-3 text-gray-900 rounded-full hover:text-accent font-medium"
                >Work
              </nuxt-link>
              <div class="dropdown-content">
                <a href="#">Coded </a>
                <a href="#">Webflow</a>
              </div>
            </div>

            <li>
              <nuxt-link
                to="/#about"
                class="block py-2 pr-4 pl-3 text-gray-900 rounded hover:text-accent font-medium"
                >About
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/blog"
                class="block py-2 pr-4 pl-3 text-gray-900 rounded hover:text-accent font-medium"
                >Blog
              </nuxt-link>
            </li>

            <li>
              <nuxt-link
                to="/#contact"
                class="block py-2 px-6 text-white font-medium primary_button"
                >Say hi!
              </nuxt-link>
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

<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  /* box-shadow: 0px 8px 20px 0px rgba(136, 136, 136, 0.711); */
  border: 1px solid rgb(210, 208, 208);
  border-radius: 5px;
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
  border-radius: 5px;
  color: rgba(59, 130, 246);
}
.dropdown:hover .dropdown-content {
  /* display: block; */
}
</style>
>
