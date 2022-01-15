<template>
<div>

  <div class="side-contents">
    <nav>
        <ul class="folder">
        <li class="folder-name"><a @click="tabSwitch1()" href="#">果物</a></li>
        <li class="folder-name"><a @click="tabSwitch2()" href="#">英単語</a></li>
        <li class="folder-name"><a @click="tabSwitch3()" href="#">レシピ</a></li>
        </ul>
    </nav>
  </div>  

  <!-- <div>
      <div class="v-btn" v-for="btn in btns" 
        :key="btn.id">
        <a href="#" 
        :class="{ blue: changeblue }" 
        @click="btnClicked(btn)">{{btn.text}}</a>
      </div>
  </div> -->

</div>
</template>

<script>
  export default {
    data(){
      return{
        btns:[
          {
          cmd: 'methodA',
          text: "果物",
          },
          {
          cmd: 'methodB',
          text: "英単語",
          },
          {
          cmd: 'methodC',
          text: "レシピ",
          },
        ],
        changeblue: false,
        }
    },
    methods:{
      btnClicked(command){
        switch(command.cmd){
          case 'methodA':
            this.methodA()
            break
          case 'methodB':
            this.methodB()
            break
          default:
            this.methodOthers()
        }
      },
      methodA(){
        this.changeblue = true
      },
      methodB(){
        this.changeblue = true
      },
      methodOthers(){
        this.changeblue = true
      },

      tabSwitch1() {
        this.$emit('tabSwitch1');
      },
      tabSwitch2() {
        this.$emit('tabSwitch2');
      },
      tabSwitch3() {
        this.$emit('tabSwitch3');
      },
      
    },
    // props: {
    //   'num': {
    //     type: Number
    //   }
    // }
  }
</script>

<style scoped>
  .container {
    display: flex;
}

.folder {
    width: 200px;
}

ul {
    list-style: none;
}

.folder-name {
    width: 100%;
}
</style>