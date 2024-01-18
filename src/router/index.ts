// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router';

// @ts-ignore
import Home from '@/views/Home.vue';
import MDEditor from "../views/MDEditor.vue";
import Main from "../views/MAIN.vue";

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
  {
    path: '/',
    name: 'main',
    component: Main
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
