import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingViews.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    }
  ]
})

export default router
