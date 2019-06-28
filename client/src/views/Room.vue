<template>
<div>
    <b-container fluid>
        <form @submit.prevent="create">
            <b-row class="my-1">
                <b-col sm="3">
                    <label for="roomName" >Room Name :</label>
                </b-col>
                <b-col sm="5">
                    <b-form-input id="`roomName`" type="text" v-model="roomName"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="my-1" >
                <b-col sm="3">
                    <label for="roomName" >Amount of Players :</label>
                </b-col>
                <b-col sm="5">
                    <b-form-select
                        class="mb-2 mr-sm-2 mb-sm-0"
                        :value="null"
                        :options="{'2': '2', '3': '3' , '4': '4'}"
                        id="inline-form-custom-select-pref"
                    >
                        <option slot="first" :value="null">Choose...</option>
                    </b-form-select>
                </b-col>
            </b-row>
            <b-button type="submit" variant="primary" >Create</b-button>
        </form>
    </b-container>

    <CardRoom/>
</div>
</template>

<script>
import CardRoom from '@/components/cardRoom.vue'
// import db from ''

export default {
    name: 'Room',
    data(){
        return{
            roomName: ''
        }
    },
    methods:{
        create(){
            this.$router.push('/lobby')
        }
    },
    components:{
        CardRoom
    }
}
</script>

<style scoped>

</style>
