// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
  ],

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",
  runtimeConfig: {
    accessToken:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWE5N2E2YWMxZmE0ZTFjM2MwNDBjOTMwMDhiZjcwNSIsIm5iZiI6MTc0Mzc1OTI4MC4yODE5OTk4LCJzdWIiOiI2N2VmYTdiMDQ4ZDZmMDMxYjBhY2ZlYTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JzkzmCY_S6PvAnBXPrFB46TQgrjQU3ppHiBt09IsIgU",
    apiKey: "09a97a6ac1fa4e1c3c040c93008bf705",
  },
});
