import { defineNuxtConfig } from "nuxt3";
import { resolve } from "path";

export default defineNuxtConfig({
  css: ["@/assets/styles.scss"],
  alias: {
    "@": resolve(__dirname, "./"),
    model: resolve(__dirname, "./model"),
  },
  vite: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "./"),
        "types": resolve(__dirname, "./models/types.ts"),
        "enums": resolve(__dirname, "./models/enums.ts")
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: false,
          additionalData(source) {
            return `@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixin.scss"; ${source}`;
          },
        },
      },
    },
  },
});
