<template>
    <div class="container">
        <div class="text-wrapper">
            <h2>{{ QAcheck }}</h2>
        </div>

        <div class="button-wrapper">
            <button @click="rd">ランダム</button>
            <template v-if="numCheck" >
                <button @click="increment">回答見る</button>
            </template>
        </div>

        <router-link v-bind:to="{name: 'task.list'}">
        <button class="btn btn-primary">戻る</button>
        </router-link>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            num:0,
        }
    },
    methods: {
        increment(){
        this.num += 1
        },
    rd(){
        // 乱数のところ、1-19なのでMath.floor(Math.random()*９+1)*2-1が正解ですね
        this.num = Math.floor(Math.random()*10+1)*2-1
        }
    },
    computed:{
        // numCheckは奇数でTrueになって、解答を見るボタンの表示非表示判定に使われます
        // ifほにゃreturnほげとしなくても、retun 等式と書いておけば、true falseが返ってくる
        numCheck(){
            return this.num %2 ==1
        },
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
        }
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