import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/web/index.vue')
    },
    {
      path: '/doc/:id',
      name: 'doc',
      component: () => import('@/views/web/doc.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('@/views/admin/admin.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/admin/home/index.vue')
        },
        {
          path: 'sysmgr',
          name: 'sysmgr',
          component: () => import('@/views/admin/systemManagement/index.vue')
        },
        {
          path: 'usercenter',
          name: 'usercenter',
          component: () => import('@/views/admin/userCenter/index.vue')
        }
      ]
    }
  ]
})

export default router
