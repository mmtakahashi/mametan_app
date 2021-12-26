<template>
    <div class="container">
        <table class="table table-hover">
            <thead class="thead-light">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">スタート</th>
                <th scope="col">編集</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Title1</td>
                <td>Content1</td>
                <td>
                    <router-link v-bind:to="{name: 'task.show', params: {taskId: 1}}">
                        <button class="btn btn-primary">スタート</button>
                    </router-link>
                </td>
                <td>
                    <router-link v-bind:to="{name: 'task.edit'}">
                        <button class="btn btn-success">編集</button>
                    </router-link>
                </td>
            </tr>
            
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {}
</script>