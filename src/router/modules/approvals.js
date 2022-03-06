import Layout from '@/layout/index.vue'

export default {
  path: '/approvals',
  name: 'approvals',
  components: Layout,
  children: [
    {
      path: '',
      components: () => import('@/views/approvals'),
      meta: {
        title: '审批'
      }
    }
  ]
}
