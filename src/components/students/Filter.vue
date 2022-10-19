<template>
    <header class="filter">
        <h1 class="filter__title">Consulta de alunos</h1>
        <div class="filter__content">
            <v-autocomplete label="Digite sua busca" variant="underlined"></v-autocomplete>
        </div>
    </header>
</template>

<script lang="ts">

export default {

}

</script>

<style lang="scss" scoped>

.filter {
    &__content {
        display: flex;
        align-items: center;
    }
}

</style>