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
      height: {
        88: "28rem",
        128: "32rem",
        136: "40rem",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(35px,-55px) scale(1.1)" },
          "66%": { transform: "translate(-25px,25px) scale(0.9)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
      },
      colors: {
        bkg: "rgb(var(--color-bkg) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)",
        accents: {
          dark: "#6367f1",
        },
        gray: {
          10: "#FAFAFA",
          20: "#F6F6F6",
          30: "#ECECEC",
          40: "#E0E0E0",
          50: "#C4C4C4",
          60: "#B6B6B6",
          70: "#AAAAAA",
          80: "#9B9B9B",
          90: "#8D8D8D",
          100: "#7F7F7F",
          200: "#717171",
          300: "#636363",
          400: "#575757",
          500: "#494949",
          600: "#3D3D3D",
          700: "#2C2C2C",
          800: "#1E1E1E",
          900: "#121212",
        },
      },
      container: {
        center: true,
      },
      fontSize: {
        xs: ["clamp(0.64rem, 0.6188rem + 0.0944vw, 0.75rem)"],
        sm: ["clamp(0.8rem, 0.7542rem + 0.2037vw, 0.9375rem)"],
        base: ["clamp(1rem, 0.9167rem + 0.3704vw, 1.25rem)"],
        lg: ["clamp(1.25rem, 1.1113rem + 0.6167vw, 1.6663rem)"],
        xl: ["clamp(1.5625rem, 1.3429rem + 0.9759vw, 2.2213rem)"],
        "2xl": ["clamp(1.9531rem, 1.6173rem + 1.4926vw, 2.9606rem)"],
        "3xl": ["clamp(2.4413rem, 1.9394rem + 2.2306vw, 3.9469rem)"],
        "4xl": ["clamp(3.0519rem, 2.3156rem + 3.2722vw, 5.2606rem)", "88px"],
      },
      fontFamily: {
        // sans: ["Open Sans", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            // color: "#333",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
