import { quasar } from '@quasar/vite-plugin'
import {resolve} from "path";

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  modules: [
    '@pinia/nuxt',
  ],
  nitro: {
    // experimental: {
    // Use nitropack v1 behavior
    // legacyExternals: true,
    // },
  },
  build: {
    transpile: ['quasar', '@happy-dom/global-registrator', '@pinia/nuxt'],
  },
  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/fontawesome-v6/fontawesome-v6.css',
    '~/assets/styles/quasar.sass',
  ],
  hooks: {
    'pages:extend' (pages) {
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
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
    ssr: {
      external: ['happy-dom'],
    },
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar-variables.sass',
      }),
    ],
  },
})
