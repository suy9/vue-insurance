import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/components/Login'
const routes = [
  { pathh: '/login', component: Login }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
