<template>
    <section>
        <Filter />
        <TableStudent />
    </section>
</template>

<script lang="ts">

import Filter from '@/components/students/Filter.vue'
import TableStudent from '@/components/students/TableStudent.vue'
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Filter,
        TableStudent
    }
})

</script>

<style lang="scss" scoped>

</style>