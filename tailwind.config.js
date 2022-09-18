module.exports = {
  darkMode: "class",

  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],

  purge: [],
  // or 'media' or 'class'

  theme: {
    // darkSelector: ".dark-mode",
    extend: {
      width: {
        90: "90%",
      },
      colors: {
        "dark-bg": "#121212",
      },
    },
    fontFamily: {
      // sans: ["Epilogue", "sans-serif"],
    },
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
  },
  darkSelector: ".dark-mode",
  plugins: [require("tailwindcss-dark-mode")()],
};
