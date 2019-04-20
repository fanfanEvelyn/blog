import Main from '@/views/main'
export default [{
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: Main,
    children: [{
      path: '/',
      name: 'home',
      meta: {},
      component: () => import('@/views/home/home.vue')
    }]
  },
  {
    path: '/',
    name: 'article',
    component: Main,
    children: [{
      path: 'article',
      name: 'article',
      meta: {},
      component: () => import('@/views/blogs/article.vue')
    }]
  },
  {
    path: '/',
    name: 'about',
    component: Main,
    children: [{
      path: 'about',
      name: 'about',
      meta: {},
      component: () => import('@/views/about/person.vue')
    }]
  },
  {
    path: '/',
    name: 'label',
    component: Main,
    children: [{
      path: 'label',
      name: 'label',
      meta: {},
      component: () => import('@/views/label/label.vue')
    }]
  }
]
