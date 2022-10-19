<template>
    <form class="student-form" @submit.prevent="saveStudent()">
        <v-text-field required class="student-form__field" label="Nome" variant="underlined" v-model="studentData.name"></v-text-field>
        <v-text-field required class="student-form__field" label="E-mail" variant="underlined" v-model="studentData.email"></v-text-field>
        <v-text-field required class="student-form__field" label="RA" variant="underlined" v-model="studentData.id"></v-text-field>
        <v-text-field required class="student-form__field" label="CPF" variant="underlined" v-model="studentData.cpf"></v-text-field>

        <div class="student-form__buttons">
            <button class="student-form__buttons--cancel" type="reset" @click="$router.push({name: 'students'})">Cancelar</button>
            <button class="student-form__buttons--saved" type="submit">Salvar</button>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        student: {
            required: false,
            type: Object
        }
    },

    watch: {
        student(){
            this.studentData.name = this.student?.name
            this.studentData.id = this.student?.id
            this.studentData.email = this.student?.email
            this.studentData.cpf = this.student?.cpf
        }
    },

    data(){
        return {
            studentData: {
                name: '',
                id: null,
                email: '',
                cpf: null
            }
        }
    },

    methods: {
        saveStudent(){
            console.log(this.studentData)
        }
    }
})
</script>

<style lang="scss" scoped>

@import '@/assets/mixins.scss';

.student-form {
    width: 100%;

    &__buttons {
        gap: 20px;
        display: flex;
        justify-content: flex-end;
        font-size: 20px;

        &--cancel {
            @include button-action(red);
            max-width: 150px;
        }
        
        &--saved {
            @include button-action(green);
            max-width: 150px;
        }
    }
}
</style>