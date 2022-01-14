<template>
<div>
        <form v-on:submit.prevent="submit">
            <div>

                <label for="question">問題</label>
                <input type="text" id="question" v-model="task.question">

            </div>
            <div>

                <label for="answer">答え</label>
                <input type="text" id="answer" v-model="task.answer">

            </div>

            <button :disabled="limitCheck ==='true'" type="submit" >追加</button>
            <p>{{alart}}</p>
        </form>

    <router-link v-bind:to="{name: 'task.list'}">
        <button class="btn btn-primary">戻る</button>
    </router-link>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
                tasks: [],
                task: {}
           }
       },
       methods: {
            getTasks() {
                axios.get('/api/todo/')
                    .then((res) => {
                        this.tasks = res.data;
                   });
            },
            submit() {
                axios.post('/api/todo/', this.task)
                    .then((res) => {
                        this.$router.push({name: 'task.list'});
                   });
           },
       },
       computed: {
           limitCheck(){
                return this.tasks.length >= 10 ? "true" : "false"
                },
            alart(){
                return this.limitCheck === "true" ?  "10件以上は登録できません": ""
                }
       },
       mounted() {
           this.getTasks();
           
       }
   }

</script>