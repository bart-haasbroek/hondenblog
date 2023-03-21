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
const threeArticles = await queryContent("berichten")
  .sort({ date: -1 })
  .skip(1)
  .limit(3)
  .find();
const twoArticles = await queryContent("berichten")
  .sort({ date: -1 })
  .skip(4)
  .limit(2)
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
            v-for="blog in threeArticles"
            :blog-item="blog"
          ></third-card>

          <half-card v-for="blog in twoArticles" :blog-item="blog"></half-card>
          <!-- <two-third-card :blog-item="twoArticles"></two-third-card>
          <third-card :blog-item="blogItem"></third-card> -->
        </div>
        <!--/ Post Content-->
      </div>

      <Newsletter></Newsletter>

      <author-card></author-card>
    </div>
  </div>
  <the-footer></the-footer>
</template>
