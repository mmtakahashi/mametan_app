import VueRouter from 'vue-router';
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";


require('./bootstrap');

window.Vue = require('vue');



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/todo',
            name: 'task.list',
            component: TaskListComponent
        },

        {
            path: '/todo/:todoId',
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },

        {
            path: '/todo/edit',
            name: 'task.edit',
            component: TaskEditComponent
        },
    ]
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
