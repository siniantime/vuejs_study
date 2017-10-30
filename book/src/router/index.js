import Vue from 'vue'
import Router from 'vue-router'
import BookList from '../views/BookList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BookList
    }
  ]
})
