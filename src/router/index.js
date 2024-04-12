import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Login },
        { path: '/login', component: Login },
        { path: '/home', component: Home },
    ]
});

export default router 

