import { createRouter, createWebHistory } from 'vue-router'
import listStudents from "@/views/ListStudents.vue"
import newStudents from "@/views/NewStudent.vue"
import EditStudents from "@/views/EditStudent.vue"
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
    {
      path: '/',
      name: 'login',
      component: Login,
    }
  ]
})

router.beforeEach(async (to, from, next) => {
 var token = JSON.stringify(localStorage.getItem('token'))
  if(to.name == 'login' && token !== 'null') next('/alunos')
  if(token === 'null' && to.name !== 'login') next('/')
  next()
});

export default router