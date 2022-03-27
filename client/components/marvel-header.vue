<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__navigation">
        <nuxt-link class="header__link " to="/">MARVEL STUDIOS</nuxt-link>
        <nuxt-link class="header__link large-text" to="/characters">Characters</nuxt-link>
      </div>
      <div class='header__search'>
        <search-input />
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import SearchInput from "@/ui-kit/search-input.vue";

export default defineComponent({
  name: "marvel-header",
  components: {
    SearchInput,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.header {
  background: $black;
  padding: 1rem 0;
}

.header__container {
  display: flex;
  justify-content: space-between;
}

.header__navigation {
  display: flex;
  align-items: center;
}

.header__link {
  color: white;

  &:last-child {
    margin-left: 1.6rem;
  }
}

@include mobile468 {
  .header__container {
    flex-direction: column;
    align-items: center;
  }

  .header__search {
    margin-top: 2rem;
  }
}
</style>


