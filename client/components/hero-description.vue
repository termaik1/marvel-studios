<template>
  <div class="hero-description">
    <div class="hero-description__container">
      <div class="hero-description__title small-text">{{ title }}</div>
      <div class="hero-description__text helper-text">{{ processedText }}</div>
      <div v-show="isSubmit" class="hero-description__submit">
        <submit class="helper-text">Показать ещё</submit>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Submit from "@/ui-kit/submit.vue";

export default defineComponent({
  name: "hero-description",
  components: {
    Submit,
  },
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    text: {
      type: String as PropType<string>,
      required: true,
    },
  },
  computed: {
    processedText() {
      if (this.text.length > 255) {
        return this.text.substr(0, 255);
      }
      return this.text;
    },

    isSubmit() {
      return this.text.length > 255;
    },
  },
});
</script>

<style lang="scss" scoped>
.hero-description {
  border-radius: 1rem;
  border: 0.2rem solid $black;
}

.hero-description__container {
  padding: 1.2rem 1.6rem;
}

.hero-description__title {
}

.hero-description__text {
}

.hero-description__submit {
  display: flex;
  justify-content: center;
}
</style>