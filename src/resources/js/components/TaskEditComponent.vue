<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row">
                        <label for="id" class="col-sm-3 col-form-label">ID</label>
                        <input type="text" class="col-sm-9 form-control-plaintext" readonly id="id" v-model="task.id">
                    </div>
                    <div class="form-group row">
                        <label for="question" class="col-sm-3 col-form-label">Question</label>
                        <input type="text" class="col-sm-9 form-control" id="question" v-model="task.question">
                    </div>
                    <div class="form-group row">
                        <label for="answer" class="col-sm-3 col-form-label">Answer</label>
                        <input type="text" class="col-sm-9 form-control" id="answer" v-model="task.answer">
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
        props: {
            taskId: String
        },
       data: function () {
           return {
               task: {}
           }
       },
       methods: {
           getTask() {
               axios.get('/api/todo/edit/' + this.taskId)
                   .then((res) => {
                       this.task = res.data;
                   });
           },
           submit() {
               axios.put('/api/todo/edit/' + this.taskId, this.task)
                   .then((res) => {
                       this.$router.push({name: 'task.list'})
                   });
           }
       },
       mounted() {
           this.getTask();
       }
    }

</script>