<template>
  <card class="marvel-card" :img="img">
    <nuxt-link class="marvel-card__link" to="/hero-12">Hero 3d</nuxt-link>
    <template #border>
      <div class="marvel-card__update">Last update: 21-02-2021</div>
    </template>
  </card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Card from "@/ui-kit/card.vue";

export default defineComponent({
  name: "marvel-card",
  props: {
    img: {
      type: String as PropType<string>,
      default: ''
    },
  },
  components: {
    Card,
  },
});
</script>

<style lang="scss" scoped>
.marvel-card {
  margin-top: 2.4rem;
}

.marvel-card__link {
  display: block;
  color: $black;
  font-size: 2rem;
  line-height: 3rem;
}

.marvel-card__update {
  font-size: 1.6rem;
  line-height: 2rem;
}

@include tablet {
  .marvel-card {
    margin: 2.4rem 2rem 0 0;
  }
}

@include mobile {
  .marvel-card {
    margin: 1.2rem 1 0 1rem;
  }
}
</style>
