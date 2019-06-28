<template>
  
  <div id="lobby">
    <Lobby/>
  </div>
</template>

<script>
import Lobby from './components/lobby'

export default {
  components: {
    Lobby
  },
  data() {
    return {

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
