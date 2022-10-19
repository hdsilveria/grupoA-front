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
import studantService from '@/services/students'

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
        this.getStudent()
    },

    methods: {
        getStudent(){
            let id: any = this.$route.params.id
            studantService.findStudentById(id).then(res => {
                return this.student = res.data[0]
            })
        }
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