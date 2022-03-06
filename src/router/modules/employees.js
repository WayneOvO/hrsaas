import Layout from '@/layout/index.vue'

export default {
  path: '/employees',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/employees'),
      meta: {
        title: '员工管理'
      }
    }
  ]
}
