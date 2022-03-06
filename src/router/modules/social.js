import Layout from '@/layout/index.vue'

export default {
  path: '/social',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/social'),
      meta: {
        title: '社保'
      }
    }
  ]
}
