<template>
    <div class="bg-img">
        <audio controls autoplay="true">
            <source src="https://storage.googleapis.com/miniwp_image-storage/Large-rock-concert-crowd-cheering-short.mp3" type="audio/ogg">
            <source src="https://storage.googleapis.com/miniwp_image-storage/Large-rock-concert-crowd-cheering-short.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <audio controls autoplay="true">
            <source src="https://storage.googleapis.com/miniwp_image-storage/lagi_syantik.mp3" type="audio/ogg">
            <source src="https://storage.googleapis.com/miniwp_image-storage/lagi_syantik.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>

        <div>
            <Leaderboard />
        </div>
        <Character />

        <div class="arrows">
            <ArrowList />
            <ArrowInput />
        </div>
    </div>
</template>

<script>
// 1. fetch data from db about player list
// 2. render in character and leaderboard

import Character from '@/components/Character'
import ArrowInput from '@/components/ArrowInput'
import ArrowList from '@/components/ArrowList'
import Leaderboard from '@/components/Leaderboard'
import {mapState, mapActions, mapMutations} from 'vuex'
import db from '@/config/firebase.js'

export default {
    components: {
        Character,
        ArrowInput,
        ArrowList,
        Leaderboard
    },
    computed: {
        ...mapState(['players'])
    },
    methods: {
        ...mapMutations(['SET_PLAYER'])
    },
    mounted() {
        
    },
    created() {
        let roomId = this.$route.params.id
        let room = db.collection("rooms").doc(roomId)
    
        room
        .get()
        .then((doc) => {
            this.SET_PLAYER(doc.data().players)
        })
        .catch(err => {
            console.log('errr', err);
        })
    },
}
</script>

<style>
audio { 
   display:none;
}
.arrows {
    position: absolute;
    left: 39%;
    top: 50%;
    width: 250px;
}
.bg-img {
    background: url('https://storage.googleapis.com/miniwp_image-storage/dance_floor.gif') no-repeat center;
    background-size: auto;
    width: 100%;
    background-size: 1360px 860px;
    height: 100vh;
}
</style>
