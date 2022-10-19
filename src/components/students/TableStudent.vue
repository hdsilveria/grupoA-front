<template>
  <v-table class="table-student">
    <thead class="table-student__headers">
      <tr>
        <th class="text-left" v-for="item in headers" :key="item">
          {{item}}
        </th>
      </tr>
    </thead>
    <tbody class="table-student__content">
      <tr
        v-for="item in students"
        :key="item.name"
      >
        <td class="table-student__content__item">{{ item.ra }}</td>
        <td class="table-student__content__item">{{ item.name }}</td>
        <td class="table-student__content__item">{{ item.cpf }}</td>
        <td class="table-student__content__item--buttons">
          <button 
          class="table-student__content__item--buttons--edit" 
          @click="$router.push({name: 'student', params: {id: item.id}})">
            Editar
          </button>

          <button 
          class="table-student__content__item--buttons--delet"
          @click="deleteStudent(item.id)">
            excluir
          </button>
        </td>
      </tr>
    </tbody>

    <v-snackbar color="success" v-model="snackbar" timeout="3000">
           <span>{{ messageToast }}</span> 
        </v-snackbar>
  </v-table>
</template>

<script lang="ts">
import studantService from '@/services/students'
import type { IStudent } from '@/models/student'

interface data {
  headers: string[]
  students: IStudent[]
  snackbar: boolean
  messageToast: string
}

  export default {
    data(): data {
      return {
        headers: [
          'Registro Acadêmico',
          'Nome',
          'CPF',
          'Ações'
        ],
        students: [],
        snackbar: false,
        messageToast: ''
      }
    },

    created(){
      this.getStudents()
    },

    methods: {
      getStudents(): void{
        studantService.getStudents().then(res => {
          this.students = res.data
        })
      },

      deleteStudent(id: string): void{
        studantService.removeStudent(id).then(res => {
          this.getStudents()
          this.snackbar = true
          this.messageToast = res.data.message
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

@import '@/assets/mixins.scss';

.table-student {
  height: 70vh;
  overflow: auto;
  &__content {
    &__item {
      &--buttons {
        display: flex;
        align-items: center;
        gap: 0px 16px;
        &--edit {
          @include button-action(green);
          max-width: 100px;
          max-height: 30px;
        }
        &--delet {
          @include button-action(red);
          max-width: 100px;
          max-height: 30px;
        }
      }
    }
  }
}

</style>