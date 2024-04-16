import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Form from "../views/Form.vue";
import Response from "../views/Response.vue";
import Forbidden from "../views/Forbidden.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login },
        { path: '/forbidden', component: Forbidden },
        { path: '/', redirect: '/home', meta: {requiresAuth: true} },
        { path: '/home', component: Home, meta: {requiresAuth: true} },
        { path: '/forms/:slug', component: Form, meta: {requiresAuth: true} },
        { path: '/forms/:slug/responses', component: Response, meta: {requiresAuth: true} },
    ]
});

function isAuthenticated() {
    return !!localStorage.getItem('accessToken');
}

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated()) {
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router 

