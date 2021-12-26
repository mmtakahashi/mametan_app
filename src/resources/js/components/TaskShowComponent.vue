<template>
    <div class="container">
        <router-link v-bind:to="{name: 'task.list'}">
            <button class="btn btn-primary">戻る</button>
        </router-link>

    </div>
</template>

<script>
    export default {
        props: {
            taskId: String
        }
    }
</script>