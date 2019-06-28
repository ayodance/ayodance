<template>
    <div class="bg-img">
        <audio controls autoplay="true">
            <source src="horse.ogg" type="audio/ogg">
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
import {mapState, mapActions} from 'vuex'

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
    mounted() {
        
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
    top: 30%;
    width: 250px;
}
.bg-img {
    background: url('https://storage.googleapis.com/miniwp_image-storage/dance_floor.gif') no-repeat center;
    background-size: auto;
    width: 100%;
    background-size: 1360px 860px;
}
</style>
