<template>
    <div class="text-center" style="border: 2px black solid; margin-top: auto; margin-bottom: auto">
        <h1></h1>
        <div>
            <b-card title="Register">
               <b-form inline>
                    <label class="sr-only" for="inline-form-input-name">Full Name</label>
                    <b-input
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Full Name"
                        v-model="fullName"
                    ></b-input>

                    <label class="sr-only" for="inline-form-input-username">Username</label>
                        <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input id="inline-form-input-username" placeholder="Username" v-model="username"></b-input>
                    </b-input-group>


                    <b-button variant="primary" @click="register" >Register</b-button>
                </b-form>
                {{fullName}} {{username}}
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

            console.log(newUser)

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
</style>
