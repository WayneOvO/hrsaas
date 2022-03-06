import Layout from '@/layout/index.vue'

export default {
  path: '/employees',
  name: 'employees',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/employees'),
      meta: {
        title: '员工管理'
      }
    }
  ]
}
