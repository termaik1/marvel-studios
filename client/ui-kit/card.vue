<template>
  <div class="card">
    <div class="card__img">
      <img :src="!!img ? img : defaultImg" />
    </div>
    <div class="card__container">
      <slot />
    </div>
    <div class="card__border">
      <div class="card__container">
        <slot name="border" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "card",
  props: {
    img: {
      type: String as PropType<string>,
      default: ''
    },
  },
  data: () => ({
    defaultImg: 'assets/png/not-found.png'
  })
});
</script>

<style lang="scss" scoped>
.card {
  width: 30rem;
  height: 38rem;
  border-radius: 2rem;
  border: 0.2rem solid $black;
}

.card__img {
  width: 100%;
  border-radius: 1rem;

  img {
    max-height: 28rem;
    width: 100%;
    height: 100%;
  }
}

.card__container {
  padding: 1rem 4rem;
}

.card__border {
  border-top: 0.2rem solid $black;
}

@include mobile {
  .card {
    width: 28rem;
  }
}
</style>
