<template>
  <div class="spinner">
    <div class="spinner__container">
      <div class="spinner__center">
        <div class="spinner__circle"></div>
      </div>
      <div class="spinner__block">
        <div class="spinner__circle"></div>
        <div class="spinner__circle"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "spinner",
});
</script>

<style lang="scss" scoped>
.spinner {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid $black_gray;
  border-radius: 50%;
}

.spinner__container {
  animation: loading-spinner 1s infinite linear;
   width: 24px;
  height: 24px;
}

.spinner__block {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
}

.spinner__center {
  display: flex;
  justify-content: center;
}

.spinner__circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: red;

  &:nth-child(2) {
    margin-left: 4px;
  }
}

@keyframes loading-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
