<script setup lang="ts">
const blogItem = {
  title: "👋 Welcome fellow Tailwind CSS and Ghost fan",
  image: "https://source.unsplash.com/collection/494263/800x600",
  excerpt:
    'This starter template is an attempt to replicate the default Ghost theme "Casper" using Tailwind CSS and vanilla Javascript.',
  readTime: "3 MIN READ",
  slug: "welcome-fellow-tailwind-css-and-ghost-fan",
  category: "informatie over honden",
  author: "Bart Haasbroek",
  authorImage: "http://i.pravatar.cc/300",
};
</script>

<template>
  <the-header></the-header>
  <div class="flex flex-wrap justify-between pt-12 -mx-6">
    <third-card v-for="blog in 3" :blog-item="blogItem"></third-card>
  </div>
</template>
