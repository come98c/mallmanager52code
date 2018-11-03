import Vue from 'vue'

import Login from '@/views/login.vue'

import Home from '@/views/home.vue'

import Router from 'vue-router'

Vue.use(Router)

export default new Router({

  routes: [{
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/',
    component: Home
  }]
})