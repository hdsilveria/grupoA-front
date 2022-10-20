<template>
    <form class="student-form" @submit.prevent="saveStudent()">
        <v-text-field 
        label="Nome" 
        variant="underlined" 
        v-model="studentData.name"
        required>
        </v-text-field>

        <v-text-field
        required
        label="E-mail" 
        variant="underlined"
        type="email"
        v-model="studentData.email">
        </v-text-field>

        <v-text-field
        required
        label="RA" 
        variant="underlined" 
        v-model="studentData.ra"
        :disabled="student?.ra"
        type="number">
        </v-text-field>

        <v-text-field
        required
        label="CPF" 
        variant="underlined" 
        v-model="studentData.cpf"
        type="number">
        </v-text-field>

        <div class="student-form__buttons">
            <button :disabled="loading" class="student-form__buttons--cancel" type="reset" @click="$router.push({name: 'students'})">Cancelar</button>
            <button :disabled="loading" class="student-form__buttons--saved" type="submit">Salvar</button>
        </div>

        <v-snackbar :color="colorSnack" v-model="snackbar" :timeout="timeout">
           <span>{{ messageToast }}</span> 
        </v-snackbar>
    </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import studantService from '@/services/students'
import type { IStudent } from '@/models/student';

export default defineComponent({
    props: {
        student: {
            required: false,
            type: Object
        }
    },

    components: {
    },

    watch: {
        student(){
            this.studentData.name = this.student?.name
            this.studentData.ra = this.student?.ra
            this.studentData.email = this.student?.email
            this.studentData.cpf = this.student?.cpf
            this.studentData.id = this.student?.id
        }
    },

    data(){
        return {
            loading: false,
            snackbar: false,
            colorSnack: '',
            messageToast: '',
            timeout: 2000,
            studentData: {
                name: '',
                ra: null,
                email: '',
                cpf: null,
                id: null
            }
        }
    },

    methods: {
        saveStudent(){
            this.loading = true

            let student: IStudent = this.studentData
            if(!student.id){
                delete student.id
            }

            studantService.sendStudent(student)
                .then(res => {
                    this.messageToast = res.data.message
                    this.colorSnack = 'success'
                    this.snackbar = true
                    setTimeout(() => {
                        this.$router.push({name: 'students'})
                    }, 2000);
                
                })
                .catch(err => {
                    this.loading = false
                    this.colorSnack = 'error'
                    this.snackbar = true
                })
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