<script setup>
useHead({
  title: "Ashraful Malik",
  meta: [
    {
      name: "google-site-verification",
      content: "B0jEz4XSU68SfqzK9ToK5BUE9waB_R5cN1J--rAzvOc",
    },
    { name: "color-scheme", content: "dark light " },
    {
      hid: "description",
      name: "description",
      content:
        "Hello👋, I'm Ashraful Malik, a web developer and web designer.I specialize in creating websites that not only look great but also function smoothly.With expertise in both Design and web development.",
    },
    {
      hid: "keywords",
      name: "keywords",
      keywords:
        "Ashraful malik,portfolio,nuxt portfolio, web developer,web designer,vue,mytailwind,website developer,DesignPortfolio,WebDevLife,ResponsiveWebDesign ,WebDesignInspiration,Website designer,ui designer",
    },

    { property: "og:site_name", content: "Ashraful.online" },
    { property: "og:type", content: "website" },

    {
      property: "og:url",
      content: "https://ashraful.online",
    },
    {
      property: "og:title",
      content: "Ashraful Malik ",
    },
    {
      property: "og:description",
      content:
        "Hi! 👋 I'm Ashraful Malik, a UI designer, Webflow developer, and web developer. ",
    },
    {
      property: "og:image",
      content: "https://ashraful.online/twittercard.png",
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: "twitter:site", content: "@Ashraful__malik" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://ashraful.online/twittercard.png",
    },
    {
      name: "twitter:title",
      content: "Ashraful Malik Portfolio",
    },
    {
      name: "twitter:description",
      content: "Hi! 👋 I'm Ashraful Malik, a UI designer and web developer.",
    },
    {
      name: "twitter:image",
      content: "https://ashraful.online/twittercard.png",
    },
  ],

  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },

    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap",
      crossorigin: "",
    },
  ],
});
</script>
<template>
  <div class="bg-bkg">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
