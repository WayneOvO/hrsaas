import Layout from '@/layout/index.vue'

export default {
  path: '/attendances',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/attendances'),
      meta: {
        title: '考勤'
      }
    }
  ]
}
