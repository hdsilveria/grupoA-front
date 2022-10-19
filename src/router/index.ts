import { createRouter, createWebHistory } from 'vue-router'
import listStudents from "@/views/ListStudents.vue"
import newStudents from "@/views/NewStudent.vue"
import EditStudents from "@/views/EditStudent.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      redirect: '/alunos'
    },
    {
      path: '/alunos',
      name: 'students',
      component: listStudents,
    },
    {
      path: '/alunos/:id',
      name: 'student',
      component: EditStudents
    },
    {
      path: '/novo-aluno',
      name: 'newStudents',
      component: newStudents,
    }
  ]
})

export default router