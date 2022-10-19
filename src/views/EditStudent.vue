<template>
    <div class="editStudent">
        <header class="editStudent__header">
            <h1>Editar cadastro de aluno</h1>
        </header>
        
        <section class="editStudent__form">
            <formStudent :student="student"  /> 
        </section>
    </div>
</template>

<script lang="ts">

import formStudent from '@/components/students/Form.vue'
import { defineComponent } from 'vue';

interface studentData {
    student: any
}

export default defineComponent({
    data(): studentData{
        return {
            student: null
        }
    },

    created(){
        setTimeout(() => {
            this.student = { id: 1 , name: 'Paula Souza', cpf: '123456789', email: 'teste@teste.com'}
        }, 2000);
    },

    components: {
        formStudent
    }
})

</script>

<style lang="scss" scoped>

.editStudent {
    &__header {

    }

    &__form {
        margin: 50px 0px;
        padding: 0px 20% 0% 0%;
    }
}

</style>