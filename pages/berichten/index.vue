<script setup>
const menu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Berichten",
    link: "/berichten",
  },
];
// const data = queryContent("berichten");
// const data = await queryContent("berichten").findOne();
const [data] = await queryContent("/berichten")
  .sort({ date: -1 })
  .limit(1)
  .find();
const allArticles = await queryContent("berichten")
  .sort({ date: -1 })
  .skip(1)
  .find();
</script>

<template>
  <!--Header-->
  <the-header></the-header>
  <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
    <div class="mx-0 sm:mx-6">
      <!--Nav-->
      <Navigation :nav-items="menu"></Navigation>
      <div
        class="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t"
      >
        <lead-card :blog-item="data"></lead-card>

        <!--Posts Container-->
        <div class="flex flex-wrap justify-between pt-12 -mx-6">
          <third-card
            v-for="blog in allArticles"
            :blog-item="blog"
          ></third-card>
        </div>
        <!--/ Post Content-->
      </div>

      <Newsletter></Newsletter>
    </div>
  </div>
  <the-footer></the-footer>
</template>
