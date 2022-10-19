<template>
    <header class="filter">
        <h1 class="filter__title">Consulta de alunos</h1>
        <div class="filter__content">
            <v-autocomplete 
            label="Digite sua busca" 
            variant="underlined"
            :items="listStudent"
            :loading="isLoading"
            v-model="student"
            v-model:search="searchNameStudent"
            :item-title="'name'"
            @click="getStudent('')"
            return-object
            ></v-autocomplete>
        </div>
    </header>
</template>

<script lang="ts">

import studantService from '@/services/students'

export default {
    data(){
        return {
            searchNameStudent: '',
            student: [],
            listStudent: [],
            isLoading: false,
            itemsStudent: []
        }
    },

    created(){
        this.getStudent('')
    },

    watch: {
        searchNameStudent(val){
            this.getStudent(val)
        },

        student(val){
            console.log(val.id)
            this.$router.push({name: 'student', params: {id: val.id}})
        }
    },

    methods: {
        async getStudent(name: string | any): Promise<any>{
            this.isLoading = true
            studantService.findStudent(name).then(res => {
                this.listStudent = res.data
                this.isLoading = false
            })
        }   
    },
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