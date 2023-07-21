// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],

  runtimeConfig: {
    public: {
      googleAnalytic: process.env.GOOGLE_ANALYTIC_ID,
    },
  },
  colorMode: {
    classSuffix: "",
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "material-palenight",
        // Theme used if `html.dark`
        dark: "github-dark",
      },
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
  },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      // fav icons
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },

        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },
  // nuxt.config.ts

  image: {
    provider: process.env.VERCEL_ENV ? "vercel" : "ipx",
  },
});
