import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

import Element from 'element-ui';
import '@/styles/element-variables.scss';
Vue.use(Element);
import '@/styles/index.scss' // global css

import SvgIcon from '@/components/SvgIcon'// svg component
Vue.component('svg-icon', SvgIcon)// register globally

store.dispatch('permission/generateRoutes').then(()=>{
  console.log("generateRoutes done")
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


