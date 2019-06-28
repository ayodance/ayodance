<template>
    <div>
        <b-card bg-variant="dark" text-variant="white" title="Room Name">
            <b-card-text>
                Player Who Join the game:
            </b-card-text>
            <b-card-text v-for="player in players" :key="player.id">
                {{}}
            </b-card-text>
            <b-button href="#" variant="primary" v-if="start=='true'" @click="start">Start</b-button>
        </b-card>
    </div>    
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
