// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-gtag",
    "@nuxt/image",
  ],
  image: {
    format: ["webp"],
    // dir: "assets/images", // The directory where your images are stored
  },

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
      anchorLinks: false,
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
      htmlAttrs: {
        lang: "en",
      },
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
