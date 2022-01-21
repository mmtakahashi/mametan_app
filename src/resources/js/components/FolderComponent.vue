<template>
<div>

  <div class="side-contents">
    <nav>
        <ul class="folder">
        <li :class="{'tab__item--active': num === 1 }" class="folder-name"><a @click="tabSwitch1()" href="#">果物</a></li>
        <li :class="{'tab__item--active': num === 2 }" class="folder-name"><a @click="tabSwitch2()" href="#">英単語</a></li>
        <li :class="{'tab__item--active': num === 3 }" class="folder-name"><a @click="tabSwitch3()" href="#">レシピ</a></li>
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
    props: {
      'num': {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped>
.folder {
    width: 200px;
    margin-top: 30px;
    margin-right: 30px;
}

ul {
    list-style: none;
}

a {
  font-size: 22px;
}

.folder-name {
    width: 100%;
}

.tab__item--active {
  background-color: blue;
}
</style>