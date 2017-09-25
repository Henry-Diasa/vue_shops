// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import Detail from './pages/detail.vue'
import Forecast from './pages/detail/forecast.vue'
import Analysis from './pages/detail/analysis.vue'
import Count from './pages/detail/count.vue'
import Publish from './pages/detail/publish.vue'
import OrderListPage from './pages/orderList.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:IndexPage
    },
    {
      path:'/orderlist',
      component:OrderListPage
    },
    {
      path:'/detail',
      component:Detail,
      redirect:'/detail/analysis',
      children:[
        {
          path:'forecast',
          component:Forecast
        },
        {
          path:'analysis',
          component:Analysis
        },
        {
          path:'count',
          component:Count
        },
        {
          path:'publish',
          component:Publish
        }

      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
