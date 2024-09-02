import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // redirect: '/login'
      redirect: '/home'
    },
    { path: '/login', component: () => import('@/views/LoginView.vue') },
    { path: '/Index', component: () => import('@/views/IndexView.vue') },
    { path: '/rank', component: () => import('@/views/RankView.vue') },
    { path: '/home', component: () => import('@/views/homeView.vue') },

  ]
})

export default router
