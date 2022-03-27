<template>
  <div class="pagination">
    <div class="pagination__item helper-text">&lt;&lt;</div>
    <div v-show="currentPage > 1" class="pagination__item helper-text">...</div>

    <div
      class="pagination__item helper-text"
      v-for="item in pageList"
      :key="item"
    >
      {{ item }}
    </div>

    <div
      v-show="
        currentPage !== totalPage &&
        currentPage > 2 && currentPage + 1 !== totalPage
      "
      class="pagination__item helper-text"
    >
      ...
    </div>
    <div
      v-show="currentPage !== totalPage"
      class="pagination__item helper-text"
    >
      {{ totalPage }}
    </div>

    <div
      v-show="currentPage !== totalPage"
      class="pagination__item helper-text"
    >
      >>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "pagination",
  props: {
    totalPage: {
      type: Number as PropType<number>,
      required: true,
      default: 10,
    },
    currentPage: {
      type: Number as PropType<number>,
      required: true,
      default: 10,
    },
  },
  computed: {
    pageList() {
      const page = this.currentPage;

      if (page > 2 && page !== this.totalPage) {
        return [page - 1, page, page + 1];
      }

      if (page === this.totalPage) {
        return [page - 2, page - 1, page];
      }

      return [page, page + 1, page + 2];
    },
  },
});
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
}

.pagination__item {
  width: 2.8rem;
  height: 2.8rem;
  border: 0.2rem solid $black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.8rem;
  color: $black;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
}
</style>