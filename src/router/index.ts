// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router';

// @ts-ignore
import Home from '@/views/Home.vue';
import MDEditor from "../views/MDEditor.vue";

// @ts-ignore
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/md',
    name: 'md',
    component: MDEditor
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
