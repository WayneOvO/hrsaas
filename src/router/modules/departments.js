import Layout from '@/layout/index.vue'

export default {
  path: '/departments',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/departments'),
      meta: {
        title: '组织架构'
      }
    }
  ]
}
