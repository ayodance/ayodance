<template>
    <div>
        <div>
            <Leaderboard />
        </div>
        <Character v-for="player in players"/>

        <div>
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

</style>
