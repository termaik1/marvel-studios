<template>
  <div class="hero-item">
    <banner-hero>
      <swiper-hero-list />
    </banner-hero>
    <hero-skill-list />
    <div class="hero-item__info">
      <hero-description
        class="hero-item__description"
        title="test"
        text="test"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import MarvelCard from "@/components/marvel-card.vue";
import HeroDescription from "@/components/hero-description.vue";
import BannerHero from "@/components/banner-hero.vue";
import SwiperHeroList from "@/components/swiper-list.vue";
import HeroSkillList from "@/components/hero-skill-list.vue";

export default defineComponent({
  components: {
    MarvelCard,
    HeroDescription,
    BannerHero,
    SwiperHeroList,
    HeroSkillList
  },
});
</script>

<style lang="scss" scoped>
.hero-item {
  margin-top: 3.2rem;
}

.hero-item__info {
  display: flex;
  justify-content: space-between;
}

.hero-item__description {
  width: 104.4rem;
  height: 100%;
}
</style>