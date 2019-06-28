<template>
 <b-container style="box-shadow: 0 0 10px black;background-color: rgba(168, 163, 163, 0.5);">
      <b-row >
        <b-col v-for="room in rooms" :key="room.id" cols="4 my-2">
          <b-card style="background-color: whitesmoke; border: 2px solid grey;" text-variant="black">
             <b-card-text class="text-center font-weight-bold" style="font-size: 30px;">
                {{ room.name }}
            </b-card-text>
            <div style="height: 200px;">
                <b-card-text style="font-size: 25px;">
                    Players:
                <ul style="list-style-position:inside; padding-left: 0;">
                    <li v-for="(player, index) in room.players" :key="index" style="font-size:20px; list-style: none;">
                        {{player.name}}
                    </li>
                </ul>
                </b-card-text>
            </div>
            <div class="d-flex justify-content-between"> 
                <h3> {{ room.players.length }} / {{room.totalPlayers}}</h3>
                <b-button href="#" variant="primary" v-if="room.players.length < room.totalPlayers" @click="join(room.id)" style="width:100px;">JOIN</b-button>
                <b-button variant="danger" v-if="room.players.length >= room.totalPlayers" style="width:190px;">ROOM FULL</b-button>
            </div>
          </b-card> 
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import db from '@/config/firebase'

export default {
    name:'CardRoom',    
    data(){
        return{
            players: [
                //ambil dari database
            ],
            rooms: [],
        }
    },
    created(){
        db.collection("rooms")
          .onSnapshot((querySnapshot) => {
            let roomList = [];
            let playerList;
            querySnapshot.forEach((doc) =>{
                let obj = {
                    id: doc.id,
                    ...doc.data()
                }
                
                roomList.push(obj)
                // playerList = 
                
            });

            this.rooms = roomList
        });

    },
    methods:{
        join(id){
            let room = db.collection('rooms').doc(id)
            let random = Math.floor(Math.random()*4)+ 1 
            
            room
                .get()
                .then((doc) => {
                    // console.log(doc.data())

                    let players = doc.data().players
                    
                    let newPlayer = {
                        name: localStorage.player,
                        combo: 1,
                        img_url: `https://storage.googleapis.com/miniwp_image-storage/dance${random}.gif`
                    }
                    players.push(newPlayer)

                    return room.update({
                        players: players
                    })
                })
                .then(() => {
                    this.$router.push(`/lobby`, id)
                })
                .catch(err => {
                    console.log(err)
                })

        }
    }
}
</script>

<style scoped>

</style>
