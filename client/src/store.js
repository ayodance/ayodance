import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: ''
  },
  mutations: {
    SET_PLAYER(state, payload){
      // console.log(payload, '=======')
      state.player = payload
    }
  },
  actions: {

  }
})
