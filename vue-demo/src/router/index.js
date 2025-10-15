import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/inter-observer',
      name: 'InterObserver',
      component: () => import('../views/InterObsView.vue')
    },
    {
      path: '/snap-scroll',
      name: 'SnapScroll',
      component: () => import('../views/SnapScrollView.vue')
    }
  ],
})

export default router
