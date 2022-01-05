<template>
    <div class="container">
        <div class="text-wrapper">

            <h2>{{QAcheck}}</h2>

            <!-- <h2 class="text" v-if="isActive === 1">{{ arrayElements() }}</h2>
            <h2 class="text" v-else>ちがうよ</h2> -->

            <!-- <h2 class="text" v-if="isActive === 1">{{ tasks[0].question }}</h2>

            <h2 class="text" v-else-if="isActive === 2">{{ tasks[0].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 3">{{ tasks[1].question }}</h2>
            <h2 class="text" v-else-if="isActive === 4">{{ tasks[1].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 5">{{ tasks[2].question }}</h2>
            <h2 class="text" v-else-if="isActive === 6">{{ tasks[2].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 7">{{ tasks[3].question }}</h2>
            <h2 class="text" v-else-if="isActive === 8">{{ tasks[3].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 9">{{ tasks[4].question }}</h2>
            <h2 class="text" v-else-if="isActive === 10">{{ tasks[4].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 11">{{ tasks[5].question }}</h2>
            <h2 class="text" v-else-if="isActive === 12">{{ tasks[5].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 13">{{ tasks[6].question }}</h2>
            <h2 class="text" v-else-if="isActive === 14">{{ tasks[6].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 15">{{ tasks[7].question }}</h2>
            <h2 class="text" v-else-if="isActive === 16">{{ tasks[7].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 17">{{ tasks[8].question }}</h2>
            <h2 class="text" v-else-if="isActive === 18">{{ tasks[8].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 19">{{ tasks[9].question }}</h2>
            <h2 class="text" v-else-if="isActive === 20">{{ tasks[9].answer }}</h2>
            <h2 class="text" v-else-if="isActive === 21">{{ tasks[10].question }}</h2>
            <h2 class="text" v-else-if="isActive === 22">{{ tasks[10].answer }}</h2>
            
            <h2 class="text" v-else>{{ tasks[10].answer }}</h2> -->

        </div>

        <div class="button-container">

            <button @click="reset">←</button>
            <button @click="increment">→</button>
            
            <!-- <qandas-component></qandas-component>  -->
            
            <!-- <button @click="isActive -= 1">-1</button>
            <button @click="isActive += 1">+1</button>
        
            <qandas-component
            @forword-switch="forword_switch"
            @back-switch="back_switch">
            </qandas-component>             -->
        </div>

        <router-link v-bind:to="{name: 'task.list'}">
        <button class="btn btn-primary">戻る</button>
        </router-link>

    </div>
</template>

<script>
import QandAsComponent from './QandAsComponent.vue'
export default {
  components: { QandAsComponent },
    data: function() {
        return {
            num:0,
        }
    },
    methods: {
        increment(){
            if(this.num < 21) {
                this.num += 1
            }
        },
        reset(){
            if(this.num > 0) {
                this.num -= 1
            }
            // this.num =0
            // this.numQ =0
        },
        arrayElements: function() {
            if((this.isActive+1) % 2 == 1) {
                this.isActive = "question"
            } else if((this.isActive+1) % 2 == 0) {
                this.isActive = "answer"
            }
        },
        forword_switch: function() {
            for(let i = 0; i < 21; i++) {
                this.isActive += i   
            }
        },
        back_switch: function() {
            for(let i = 21; i > 0; i--) {
                this.isActive += i
            }
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
            type: Function
        },
        'tasks':{
            type: Array
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