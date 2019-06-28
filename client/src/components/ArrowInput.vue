<template>
    <div>
        <div class="list-input">
            <div 
                class="circle-input" 
                v-for="(arr, index) in arrowInput"
                :key="index"
            >
                <i 
                    class="fas"
                    :class="arr"
                ></i>
            </div>
        </div>
        <div
            class="test"
            v-click-outside="outside"
        >
            <b-form-input 
                class="outline"
                @keydown="checkKey()"
                tabindex="0"
                ref="arrowInput"
            ></b-form-input>
            <div>
                <span class="condition">{{condition}}</span>
                <!-- <span class="combo animated bounce infinite" v-if="players[0].combo > 1">Combo {{players[0].combo}}</span> -->
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import db from '@/config/firebase.js'

export default {
    data() {
        return {
            condition: ''
        }
    },
    created() {
        this.$refs.arrowInput.$el.focus()        
    },
    mounted() {
        this.generateRandomArrow()
        this.$refs.arrowInput.$el.focus()
    },
    computed: {
        ...mapState(['players', 'arrowInput', 'arrowList'])
    },
    methods: {
        ...mapActions(['generateRandomArrow']),
        ...mapMutations(['EMPTY_ARROW_LIST', 'EMPTY_ARROW_INPUT', 'PUSH_TO_ARROW_INPUT', 'POP_ARROW_INPUT', 'SET_PLAYER']),
        outside: function(e) {
            this.$refs.arrowInput.$el.focus()
        },
        checkKey(e) {
            e = e || window.event;

            if(this.arrowInput.length<4) {
                if (e.keyCode == '38') {
                    this.PUSH_TO_ARROW_INPUT('fa-chevron-up')
                }
                else if (e.keyCode == '40') {
                    this.PUSH_TO_ARROW_INPUT('fa-chevron-down')
                }
                else if (e.keyCode == '37') {
                    this.PUSH_TO_ARROW_INPUT('fa-chevron-left')
                }
                else if (e.keyCode == '39') {
                    this.PUSH_TO_ARROW_INPUT('fa-chevron-right')
                }
            }

            // space
            if (e.keyCode == '32') {
                this.arraysEqual(this.arrowInput, this.arrowList)
            }

            // delete
            if (e.keyCode == '16') {
                this.POP_ARROW_INPUT()
            }
        },
        arraysEqual(arr1, arr2) {
            let roomId = this.$route.params.id
            let room = db.collection("rooms").doc(roomId)
        
            room
                .get()
                .then((doc) => {
                    let players = doc.data().players
                    for(let player of players) {
                        if(player.name === localStorage.player) {
                            if(arr1.toString() == arr2.toString()) {
                                this.condition='GREAT !'
                                player.score+=player.combo*1
                                player.combo=player.combo++

                            }else{
                                this.condition='Wrong !'
                                player.combo=1
                            }
                        }
                    }

                this.SET_PLAYER(players)
                
                return room.update({
                    players
                })
            })
            .then((hasil) => {
            })
            .catch(err => {
                console.log('errr', err);
            })

            this.EMPTY_ARROW_LIST()
            this.EMPTY_ARROW_INPUT()
            this.generateRandomArrow()
        },
    },
    directives: {
        'click-outside': {
        bind: function(el, binding, vNode) {
            // Provided expression must evaluate to a function.
            if (typeof binding.value !== 'function') {
                const compName = vNode.context.name
                let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
                if (compName) { warn += `Found in component '${compName}'` }
                
                console.warn(warn)
            }
            // Define Handler and cache it on the element
            const bubble = binding.modifiers.bubble
            const handler = (e) => {
                if (bubble || (!el.contains(e.target) && el !== e.target)) {
                    binding.value(e)
                }
            }
            el.__vueClickOutside__ = handler

            // add Event Listeners
            document.addEventListener('click', handler)
                },
        
            unbind: function(el, binding) {
                // Remove Event Listeners
                document.removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        }
    }
}
</script>

<style>
.outline {
    position: absolute;
    left: -99999%;
}
.condition {
    position: absolute;
    bottom: 120%;
    font-size: 40px;
    font-family: 'Shrikhand', cursive;
    text-align: center;
    color: #83ff7b;;
    left: 18%;
    width: 100%;
}

.list-input {
    margin-top: 2em;
    display: flex;
    color: #fff;
    /* background-color: rgba(0,0,0,0.5); */
    padding: 8px 25px;
    width: 360px;
    /* border-radius: 22px; */
    /* border: solid 2px #fff; */
}
.circle-input {
    background-color: #77ea32;
    padding: 4px 15px;
    font-size: 35px;
    border-radius: 50%;
    margin-right: 30px;
}
.combo {
    color: white;
    font-size: 32px;
    bottom: 150%;
    position: absolute;
    left: 90%;
    font-family: 'Shrikhand', cursive;
    width: 160px;   
}
</style>
