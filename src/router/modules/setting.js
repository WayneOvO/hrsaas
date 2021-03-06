import Layout from '@/layout/index.vue'

export default {
  path: '/setting',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/setting'),
      meta: {
        title: '公司设置'
      }
    }
  ]
}
