<!-- ./pages/blog/[…slug.vue] -->

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;

// set the meta
useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    { property: "og:site_name", content: "Ashraful malik" },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://ashraful.online",
    },
    {
      property: "og:title",
      content: data.value.article.title,
    },
    {
      property: "og:description",
      content: data.value.article.title,
    },
    {
      property: "og:image",
      content: `https://ashraful.online/${data.value.article.img}`,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: "twitter:site", content: "@ashraful__malik" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:url",
      content: "https://ashraful.online",
    },
    {
      name: "twitter:title",
      content: data.value.article.title,
    },
    {
      name: "twitter:description",
      content: data.value.article.description,
    },
    {
      name: "twitter:image",
      content: `https://ashraful.online/${data.value.article.img}`,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://ashraful.online/${path}`,
    },
  ],
});
</script>
<template>
  <main id="main" class="article-main">
    <header v-if="data.article" class="article-header">
      <div class="img-cont h-80 mb-12">
        <img
          :src="`${data.article.img}`"
          :alt="data.article.title"
          class="rounded-2xl object-cover"
        />
      </div>

      <h1 class="heading">{{ data.article.title }}</h1>
      <p class="supporting">{{ data.article.description }}</p>
      <Date :date="data.article.date" />
      <ul class="article-tags">
        <li
          class="tag font-medium"
          v-for="(tag, n) in data.article.tags"
          :key="n"
        >
          {{ tag }}
        </li>
      </ul>
    </header>
    <hr />
    <section class="article-section">
      <aside class="aside">
        <!-- Toc Component -->
        <BlogToc :links="data.article.body.toc.links" />
      </aside>
      <article class="article">
        <!-- render document coming from query -->
        <ContentRenderer :value="data.article">
          <!-- render rich text from document
          <MarkdownRenderer :value="data.article" /> -->

          <!-- display if document content is empty -->
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </section>

    <!-- PrevNext Component -->
    <BlogPrevNext :prev="prev" :next="next" />
  </main>
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-5xl m-auto;
}

.article-header {
  @apply p-4 pb-12;
}

.article-header .heading {
  @apply font-bold text-2xl text-gray-50 leading-none;
}

.article-header .supporting {
  @apply text-base mt-4 text-gray-70;
}

.article-section {
  @apply grid grid-cols-8;
}

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}

.aside .toc {
  @apply sticky top-20;
}

.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose dark:prose-invert prose-lg prose-stone w-full p-4 max-w-3xl m-auto;
}
</style>
