import Layout from '@/layout/index.vue'

export default {
  path: '/setting',
  name: 'setting',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/setting'),
      meta: {
        title: '公司设置'
      }
    }
  ]
}
