<template>
  <b-container class="pt-5">
    <div class="d-flex justify-content-between">
      <div class="player-chat w-75 mx-5">
        <b-list-group-item href="#" style="background-color: #66101F; color: whitesmoke;" class="flex-column align-items-start lobby-heading">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Chat Room</h5>
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
            <b-form-input id="chat-message" v-model="message" placeholder="Message"></b-form-input>
        </div>
      </div>

      <div class="player-list">
        <b-list-group-item style="background-color: #66101F; color: whitesmoke;" class="flex-column align-items-start lobby-heading">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Players</h5>
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
            <b-button>Waiting...</b-button>
            <b-button variant="success">Start</b-button>
          </div>
        </b-list-group-item>
      </div>

    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Lobby',
  data() {
    return {
      message: '',
      players: [
        'xyztestplayer',
        'yomanyoman12',
        'terserahgkjelas',
        'hehehohoho'
      ],

      enteredMsg: [
        {
          player: 'xyztestplayer',
          message: 'test message blablabla',
          time: '13:05'
        },
        {
          player: 'yomanyoman12',
          message: 'buruan start woi',
          time: '13:07'
        },
        {
          player: 'terserahgkjelas',
          message: 'sabar napa ',
          time: '13:10'
        },
        {
          player: 'hehehohoho',
          message: 'brisik',
          time: '13:10'
        },
        {
          player: 'xyztestplayer',
          message: 'test message blablabla',
          time: '13:05'
        },
        {
          player: 'xyztestplayer',
          message: 'test message blablabla',
          time: '13:05'
        },
        {
          player: 'xyztestplayer',
          message: 'test message blablabla',
          time: '13:05'
        },
        {
          player: 'xyztestplayer',
          message: 'test message blablabla',
          time: '13:05'
        },

      ],

      roomMaster: 'xyztestplayer'
    }
  },
  
  mounted() {
    const chat = document.getElementById('chat-message')[0]

      // console.log(chat)
    chat.addEventListener("input-message", (event) => {
      if(event.keyCode === '13') {
        alert('hoho')
      }
    })
    
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
</style>
