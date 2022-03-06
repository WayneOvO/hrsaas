import Layout from '@/layout/index.vue'

export default {
  path: '/departments',
  name: 'departments',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/departments'),
      meta: {
        title: '组织架构'
      }
    }
  ]
}
