
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/home.vue') },
      { path: '/about', component: () => import('pages/about.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/error_404.vue')
  }
]

export default routes
