<template>
    <b-list-group>
        <b-list-group-item 
            v-for="player in players"
        >{{player.name}}</b-list-group-item>
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

</style>
