<template>
    <div class="container">
        <div class="text-wrapper">
            <p>{{arryCheck()}}</p>
            <h2>{{QAcheck}}</h2>
        </div>

        <div class="button-container">
            <nswitch-component
            @increment="increment"
            @reset="reset">
            </nswitch-component>            
        </div>

        <router-link v-bind:to="{name: 'task.list'}">
        <button class="btn btn-primary">戻る</button>
        </router-link>

    </div>
</template>

<script>
import NswitchComponent from './NswitchComponent.vue'
export default {
  components: { NswitchComponent },
    data: function() {
        return {
            num:0,
        }
    },
    methods: {
        increment(){
            if(this.num < this.tasks.length * 2) {
                this.num += 1
            }
        },
        reset(){
            if(this.num > 0) {
                this.num -= 1
            }
        },
        arrayElements: function() {
            if((this.isActive+1) % 2 == 1) {
                this.isActive = "question"
            } else if((this.isActive+1) % 2 == 0) {
                this.isActive = "answer"
            }
        },
        arryCheck() {
            return this.tasks.length
        }
    },
    computed: {
        QAcheck: function(){
            let numQ = Math.floor((this.num-1)/2)
            if(this.num == 0){
                return "はじめ"
            } else if(this.num%2 ==1 && this.num < 20){
                return this.tasks[numQ].question
            } else if(this.num%2 ==0 && this.num < 21){
                return this.tasks[numQ].answer
            } else if(this.num >= 21) {
                return "おしまい"
            }
        },
    },
    props: {
        'getTasks':{
            type: Function,
            required: true
        },
        'tasks':{
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
    h2 {
        font-size: 15em;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text-wrapper {
        padding-top: 110px;
        padding-bottom: 50px;
    }
</style>