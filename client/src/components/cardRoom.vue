<template>
    <b-container style="box-shadow: 0 0 10px black;background-color: rgba(168, 163, 163, 0.5);">

      <b-row >
        <b-col v-for="index in 4" :key="index" cols="4 my-2">
          <b-card style="background-color: whitesmoke; border: 2px solid grey;" text-variant="black">
             <b-card-text class="text-center font-weight-bold" style="font-size: 30px;">
                Room Name
            </b-card-text>
            <b-card-text style="height: 200px; font-size: 20px;">
                Players:
            </b-card-text>
            <b-card-text v-for="player in players" :key="player.id">
                {{}}
            </b-card-text>
            <b-button href="#" variant="primary" v-if="start=='true'" @click="start">Start</b-button>
          </b-card> 
        </b-col>
      </b-row>
    </b-container>    
</template>

<script>

export default {
    name:'CardRoom',    
    data(){
        return{
            players: [
                //ambil dari database
            ]
        }
    },
    methods:{
        start(){

        }
    }
}
</script>

<style scoped>

</style>
