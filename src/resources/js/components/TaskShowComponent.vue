<template>
    <div class="container">
        <nfrashcards-component :getTasks="getTasks" :tasks="tasks"></nfrashcards-component>
    </div>
</template>

<script>
    export default {
       data: 
       function () {
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