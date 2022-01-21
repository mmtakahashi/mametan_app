<template>
    <div class="container">

        <!-- <folder-component
            @tabSwitch1="tabSwitch1"
            @tabSwitch2="tabSwitch2"
            @tabSwitch3="tabSwitch3">
        </folder-component> -->

        <div class="side-contents">
            <nav>
                <ul class="folder">
                <li :class="{'tab_active': num === 1 }" class="folder-name"><a @click="tabSwitch1" href="#">果物</a></li>
                <li :class="{'tab_active': num === 2 }" class="folder-name"><a @click="tabSwitch2" href="#">英単語</a></li>
                <li :class="{'tab_active': num === 3 }" class="folder-name"><a @click="tabSwitch3" href="#">レシピ</a></li>
                </ul>
            </nav>
        </div>  
            

        <div v-if="num === 1">
            <table class="table table-hover">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ノーマル</th>
                        <th scope="col">
                            <router-link v-bind:to="{name: 'task.show'}">
                                <button class="btn btn-primary">スタート</button>
                            </router-link>
                        </th>
                        <th scope="col">ランダム</th>
                        <th scope="col">
                            <router-link v-bind:to="{name: 'task.rshow'}">
                                <button class="btn btn-primary">スタート</button>
                            </router-link></th>
                    </tr>
                </thead>
            </table>

            <router-link v-bind:to="{name: 'task.create'}">
                <button class="btn btn-outline-primary btn_pos">問題追加</button>
            </router-link>

            <table class="table table-hover">
                
                <thead class="thead-light">
                    <tr>
                        <th scope="col">問題</th>
                        <th scope="col">答え</th>
                        <th scope="col">編集</th>
                        <th scope="col">削除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                        <td>{{ task.question }}</td>
                        <td>{{ task.answer }}</td>
                        <td>
                            <router-link v-bind:to="{name: 'task.edit', params: {taskId: task.id.toString() }}">
                                <button class="btn btn-success">編集</button>
                            </router-link>
                        </td>
                        <td>
                            <button class="btn btn-danger" v-on:click="deleteTask(task.id)">削除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="num === 2">
            <table class="table table-hover">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ノーマル</th>
                        <th scope="col">
                            <router-link v-bind:to="{name: 'task.show'}">
                                <button class="btn btn-primary">スタート</button>
                            </router-link>
                        </th>
                        <th scope="col">ランダム</th>
                        <th scope="col">
                            <router-link v-bind:to="{name: 'task.rshow'}">
                                <button class="btn btn-primary">スタート</button>
                            </router-link></th>
                    </tr>
                </thead>
            </table>

            <router-link v-bind:to="{name: 'task.create'}">
                <button class="btn btn-outline-primary btn_pos">問題追加</button>
            </router-link>

            <table class="table table-hover">
                
                <thead class="thead-light">
                    <tr>
                        <th scope="col">問題</th>
                        <th scope="col">答え</th>
                        <th scope="col">編集</th>
                        <th scope="col">削除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                        <td>{{ task.question }}</td>
                        <td>{{ task.answer }}</td>
                        <td>
                            <router-link v-bind:to="{name: 'task.edit', params: {taskId: task.id.toString() }}">
                                <button class="btn btn-success">編集</button>
                            </router-link>
                        </td>
                        <td>
                            <button class="btn btn-danger" v-on:click="deleteTask(task.id)">削除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div  v-if="num === 3">
            <table class="table table-hover">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">ノーマル</th>
                        <th scope="col">
                            <router-link v-bind:to="{name: 'task.show'}">
                                <button class="btn btn-primary">スタート</button>
                            </router-link>
                        </th>
                        <th scope="col">ランダム</th>
                        <th scope="col">
                            <router-link v-bind:to="{name: 'task.rshow'}">
                                <button class="btn btn-primary">スタート</button>
                            </router-link></th>
                    </tr>
                </thead>
            </table>

            <router-link v-bind:to="{name: 'task.create'}">
                <button class="btn btn-outline-primary btn_pos">問題追加</button>
            </router-link>

            <table class="table table-hover">
                
                <thead class="thead-light">
                    <tr>
                        <th scope="col">問題</th>
                        <th scope="col">答え</th>
                        <th scope="col">編集</th>
                        <th scope="col">削除</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                        <td>{{ task.question }}</td>
                        <td>{{ task.answer }}</td>
                        <td>
                            <router-link v-bind:to="{name: 'task.edit', params: {taskId: task.id.toString() }}">
                                <button class="btn btn-success">編集</button>
                            </router-link>
                        </td>
                        <td>
                            <button class="btn btn-danger" v-on:click="deleteTask(task.id)">削除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import FolderComponents from './FolderComponent.vue';
    export default {
  components: { FolderComponents },
       data: function () {
           return {
               tasks: [],
               num: 1
           }
       },
       methods: {
           getTasks() {
               axios.get('/api/todo')
                   .then((res) => {
                       this.tasks = res.data;
                   });
           },
            deleteTask(id) {
                axios.delete('/api/tasks/' + id)
                    .then((res) => {
                        this.getTasks();
                    });
            },
            tabSwitch1() {
                return this.num = 1
            },
            tabSwitch2() {
                return this.num = 2
            },
            tabSwitch3() {
                return this.num = 3
            }
       },
       mounted() {
           this.getTasks();
       }
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
    font-size: 20px;
}

.tab_active {
    background: rgba(51, 137, 187, 0.438);
}

.btn_pos {
    margin-left: 280px;
}
</style>