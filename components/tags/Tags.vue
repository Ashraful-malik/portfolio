<!-- ./components/Tags.vue -->

<script setup>
// import icon
import { TagIcon } from "@heroicons/vue/24/solid";

// helper function to flatten tags array
const flatten = (tags, key) => {
  // console.log(tags);

  let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flatten(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);

  // console.log({ _tags });

  return _tags;
};

// get only tags data from `/blog`
const { data } = await useAsyncData("tags", () =>
  queryContent("blog").only(["tags"]).find()
);

// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, "tags"))];

// console.log({ articleTags });
</script>
<template>
  <div class="tag-list mb-6">
    <!-- Button to toggle expand -->
    <div class="cta w-icon">
      <TagIcon class="icon solid" />
      <span>Tags</span>
    </div>
    <ul class="article-tags flex flex-wrap">
      <!-- list out tags with links -->
      <li v-for="(tag, n) in articleTags" :key="n" class="tag">
        <NuxtLink :to="`/blog/tags/${tag}`" class="font-semibold">
          {{ tag }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* ... */
.tag-list {
  @apply flex lg:flex-row flex-col sm:flex-row  items-center gap-2 p-2 border  rounded-lg border-slate-200;
}
</style>
