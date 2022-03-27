<template>
  <button class="button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sumbit",
});
</script>

<style lang="scss" scoped>
.button {
  border-radius: 2rem;
  border: 0.2rem solid $black;
  background: $white;
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background: $black_gray;
    color: $white;
  }
}
</style>
