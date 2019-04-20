import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
Vue.use(Router)
const router = new Router({
  routes,
  mode: 'hash'
})
// const LOGIN_PAGE_NAME = 'login'

// router.beforeEach((to, from, next) => {
//   // const token = getToken()
//   const token = '123'
//   if (!token && to.name !== LOGIN_PAGE_NAME) {
//     // 未登录且要跳转的页面不是登录页
//     next({
//       name: LOGIN_PAGE_NAME // 跳转到登录页
//     })
//   } else if (!token && to.name === LOGIN_PAGE_NAME) {
//     // 未登陆且要跳转的页面是登录页
//     next() // 跳转
//   } else if (token && to.name === 'home') {
//     // 已登录且要跳转的页面是登录页
//     next()
//   } else {
//     // store.dispatch('getUserInfo').then(user => {
//     //   // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
//     //   // if (canTurnTo(to.name, user.access, routes)) next() // 有权限，可访问
//     //   // else next({ replace: true, name: 'error_401' }) // 无权限，重定向到401页面
//     //   next({
//     //     name: routes // 跳转到home页
//     //   })
//     // })
//   }
// })
export default router