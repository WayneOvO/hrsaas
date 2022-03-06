import Layout from '@/layout/index.vue'

export default {
  path: '/salarys',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/salarys'),
      meta: {
        title: '工资'
      }
    }
  ]
}
