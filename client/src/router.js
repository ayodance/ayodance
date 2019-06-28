import Vue from 'vue'
import Router from 'vue-router'
import InGame from '@/views/InGame'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/ingame',
      name: 'ingame',
      component: InGame
    }
  ]
})
