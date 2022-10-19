<template>
    <div class="newStudent">
        <header class="newStudent__header">
            <h1>Cadastro de aluno</h1>
        </header>
        
        <section class="newStudent__form">
            <formStudent /> 
        </section>
    </div>
</template>

<script lang="ts">

import formStudent from '@/components/students/Form.vue'
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {

        }
    },

    components: {
        formStudent
    }
})

</script>

<style lang="scss" scoped>

.newStudent {
    &__form {
        margin: 50px 0px;
        padding: 0px 20% 0% 0%;
    }
}

</style>