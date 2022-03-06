import Layout from '@/layout/index.vue'

export default {
  path: '/attendances',
  name: 'attendances',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/attendances'),
      meta: {
        title: '考勤'
      }
    }
  ]
}
