import VueRouter from 'vue-router';
import TaskListComponent from "./components/TaskListComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskRandomShowComponent from "./components/TaskRandomShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";

import NfrashCardsComponent from "./components/NfrashCardsComponent";
import NswitchComponent from "./components/NswitchComponent";

import RfrashCardsComponent from "./components/RfrashCardsComponent";
import RswitchComponent from "./components/RswitchComponent";



import Vue from 'vue';


require('./bootstrap');

window.Vue = require('vue');



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('nfrashcards-component',NfrashCardsComponent);
Vue.component('nswitch-component',NswitchComponent);

Vue.component('rfrashcards-component',RfrashCardsComponent);
Vue.component('rswitch-component',RswitchComponent);


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
            path: '/todo/create',
            name: 'task.create',
            component: TaskCreateComponent,
            props: true
        },

        {
            path: '/todo/show',
            name: 'task.show',
            component: TaskShowComponent,
            props: true
        },

        {
            path: '/todo/rshow',
            name: 'task.rshow',
            component: TaskRandomShowComponent,
            props: true
        },

        {
            path: '/todo/:taskId/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            props: true
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
