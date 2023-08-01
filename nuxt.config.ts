// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  // ssr:true,
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-gtag",
  ],
  gtag: {
    id: process.env.GOOGLE_ANALYTIC_ID,
    config: {
      page_title: "ashraful.online",
    },
  },

  components: true,

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
      meta: [
        {
          name: "google-site-verification",
          content: "B0jEz4XSU68SfqzK9ToK5BUE9waB_R5cN1J--rAzvOc",
        },
      ],
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
});
