<template>
  <swiper
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>eededed</swiper-slide>
  </swiper>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

export default defineComponent({
  name: "swiper-list",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    spaceBetween: {
      type: Number as PropType<number>,
      default: 20
    },
    slidesPerView: {
      type: Number as PropType<number>,
      default: 3
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
});
</script>
