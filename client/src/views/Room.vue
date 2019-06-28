<template>
<div id="room">
  
    <div style="padding-top: 5%;">
      <b-container style="background-color: #640F21; color: white; padding: 20px;">
          <form @submit.prevent="create">
              <b-row class="">
                  <b-col sm="3">
                      <label for="roomName" style="font-weight:bold; font-size: 20px;">Room Name :</label>
                  </b-col>
                  <b-col sm="5">
                      <b-form-input id="`roomName`" type="text" v-model="roomName"></b-form-input>
                  </b-col>
              </b-row>
              <b-row class="mt-3" >
                  <b-col sm="3">
                      <label for="roomName" style="font-weight:bold; font-size: 20px;">Amount of Players :</label>
                  </b-col>
                  <b-col sm="3" class="d-flex justify-content-around">
                      <b-form-select
                          class="mb-2 mr-sm-2 mb-sm-0"
                          :value="null"
                          :options="{'2': '2', '3': '3' , '4': '4'}"
                          id="inline-form-custom-select-pref"
                      >
                          <option slot="first" :value="null">Choose...</option>
                      </b-form-select>
                      <b-button type="submit" variant="primary" style="width: 100px;">Create</b-button>
                  </b-col>
              </b-row>
          </form>
      </b-container>
    </div>
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
  #room {
    height: 100vh;
    background: url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/yRF5c-O/disco-dance-floor-seamless-vj-loop-motion-background-orange-red-yellow-hot_swj9-3pzl_thumbnail-full01.png');
    background-size: cover
  }
</style>
