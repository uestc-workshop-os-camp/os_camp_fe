import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // redirect: '/login'
      redirect: '/Rank'
    },
    { path: '/login', component: () => import('../views/LoginView.vue') },
    { path: '/Index', component: () => import('../views/IndexView.vue') },
    { path: '/Rank', component: () => import('../views/RankView.vue') },

  ]
})

export default router
