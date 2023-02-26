import { resolve } from "path";
let routes = new Map();
routes.set('login-index', {
    name: 'login-index',
    path: '/',
    file: resolve(__dirname, './pages/index.vue')
});
routes.set('login', {
    name: 'login',
    path: '/login',
    file: resolve(__dirname, './pages/index.vue')
});
routes.set('chat', {
    name: 'chat',
    path: '/chat',
    file: resolve(__dirname, './components/Chat.vue')
});
export default routes;


/*
import type { RouterOptions } from "@nuxt/schema";


export default {
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('~/components/Login.vue'),
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('~/components/Login.vue'),
        },
        {
            name: 'chat',
            path: '/chat',
            component: () => import('~/components/Chat.vue'),
        },
    ],
};*/
