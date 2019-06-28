<template>
    <div class="list">
        <div 
            class="circle" 
            v-for="(arr,index) in arrowList"
            :key="index"
        >
            <i 
                class="fas"
                :class="arr"
            ></i>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState(['arrowList'])
    },
    mounted() {
        console.log(this.arrowList);
    },
    methods: {
    },
}
</script>

<style>
.list {
    display: flex;
    justify-content: space-between;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
    padding: 8px 25px;
    width: 360px;
    border-radius: 22px;
    border: solid 2px #fff;
}
.circle {
    background-color: #fca9fc;
    padding: 4px 15px;
    font-size: 35px;
    border-radius: 50%;
}
</style>
