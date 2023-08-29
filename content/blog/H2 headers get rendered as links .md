---
title: "Nuxt Content v2 markdown headers rendered as URLs"
description: "Nuxt Content v2 markdown headers rendered as URLs"
img: "https://miro.medium.com/v2/resize:fit:1000/1*qJppTMduXXhjgU2tZt9SfQ.png"
tags: [code, nuxtContent, nuxtjs]
date: 2023-08-02
---

If you are facing the same problem where Nuxt Content Markdown renders headers as links, I can show you how I solved this issue.

What is written in markdown

```
## h2
## h3

```

this is what actually in the code.

```html
<h2 id="h2">
    <a href="#h2">h2</a>
</h2>

<h3 id="h3"><a href="#h3">h3</a>
</h2>
```

## solution

To resolve this issue, we simply need to disable anchorLinks in your **\*nuxt.config.ts** file.

```js
export default defineNuxtConfig({
  // Other Nuxt config options...

  content: {
    markdown: {
      anchorLinks: false,
    },
  },
});
```

check out the official documentation: [https://content.nuxtjs.org/api/configuration/#anchorlinks](https://content.nuxtjs.org/api/configuration/#anchorlinks)
