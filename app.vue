<script setup>
useHead({
  title: "Ashraful Malik",
  meta: [
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
      content: "Ashraful Malik Portfolio",
    },
    {
      property: "og:description",
      content:
        "Hi! 👋 I'm Ashraful Malik, a UI designer, Webflow developer, and web developer. ",
    },
    {
      property: "og:image",
      content: "",
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: "twitter:site", content: "@Ashraful__malik" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://ashraful.online",
    },
    {
      name: "twitter:title",
      content: "Ashraful Malik Portfolio",
    },
    {
      name: "twitter:description",
      content:
        "Hi! 👋 I'm Ashraful Malik, a UI designer, Webflow developer, and web developer.",
    },
    {
      name: "twitter:image",
      content: "",
    },
  ],

  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      crossorigin: "",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      crossorigin: "",
    },
  ],
});
</script>
<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>
