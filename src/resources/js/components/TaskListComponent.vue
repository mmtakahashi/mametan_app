<template>
    <div class="container">
        <table class="table table-hover">
            <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">ノーマル</th>
                <th scope="col">ランダム</th>
                <th scope="col">編集</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
                <th scope="row">{{ task.id }}</th>
                <td>{{ task.question }}</td>
                <td>{{ task.answer }}</td>
                <td>
                    <router-link v-bind:to="{name: 'task.show'}">
                        <button class="btn btn-primary">スタート</button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{name: 'task.rshow'}">
                        <button class="btn btn-primary">スタート</button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{name: 'task.edit', params: {taskId: task.id }}">
                        <button class="btn btn-success">編集</button>
                    </router-link>
                </td>
            </tr>
            
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
       data: function () {
           return {
               tasks: []
           }
       },
       methods: {
           getTasks() {
               axios.get('/api/todo')
                   .then((res) => {
                       this.tasks = res.data;
                   });
           }
       },
       mounted() {
           this.getTasks();
       }
   }
</script>