<template>
    <div class="text-center" style="margin-top: auto; margin-bottom: auto">
        <div>
            <p class="name">DANCE MAN!A</p>
            <b-card title="Register">
            <b-form inline @submit.prevent="register">

                    <label class="sr-only" for="inline-form-input-username">Username</label>
                        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input id="inline-form-input-username" placeholder="Username" v-model="username"></b-input>
                    </b-input-group>


                    <b-button 
                        type="submit"
                        variant="primary">Register</b-button>
                </b-form>
            </b-card>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'Register',
    data(){
        return{
            fullName: '',
            username: ''
        }
    },
    methods: {
        register(){
            let newUser = {
                fullName: this.fullName,
                username: this.username
            }
            let player = localStorage.setItem('player', newUser.username)
            this.$store.commit('SET_PLAYER', newUser.username)

            this.$router.push('/rooms')
        }
    }
    
}
</script>

<style scoped>
.text-center  {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.name{
    font-family: 'Bungee Inline', cursive;
    font-size: 65px;
}
</style>
