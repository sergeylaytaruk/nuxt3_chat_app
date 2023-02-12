import Vue from 'vue'
import Router from 'vue-router'

import Login from '~/components/Login'
import Chat from '~/components/Chat'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Login
            },
            {
                path: '/login',
                component: Login
            },
            {
                path: '/chat',
                component: Chat
            }
        ]
    })
}
