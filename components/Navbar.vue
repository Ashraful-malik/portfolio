<template>
  <div>
    <div class="w-full">
      <header class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <nuxt-link to="/" class="logo flex items-center">
            <img
              src="@/assets/images/ashraful_logo.png"
              class="mr-2 lg:w-10 w-8 rounded-full"
              alt="logo"
            />
          </nuxt-link>

          <!-- Responsive Navbar Button -->
          <button
            @click="toggleMenu"
            class="lg:hidden text-white focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <!-- Navbar Links (Hidden on small screens) -->
          <nav class="hidden lg:flex space-x-10 lg:items-center text-gray-70">
            <nuxt-link to="/" class="hover:text-gray-10">Home</nuxt-link>

            <!-- trial dropdown menu -->
            <div class="dropdown">
              <nuxt-link to="/#project" class="dropbtn hover:text-gray-10"
                >Projects</nuxt-link
              >
              <div
                class="dropdown-content absolute bg-gray-700 rounded-lg border border-gray-600"
              >
                <nuxt-link to="/" class="text-gray-70 hover:text-gray-10"
                  >UI Design</nuxt-link
                >
                <nuxt-link to="/" class="text-gray-70 hover:text-gray-10"
                  >Front-end</nuxt-link
                >
              </div>
            </div>

            <!-- dropdown menu -->

            <!-- <div class="relative" @mouseenter="openDropdown">
              <nuxt-link to="/#project" class="hover:text-gray-10"
                >Projects</nuxt-link
              >
              <div
                v-show="isDropdownOpen"
                class="absolute top-full left-0 mt-2 bg-gray-700 p-2 rounded-md space-y-2"
                @mouseenter="openDropdown"
                @mouseleave="closeDropdown"
              >
                <nuxt-link to="/#project" class="block hover:text-gray-10"
                  >UI Design</nuxt-link
                >
                <nuxt-link to="/#project" class="block hover:text-gray-10"
                  >Front-end Development</nuxt-link
                > -->
            <!-- Add more project links as needed -->
            <!-- </div>
            </div> -->

            <nuxt-link to="/#about" class="hover:text-gray-10">About</nuxt-link>
            <nuxt-link
              to="/#contact"
              class="block px-5 py-3 text-gray-10 rounded-full hover:text-accent font-medium text-sm bg-accents-dark hover:bg-accents-dark/90 text-center"
              >Contact
            </nuxt-link>
          </nav>
        </div>
      </header>

      <!-- Mobile Menu (Hidden on large screens) -->
      <div
        v-show="isMenuOpen"
        class="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75"
        @click="toggleMenu"
      ></div>
      <div
        v-show="isMenuOpen"
        class="lg:hidden fixed inset-y-0 right-0 flex gap-3 flex-col p-4 bg-gray-700 text-gray-70 w-48"
      >
        <!-- close icon -->
        <div class="close_icon ml-auto" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <nuxt-link to="/" class="hover:text-gray-10 py-5">Home</nuxt-link>

        <!-- Mobile Dropdown Menu -->
        <div class="dropdown">
          <nuxt-link to="/#project" class="dropbtn hover:text-gray-10"
            >Projects</nuxt-link
          >
          <div
            class="dropdown-content absolute bg-gray-700 rounded-lg border border-gray-600"
          >
            <nuxt-link to="/" class="text-gray-70 hover:text-gray-10"
              >UI Design</nuxt-link
            >
            <nuxt-link to="/" class="text-gray-70 hover:text-gray-10"
              >Front-end</nuxt-link
            >
          </div>
        </div>
        <!-- <div
          class="relative"
          @mouseenter="openMobileDropdown"
          @mouseleave="closeMobileDropdown"
        >
          <nuxt-link to="/#project" class="hover:text-gray-10"
            >Projects</nuxt-link
          >
          <div
            v-show="isMobileDropdownOpen"
            class="absolute top-full left-0 mt-2 bg-gray-700 p-2 rounded-md space-y-5"
            @mouseenter="openMobileDropdown"
            @mouseleave="closeMobileDropdown"
          >
            <nuxt-link to="/projects/ui-design" class="block hover:text-gray-10"
              >UI Design</nuxt-link
            >
            <nuxt-link to="/projects/frontend" class="block hover:text-gray-10"
              >Front-end Development</nuxt-link
            >
          </div>
        </div> -->
        <!-- End Mobile Dropdown Menu -->

        <nuxt-link to="/#about" class="hover:text-gray-10 py-5"
          >About</nuxt-link
        >
        <nuxt-link
          to="/#contact"
          class="block px-5 py-3 text-gray-10 rounded-full hover:text-accent font-medium text-sm bg-accents-dark hover:bg-accents-dark/90 text-center"
          >Contact
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const isMobileDropdownOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const openMobileDropdown = () => {
  isMobileDropdownOpen.value = true;
};

const closeMobileDropdown = () => {
  isMobileDropdownOpen.value = false;
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: hsl(0, 0%, 15%);
}

.dropdown:hover .dropdown-content {
  /* change this  to (display:block;) if you want to display drop-down menu in project link hover */
  display: block;
}
</style>
