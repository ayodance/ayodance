import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      {
        name: 'lutfi',
        score: 0,
        combo: 1
      },
      {
        name: 'sandy',
        score: 0,
        combo: 1
      },
      {
        name: 'novi',
        score: 0,
        combo: 1
      }
    ],
    arrowCollection: ['left', 'up', 'right', 'down'],
    arrowInput: [],
    arrowList: []
  },
  mutations: {
    SET_ARROW_LIST (state) {
      state.arrowList.push(state.arrowCollection[(Math.floor(Math.random() * state.arrowCollection.length))])
    },
    EMPTY_ARROW_LIST (state) {
      state.arrowList = []
    },
    EMPTY_ARROW_INPUT (state) {
      state.arrowInput = []
    },
    PUSH_TO_ARROW_INPUT (state, payload) {
      state.arrowInput.push(payload)
    },
    POP_ARROW_INPUT (state) {
      state.arrowInput.pop()
    }
  },
  actions: {
    generateRandomArrow (context) {
      for (let i = 0; i < 4; i++) {
        context.commit('SET_ARROW_LIST')
      }
    }
  }
})
