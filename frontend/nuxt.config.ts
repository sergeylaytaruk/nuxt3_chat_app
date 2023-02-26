// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
import { createCommonJS } from 'mlly';
//import routes from '~/router/routers';
const { __dirname } = createCommonJS(import.meta.url);

export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'], //'@nuxtjs/router' '~/modules/localeRoutes' , '~/modules/addRoutes'
    /*imports: {
        dirs: ['stores'],
    },*/
    /*modules: [
        '@pinia/nuxt',
        {
            autoImports: ['defineStore', 'acceptHMRUpdate'],
        }
    ],*/
    /*io: {
        sockets: [{
            name: 'main',
            //url: 'http://127.0.0.1:3001'
            url: 'http://localhost:3000'
        }]
    },*/
    hooks: {
        'pages:extend' (pages) {
            //console.log("routes=", routes);
            pages.push({
                name: 'login-index',
                path: '/',
                file: resolve(__dirname, './pages/index.vue')
            })
            pages.push({
                name: 'login',
                path: '/login',
                file: resolve(__dirname, './pages/index.vue')
            })
            pages.push({
                name: 'chat',
                path: '/chat',
                file: resolve(__dirname, './components/Chat.vue')
            })
        }
    },
    modules: [
        '@pinia/nuxt',
        //'@deepsource/nuxt-websocket',
        //'~/modules/ws',
        //'nuxt-socket-io',
        //'nuxt-typed-router'
        //'~/modules/pages',
    ],
    /*websocket: {
        url: 'ws://127.0.0.1:3001',
        reconnectInterval: 1000
    }*/
    /*hooks: {
        'pages:extend'(pages) {
            pages.push({
                name: 'login',
                path: '/login',
                file: resolve(__dirname, '/components/Login.vue'),
            }),
            pages.push({
                name: 'start',
                path: '/',
                file: resolve(__dirname, '/components/Login.vue'),
            })
        }
    }*/
});
