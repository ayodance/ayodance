<template>
    <div>
    {{arrowList}}

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

</style>
