<script lang="ts" setup>
const menu = [
  {
    id: 1,
    title: "Home",
    slug: "/",
  },
  {
    id: 2,
    title: "components",
    slug: "/components",
  },
  {
    id: 3,
    title: "formulier",
    slug: "/form",
  },
];
</script>

<template>
  <div
    class="w-full m-0 p-0 bg-cover bg-bottom"
    style="
      background-image: url('images/cover.jpg');
      height: 60vh;
      max-height: 460px;
    "
  >
    <div
      class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal"
    >
      <!--Title-->
      <p class="text-white font-extrabold text-3xl md:text-5xl">Hondenblog</p>
      <p class="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
    </div>
  </div>
</template>

<style scoped></style>
