// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "@nuxt/content",
    "@nuxtjs/gtm",
  ],
  buildModules: ["@nuxt/image"],
  content: {
    documentDriven: true,
  },
  gtm: {
    id: "GTM-XXXXXXX",
  },
});
