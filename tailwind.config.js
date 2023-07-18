/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#f78551",
        black: "#020617",
        neoBackground: "#f0f7f3",
        cardbg: {
          dark: "#020617",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
