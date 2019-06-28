import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [
      {
        name: 'lutfi',
        score: 0,
        combo: 1,
        img_url: 'https://storage.googleapis.com/miniwp_image-storage/dance1.gif'
      },
      {
        name: 'sandy',
        score: 0,
        combo: 1,
        img_url: 'https://storage.googleapis.com/miniwp_image-storage/dance2.gif'
      },
      {
        name: 'novi',
        score: 0,
        combo: 1,
        img_url: 'https://storage.googleapis.com/miniwp_image-storage/dance3.gif'
      }
    ],
    messages: '',
    name: '',
    roomMaster: '',
    arrowCollection: ['fa-chevron-left', 'fa-chevron-up', 'fa-chevron-right', 'fa-chevron-down'],
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
    },
    SET_PLAYER (state, payload) {
      state.player = payload
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
