<template>
  <div class="banner-hero">
    <img v-if="img" src="img" />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';

export default defineComponent({
  name: "banner-hero",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    img: {
      type: String as PropType<string>,
      required: false,
    },
  },
});
</script>
<style lang="scss" scoped>
.banner-hero {
  display: flex;
}
</style>
