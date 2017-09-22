// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Goods from './components/goods/goods'
import Ratings from './components/ratings/ratings'
import Seller from './components/seller/seller'

import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
*/
const routes = [
  { path: '/', component: Goods },
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  linkActiveClass: 'active'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
