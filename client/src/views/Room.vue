<template>
<div id="room">    
    <div style="padding-top: 5%;">
     <b-container style="background-color: #640F21; color: white; padding: 20px; border: 4px solid black;">
         <form @submit.prevent="create">
             <b-row>
                 <b-col sm="3">
                     <label for="roomName" style="font-weight:bold; font-size: 20px;">Room Name :</label>
                 </b-col>
                 <b-col sm="5">
                     <b-form-input id="`roomName`" type="text" v-model="roomName"></b-form-input>
                 </b-col>
             </b-row>
             <b-row class="mt-3" >
                 <b-col sm="3">
                     <label for="roomName" style="font-weight:bold; font-size: 20px;">Amount of Players :</label>
                 </b-col>
                 <b-col sm="3" class="d-flex justify-content-around">
                    <b-form-select v-model="totalPlayers" :options="options"></b-form-select>
                     <b-button type="submit" variant="primary" style="width: 100px;">Create</b-button>
                 </b-col>
             </b-row>
         </form>
     </b-container>
   </div>
     <CardRoom/>
</div>
</template>

<script>
import CardRoom from '@/components/cardRoom.vue'
import db from '@/config/firebase.js'

export default {
    name: 'Room',
    data(){
        return{
            roomName: '',
            totalPlayers: null,
            options: [
                { value: 2, text: '2' },
                { value: 3, text: '3' },
                { value: 4, text: '4' }
            ]
        }
    },
    methods:{
        create(){
            let random = Math.floor(Math.random()*4)+ 1 
            db.collection("rooms").add({
                name: this.roomName,
                messages: [],
                players: [{
                    name: localStorage.player,
                    combo: 1,
                    score: 0,
                    img_url: `https://storage.googleapis.com/miniwp_image-storage/dance${random}.gif`
                }],
                roomMaster: localStorage.getItem('player'),
                totalPlayers: this.totalPlayers,
                ready: false
            })
            .then((docRef) => {
                // console.log('success')
                this.$router.push(`/lobby/${docRef.id}`)
            })
            .catch(function(error) {
                console.log(error)
            });
        }
    },
    components:{
        CardRoom
    }
}
</script>

<style scoped>
#room {
   height: 100vh;
   background: url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/yRF5c-O/disco-dance-floor-seamless-vj-loop-motion-background-orange-red-yellow-hot_swj9-3pzl_thumbnail-full01.png');
   background-size: cover
 }
</style>
