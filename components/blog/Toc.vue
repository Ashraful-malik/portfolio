<!-- ./components/Toc.vue -->

<script setup>
// define links prop
defineProps(["links"]);

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);

  // console.log({ _links });

  return _links;
};
</script>

<template>
  <nav class="toc">
    <header class="toc-header">
      <h3 class="text-lg font-bold text-gray-50">Table of contents</h3>
    </header>
    <ul class="toc-links">
      <!-- render each link with depth class -->
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`toc-link _${link.depth}`"
      >
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.toc {
  @apply p-4 bg-gray-700 border border-gray-600 rounded-lg;
  @apply max-h-[calc(100vh-6rem)] overflow-auto;
}

.toc-header {
  @apply pb-2 mb-2 border-b border-gray-500;
}

.toc-links {
  @apply flex flex-col gap-2 px-2;
}

.toc-link {
  @apply text-gray-90;
}

.toc-link._3 {
  @apply pl-3;
}

.toc-link._4 {
  @apply pl-6;
}

.toc-link._undefined {
  @apply pl-8;
}
</style>
