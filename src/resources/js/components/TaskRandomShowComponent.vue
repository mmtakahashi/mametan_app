<template>
    <div class="container">
        <rfrashcards-component 
        :getTasks="getTasks" 
        :tasks="tasks">
        </rfrashcards-component>
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