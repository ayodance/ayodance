<template>
    <b-list-group class="leaderboard__container">
        <h5 style="color: #fff;">Score</h5>
        <b-list-group-item 
            v-for="(player, index) in players"
            :key="index"
        >{{player.name}} - {{player.score}}</b-list-group-item>
    </b-list-group>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState(['players'])
    },
    mounted() {
        console.log(this.players);
    },
}
</script>

<style>
.leaderboard__container {
    width: 15%;
    position: absolute;
    left: 5%;
    top: 5%;
    border: solid 2px pink;
    border-radius: 6px;
    background: rgba(0,0,0, 0.7);
}
.list-group-item {
    background-color: unset !important;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    border: 1px solid rgb(255, 255, 255);
}
</style>
