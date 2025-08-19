import { createRouter, createWebHistory } from 'vue-router'
import TestApi from '../views/TestApi.vue'
import Base from '../views/templates/base.vue'
import Home from '../views/templates/templates-Padroes/Home.vue'
import LoginForm from '../views/templates/forms/LoginForm.vue'
import RegisterForm from '../views/templates/forms/RegisterForm.vue'

const routes = [
  { path: '/ping', component: TestApi },
  { path: '/base', name: 'base' , component: Base },
  { path: '/home', name: 'home', component: Home },
  { path: '/login', name: 'login', component: LoginForm },
  { path: '/register', name: 'register', component: RegisterForm },
  { path: '/:pathMatch(.*)*', redirect: '/base' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
