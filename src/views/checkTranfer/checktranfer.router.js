import Layout from '@/layout';
import Index from "./Index";

export default {
  path: '/checkTranfer',
  component: Layout,
  meta: {
    title: '政企订单中心',
    icon: 'gouwuche'
  },
  children: [{
    path: 'index',
    component: Index,
    name: '批量核查转定',
    hidden: false,//在菜单栏显示与否
    meta: {
      title: '批量核查转定',
      icon: 'gouwuche',
      affix: false//能不能关掉 true不能关 false能关
    }
  }]

}