import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/homeView.vue')
    },
    { path: '/rank', component: () => import('@/views/rankView.vue') },
  ]
})

export default router