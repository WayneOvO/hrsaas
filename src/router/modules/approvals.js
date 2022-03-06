import Layout from '@/layout/index.vue'

export default {
  path: '/approvals',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/approvals'),
      meta: {
        title: '审批'
      }
    }
  ]
}
