<template>
  <div id="app">
    <Register v-if="!player"/>
    <Room v-if="player"/>

      {{ $store.state.player }}
    <router-view/>
  </div>
</template>
<script>
import Register from './views/Register'
import Room from './views/Room'
export default {
  components:{
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

</style>
