<template>
    <div>
        <b-row class="text-center">
            <b-col 
                cols="6" 
                v-for="(player, index) in players"
                :key="index"
            >
                <img :src="player.img_url" alt="" style="width: 35%;">
            </b-col>
        </b-row>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState(['players', 'arrowInput', 'arrowList'])
    },
    data() {
        return {
            // dancers: [
            //     {
            //         img_url: 'https://storage.googleapis.com/miniwp_image-storage/dance1.gif'
            //     },
            //     {
            //         img_url: 'https://storage.googleapis.com/miniwp_image-storage/dance2.gif'
            //     },
            //     {
            //         img_url: 'https://storage.googleapis.com/miniwp_image-storage/dance3.gif'
            //     },
            //     {
            //         img_url: 'https://storage.googleapis.com/miniwp_image-storage/dance4.gif'
            //     },
            // ]
        }
    },
}
</script>

<style>

</style>
