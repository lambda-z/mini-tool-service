// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router';

// @ts-ignore
import Home from '@/views/Home.vue';

// @ts-ignore
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
