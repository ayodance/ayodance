import Vue from 'vue'
import Router from 'vue-router'
import InGame from '@/views/InGame'
import Register from '@/views/Register'
import Room from '@/views/Room'
import Lobby from '@/views/Lobby'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Register
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: Room
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    },
    {
      path: '/ingame',
      name: 'ingame',
      component: InGame
    }
  ]
})
