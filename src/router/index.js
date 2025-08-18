import { createRouter, createWebHistory } from 'vue-router'
import TestApi from '@/views/TestApi.vue'

const routes = [
  { path: '/ping', component: TestApi },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
