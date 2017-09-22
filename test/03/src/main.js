// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
//import VueResource from 'vue-resource';

import App from './App';
import goods from './components/goods';

Vue.use(VueRouter);
//Vue.config.productionTip = false

const routes = [
	{path:'/',component:goods}
]

const router =new VueRouter({
	routes
})

const app = new Vue({
	el:'#app',
	router
})

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  components: { App }
})
*/
