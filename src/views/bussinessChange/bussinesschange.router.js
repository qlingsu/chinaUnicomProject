import Layout from '@/layout';
import Transfer from "./Transfer";
import RateController from "./RateController";
import Move from "./Move";
import OrderAudit from "./OrderAudit";

export default {
  path: '/bussinessChange',
  component: Layout,
  name: "批量业务变更",
  meta: {
    title: '批量业务变更',
    icon: 'gouwuche'
  },
  hidden: false,//在菜单栏显示与否
  children: [{
    path: 'transfer',
    component: Transfer,
    name: '过户',
    hidden: false,//在菜单栏显示与否
    meta: {
      title: '批量业务变更',
      icon: 'gouwuche',
      affix: false//能不能关掉 true不能关 false能关
    }
  }, {
    path: 'rateController',
    component: RateController,
    name: '升降速',
    hidden: false,//在菜单栏显示与否
    meta: {
      title: '批量业务变更',
      icon: 'gouwuche',
      affix: false//能不能关掉 true不能关 false能关
    }
  }, {
    path: 'move',
    component: Move,
    name: '移机',
    hidden: false,//在菜单栏显示与否
    meta: {
      title: '批量业务变更',
      icon: 'gouwuche',
      affix: false//能不能关掉 true不能关 false能关
    }
  }, {
    path: 'orderAudit',
    component: OrderAudit,
    name: '订单审核',
    hidden: false,//在菜单栏显示与否
    meta: {
      title: '批量业务变更',
      icon: 'gouwuche',
      affix: false//能不能关掉 true不能关 false能关
    }
  }]
}