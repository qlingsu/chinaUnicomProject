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

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: '政企订单中心',
      icon: 'gouwuche'
    },
    children: [
      {
        path: 'home',
        component: Home,
        name: 'Home',
        hidden:true,//在菜单栏显示与否
        meta: {
          title: 'Home',
          // icon: 'Home',
          affix: true//能不能关掉 true不能关 false能关
        }
      },
      {
        path: 'bussinessAccept',
        name: '批量业务受理',
        component: () => import(/* webpackChunkName: "about" */ '../views/bussinessAccept/Index.vue'),
        meta: {
          title: '批量业务受理',
          icon: 'shezhi',
          affix: false//能不能关掉true不能关 false能关
        }
      },
      {
        path: 'bussinessChange',
        name: '批量业务变更',
        component: () => import(/* webpackChunkName: "about" */ '../views/bussinessChange/Index.vue'),
        meta: {
          title: '批量业务变更',
          icon: 'shezhi',
          affix: false//能不能关掉true不能关 false能关
        }
      },
      {
        path: 'checkTranfer',
        name: '批量核查转定',
        component: () => import(/* webpackChunkName: "about" */ '../views/checkTranfer/Index.vue'),
        meta: {
          title: '批量核查转定',
          icon: 'gouwuche',
          affix: false//能不能关掉true不能关 false能关
        }
      },
      {
        path: 'settingMgr',
        name: '批量配置管理',
        component: () => import(/* webpackChunkName: "about" */ '../views/settingMgr/Index.vue'),
        meta: {
          title: '批量配置管理',
          icon: 'shezhi',
          showInMenu:false,//在菜单栏显示与否
          affix: false//能不能关掉true不能关 false能关
        }
      },
    ]
  }
]
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
  console.log("router.beforeEach")
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
