<template>
  <div class="input">
    <input v-bind="$attrs" class="input__value" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "search-input",
});
</script>

<style lang="scss" scoped>

.input {
  width: 100%;
  display: flex;
  justify-content: center;
}
.input__value {
    padding: 0.8rem;
}


@include mobile375 {
  .input__value {
    width: calc(100% - 6rem)
  }
}
</style>