<template>

  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
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
