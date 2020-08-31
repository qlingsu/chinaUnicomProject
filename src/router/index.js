import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter);

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

import { Message } from 'element-ui'

const routerInModule = require.context('../views', true, /\.router.js$/)
const routers = [];
routerInModule.keys().forEach((path) => {
  const value = routerInModule(path);
  if (value.default instanceof Array) {
    routers = routers.concat(value.default);
  } else if (value.default instanceof Object) {
    routers.push(value.default);
  }

})

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '政企订单中心',
      icon: 'gouwuche'
    },
    hidden: true,
    children: [
      {
        path: 'home',
        component: Home,
        name: 'Home',
        hidden: true,//在菜单栏显示与否
        meta: {
          title: 'Home',
          // icon: 'Home',
          affix: true//能不能关掉 true不能关 false能关
        }
      }
    ]
  }
].concat(routers)
//异步路由
export const asyncRoutes = [];

const router = new VueRouter({
  routes: constantRoutes
})

const whiteList = ['/login'] // no redirect whitelist

//路由守卫
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  if (to.path === '/login') {
    next({ path: '/' })
    NProgress.done()
  } else if (whiteList.indexOf(to.path) !== -1) {//白名单
    next()
  } else {
    try {
      next()
    } catch (error) {
      Message.error(error || 'Has Error')
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

export default router
