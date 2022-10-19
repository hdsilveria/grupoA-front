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
        <td class="table-student__content__item">{{ item.id }}</td>
        <td class="table-student__content__item">{{ item.name }}</td>
        <td class="table-student__content__item">{{ item.cpf }}</td>
        <td class="table-student__content__item--buttons">
          <button class="table-student__content__item--buttons--edit" 
          @click="$router.push({name: 'student', params: {id: item.id}})">
            Editar
          </button>
          <button class="table-student__content__item--buttons--delet">excluir</button>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import studantService from '@/services/students'
import type { IStudent } from '@/models/student'

interface data {
  headers: string[]
  students: IStudent[]
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
      }
    },

    created(){
      this.getStudents()
    },

    methods: {
      getStudents(){
        studantService.getStudents().then(res => {
          this.students = res.data
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