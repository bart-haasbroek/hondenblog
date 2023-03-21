// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { isProduction } from "std-env";
export default defineNuxtConfig({
  target: "static",
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image-edge",
    "@formkit/nuxt",
    "@nuxt/content",
    "nuxt-simple-sitemap",
  ],
  content: {
    documentDriven: true,
  },

  runtimeConfig: {
    public: {
      google_analytics_id: process.env.google_analytics_id,
      production_mode: isProduction,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
    },
  },
});
