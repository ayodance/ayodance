<template>
  <div id="lobby">
    <b-container class="pt-5">
      <div class="d-flex justify-content-between">
        <div class="player-chat w-75 mx-5">
          <b-list-group-item href="#" style="background-color: #66101F; color: whitesmoke;" class="flex-column align-items-start lobby-heading">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1" style="font-weight: bold;">Chat Room</h5>
            </div>

          </b-list-group-item>

          <b-list-group style="height:300px; background-color: white; overflow: auto;">
            <b-list-group-item v-for="message in enteredMsg" :key="message.id" class="d-flex justify-content-between align-items-center">
              <div>
                <span style="font-weight:bold;">{{ message.player }}: </span> {{ message.message }}
              </div>

              <small class="text-muted">{{ message.time }}</small>
            </b-list-group-item>
          </b-list-group>

          <div class="chat-input">
              <b-form @submit.prevent="sendMessage">
                <b-form-input id="chat-message" v-model="message" placeholder="Message" autocomplete="off"></b-form-input>
              </b-form>
          </div>
        </div>

        <div class="player-list">
          <b-list-group-item style="background-color: #66101F; color: whitesmoke;" class="flex-column align-items-start lobby-heading">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1" style="font-weight: bold;">Players</h5>
            </div>

            <p class="mb-1">
              There must be at least 2 players for the game to start
            </p>
          </b-list-group-item>

          <b-list-group>
            <b-list-group-item v-for="player in players" :key="player.id" class="d-flex justify-content-between align-items-center player">
              {{ player }}

              <b-badge v-if="player === roomMaster" variant="primary" pill>ROOM MASTER</b-badge>
            </b-list-group-item>
          </b-list-group>

          <b-list-group-item style="background-color: #EBEBEB;" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <b-button><span v-if="players.length < 2">Waiting...</span><span v-if="players.length >= 2">Waiting for room master to start</span></b-button>
              <b-button variant="success" v-if="currentPlayer === roomMaster" v-on:click.prevent="ingame(roomId)">Start</b-button>
            </div>
          </b-list-group-item>
        </div>

      </div>
    </b-container>
  </div>
</template>

<script>
import db from '@/config/firebase'

export default {
  name: 'Lobby',
  data() {
    return {
      message: '',
      players: [
      ],

      enteredMsg: [
      ],
      roomId: '',
      roomMaster: '',
      currentPlayer: ''
    }
  },
  
  created() {  
    this.roomId = this.$route.params.id
    this.currentPlayer = localStorage.player
    
    db.collection("rooms").doc(this.roomId)
    .onSnapshot((doc) => {
        let messages = doc.data().messages

        let players = doc.data().players
        
        let arr = []
        for(let player of players) {
          arr.push(player.name)
        }
        this.roomMaster = doc.data().roomMaster
        this.enteredMsg = messages
        this.players = arr
    });
  },
  methods: {
    ingame(id) {
      this.$router.push(`/ingame/${id}`)
    },
    sendMessage() {
      let date = new Date()
      

      let player = {
        player: localStorage.getItem('player'),
        message: this.message,
        time: `${date.getHours()}:${date.getMinutes()}`
      }

      let room = db.collection("rooms").doc(this.roomId)

      room
        .get()
        .then((doc) => {
          let messages = doc.data().messages
          
          messages.push(player)

          this.message = ""

          room.update({
            messages: messages
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }


}
</script>

<style>
  .player:hover {
    background-color: #F8F9FA;
  }

  .chat-input {
    padding: 5px;
    /* height: 70px; */
    background-color: #E7E4EC;
  }

  .lobby-heading {
    background-color: #66101F;

    border: 2px solid black;
  }
  
  #lobby {
    height: 100vh;
    background: url('https://wallpapercave.com/wp/17XP3In.jpg');
    background-size: cover
  }
</style>
