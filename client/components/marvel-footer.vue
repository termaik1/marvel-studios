<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="footer__link-list">
          <div class="small-text text">Repository link:</div>
          <nuxt-link class="footer__link small-text" to="#">GitHub</nuxt-link>
        </div>
        <div class="footer__date small-text">Developed in 2021</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "marvel-footer",
  setup() {},
});
</script>

<style lang="scss" scoped>
.footer {
  background: $black;
  margin-top: 5rem;
}

.footer__container {
  padding: 2.4rem 0 3.2rem 0;
}

.text {
  color: $white;
}

.footer__link-list {
  display: flex;
  align-items: center;
}

.footer__link {
  margin-left: 0.8rem;
}

.footer__date {
    width: 100%;
    text-align: center;
    color: $light_silver;
    margin-top: 3.6rem;
}

@include mobile {
  .footer {
    margin-top: 2.6rem;
  }

  .footer__container {
    padding: 1.6rem 0 2.4rem 0;
  }

  .footer__date {
      margin-top: 2.4rem;
  }
}
</style>
