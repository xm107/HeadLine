import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login'// 引入login组件
import SecondHome from '@/views/home/second_home'// 引入默认的二级路由组件
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*', // 匹配任何找不到组件的路由
    component: () => import('@/views/404')
  }, {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '', // 二级路由组件什么都不写 代表二级路由的默认组件 若： a=>/home/a 若什么都不写=> /home
        component: SecondHome// 默认二级路由组件
      }, {
        // path: '/home/comment', //评论列表地址
        path: 'comment', // 简写
        component: () => import('@/views/comment') // 组件按需加载
      }, {
        path: 'material',
        component: () => import('@/views/material')
      }, {
        path: 'articles',
        component: () => import('@/views/articles')
      }, {
        path: 'publish/:articleId?', // 发布文章 加上问号 可有可无
        component: () => import('@/views/publish')
      }, {
        path: 'account',
        component: () => import('@/views/account')// 账户组件
      }
    ]
    // 在一级路由表下 children配置二级路由表

  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  // {
  // 按需加载
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
