<template>

  <div id="app">
    <Register v-if="!player"/>
    <Room v-if="player"/>
    
   <div id="lobby" v-if="player">
    <Lobby/>
   </div>
      <!-- {{ $store.state.player }} -->
    <router-view/>
  </div>
</template>

<script>
import Register from './views/Register'
import Room from './views/Room'
import Lobby from './components/lobby'

export default {
  components: {
    Lobby,
    Register,
    Room
  },
  data() {
    return {
      player: false
    }
  },
  created() {
    if(localStorage.player) {
      this.player = true
    }
  },
  watch: {
    '$store.state.player'() {
        this.player = true
      
    }
  }
}
</script>


<style>
 #lobby {
   height: 100vh;
   background: url('https://wallpapercave.com/wp/17XP3In.jpg');
   background-size: cover
 }
</style>
