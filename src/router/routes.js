
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('src/pages/Index.vue'), meta: {
        title: 'BusyMonk'
      } },
      {
        path: "/blogs",
        component: () => import('src/pages/Blogs.vue'),
        meta: {
          title: 'BusyMonk | Blogs'
        }

      },
      {
        path: "/register",
        component: () => import('src/pages/RegisterUser.vue')
      },
      {
        path: "/login",
        component: () => import('src/pages/LoginUser.vue')
      }

    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
