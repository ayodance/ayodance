<template>
    <div>
        <div>User Arrow: {{arrowInput}}</div>
        <div
            class="test"
            v-click-outside="outside"
        >
            <b-form-input 
                placeholder=""
                @keydown="checkKey()"
                tabindex="0"
                ref="arrowInput"
            ></b-form-input>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
    mounted() {
        this.generateRandomArrow()
        this.$refs.arrowInput.$el.focus()
    },
    computed: {
        ...mapState(['players', 'arrowInput', 'arrowList'])
    },
    methods: {
        ...mapActions(['generateRandomArrow']),
        ...mapMutations(['EMPTY_ARROW_LIST', 'EMPTY_ARROW_INPUT', 'PUSH_TO_ARROW_INPUT', 'POP_ARROW_INPUT']),
        outside: function(e) {
            this.$refs.arrowInput.$el.focus()
        },
        checkKey(e) {
            e = e || window.event;

            if(this.arrowInput.length<4) {
                if (e.keyCode == '38') {
                    console.log('up');
                    this.PUSH_TO_ARROW_INPUT('up')
                }
                else if (e.keyCode == '40') {
                    console.log('down');
                    this.PUSH_TO_ARROW_INPUT('down')
                }
                else if (e.keyCode == '37') {
                    console.log('left');
                    this.PUSH_TO_ARROW_INPUT('left')
                }
                else if (e.keyCode == '39') {
                    console.log('right');
                    this.PUSH_TO_ARROW_INPUT('right')
                }
            }

            // space
            if (e.keyCode == '32') {
                this.arraysEqual(this.arrowInput, this.arrowList)
            }

            // delete
            if (e.keyCode == '8') {
                this.POP_ARROW_INPUT()
            }
        },
        arraysEqual(arr1, arr2) {
            if(arr1.toString() == arr2.toString()) {
                console.log('DANCE~');
                this.players[0].score+=this.players[0].combo*1
                this.players[0].combo++
            }else{
                console.log('YOU LAME!');
                this.players[0].combo = 1
            }

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

</style>
