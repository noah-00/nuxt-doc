// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt 3 tutorial",
      meta: [{ name: "description", content: "Nuxt 3 tutorial" }],
      link: [{ rel: "icon", href: "./public/icon.png" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  alias: {
    "@": resolve(__dirname, "/src"),
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
});
