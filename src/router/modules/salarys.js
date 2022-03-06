import Layout from '@/layout/index.vue'

export default {
  path: '/salarys',
  name: 'salarys',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/salarys'),
      meta: {
        title: '工资'
      }
    }
  ]
}
