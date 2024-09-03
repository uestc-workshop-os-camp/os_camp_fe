import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // redirect: '/login'
      component: () => import('@/views/homeView.vue')
    },
    { path: '/login', component: () => import('@/views/LoginView.vue') },
    { path: '/Index', component: () => import('@/views/IndexView.vue') },
    { path: '/rank', component: () => import('@/views/RankView.vue') },
  ]
})

export default router