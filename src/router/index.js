import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Kloud Commerce'
    }
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next()
})

export default router