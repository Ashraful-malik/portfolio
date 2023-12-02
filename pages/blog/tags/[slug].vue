<!-- ./pages/blog/tags/[slug].vue -->

<script setup>
// get current route
const {
  params: { slug },
} = useRoute();

const filter = slug.split(",");

// set meta for page
useHead({
  title: `All articles with ${slug}`,
  meta: [
    { name: "description", content: "Here's a list of all my great articles" },
  ],
});
</script>
<template>
  <main>
    <header class="page-heading">
      <div class="wrapper text-gray-50">
        <h1 class="text-5xl font-bold">All articles with "{{ slug }}"</h1>
        <p class="font-medium text-lg">
          Here's a list of all my great articles
        </p>
      </div>
    </header>
    <section class="page-section">
      <Tags />
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="article-list">
            <li
              v-for="article in list"
              :key="article._path"
              class="article-item"
            >
              <NuxtLink :to="article._path">
                <div class="wrapper">
                  <!-- <div class="img-cont w-36 shrink-0">
                    <img
                      :src="`${article.img}`"
                      :alt="article.title"
                      class="rounded-lg max-h-[8rem]"
                    />
                  </div> -->
                  <header>
                    <h1
                      class="text-xl font-semibold text-gray-50 leading-normal"
                    >
                      {{ article.title }}
                    </h1>
                    <p class="mt-2 text-gray-70">{{ article.description }}</p>
                    <ul class="article-tags mt-4">
                      <li class="tag" v-for="(tag, n) in article.tags" :key="n">
                        <NuxtLink :to="`/blog/tags/${tag}`" class="underline">
                          {{ tag }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <TagsNotFound />
        </template>
      </ContentList>
    </section>
  </main>
</template>
