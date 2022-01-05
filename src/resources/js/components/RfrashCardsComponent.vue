<template>
    <div>
        <h2>{{ QAcheck }}</h2>
    <button @click="increment">+1</button>
      <button @click="reset">reset</button>
      <button @click="rd">ランダム</button>
    <p v-show="numCheck" >
        <button @click="increment">回答見る</button>
    </p>

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
          reset(){
            this.num = 0
          },
          rd(){
            this.num = Math.floor(Math.random()*9+1)*2-1
          }

        },
    computed:{
          // numCheckは奇数でTrueになって、解答を見るボタンの表示非表示判定に使われます
          // ifほにゃreturnほげとしなくても、retun 等式と書いておけば、true falseが返ってくる
          numCheck(){
           return this.num %2 ==1
          } 
          ,
          QAcheck: function(){
          if(this.num ==0){
            return "はじめ"
          }
          else if(this.num%2 ==1){
              return "Question"
            }
          else if(this.num%2 ==0){
              return "Answer"
            }
           }
           ,
           numQ(){
             return Math.floor(this.num/2+0.5)
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