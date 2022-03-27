<template>
  <div class="main">
    <div class="main__content">
      <marvel-card
        v-for="hero in marvelList"
        :key="hero.name"
        :img="hero.img"
      />
    </div>
    <pagination class="main__pagination" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MarvelCard from "@/components/marvel-card.vue";
import Pagination from '@/components/pagination.vue';

export default defineComponent({
  components: {
    MarvelCard,
    Pagination
  },
  data: () => ({
    marvelList: [
      {
        img: "",
        name: "Hero 1",
        description: "dddd",
      },
      {
        img: "https://marvel.com.ru/imagecache/original/uploads/images/ued3m0s0HRwkYy6KAM1F.png",
        name: "Hero 2",
        description: "dddd",
      },
      {
        img: "https://marvel.com.ru/imagecache/original/uploads/images/ued3m0s0HRwkYy6KAM1F.png",
        name: "Hero 3",
        description: "dddd",
      },
      {
        img: "https://marvel.com.ru/imagecache/original/uploads/images/ued3m0s0HRwkYy6KAM1F.png",
        name: "Hero 5",
        description: "dddd",
      },
      {
        img: "https://marvel.com.ru/imagecache/original/uploads/images/ued3m0s0HRwkYy6KAM1F.png",
        name: "Hero 4",
        description: "dddd",
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.main {
  margin-top: 2rem;
}

.main__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.main__pagination {
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
}


@include tablet {
  .main__content {
    justify-content: center;
  }

  .main__pagination {
    margin-top: 1.6rem;
  }
}

</style>