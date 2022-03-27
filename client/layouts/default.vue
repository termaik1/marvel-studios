<template>
  <marvel-header />
  <main class="container">
    <slot />
  </main>
  <marvel-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarvelHeader from "@/components/marvel-header.vue";
import MarvelFooter from "@/components/marvel-footer.vue";

export default defineComponent({
  components: {
    MarvelHeader,
    MarvelFooter,
  },
  setup() {},
});
</script>
