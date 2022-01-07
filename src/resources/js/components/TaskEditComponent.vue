<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row">
                        <label for="id" class="">ID</label>
                        <input type="text" class="" readonly id="id" v-model="task.id">
                    </div>
                    <div class="form-group row">
                        <label for="question" class="">問題</label>
                        <input type="text" class="" id="question" v-model="task.question">
                    </div>
                    <div class="form-group row">
                        <label for="answer" class="">答え</label>
                        <input type="text" class="" id="answer" v-model="task.answer">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    
    <router-link v-bind:to="{name: 'task.list'}">
    <button class="btn btn-primary">戻る</button>
    </router-link>
    </div>

</template>

<script>
    export default {
       data: function () {
           return {
               task: {}
           }
       },
       methods: {
           getTask() {
               axios.get('/api/todo/' + this.taskId)
                   .then((res) => {
                       this.task = res.data;
                   });
           },
           submit() {
               axios.put('/api/todo/' + this.taskId, this.task)
                   .then((res) => {
                       this.$router.push({name: 'task.list'})
                   });
           }
       },
       mounted() {
           this.getTask();
       },
       props: {
            taskId: String
        }
    }

</script>