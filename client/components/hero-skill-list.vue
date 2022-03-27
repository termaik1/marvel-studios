<template>
    <div>


        <skill-item />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SkillItem from '@/ui-kit/skill-item.vue'

export default defineComponent({
name: 'hero-skill-list',
components: {
    SkillItem
},
setup() {
        
    },
})
</script>

<style lang="scss" scoped>

</style>