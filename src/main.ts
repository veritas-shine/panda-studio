import 'reflect-metadata'
import { createApp } from 'vue'
import './styles.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import { router } from './router'
import './services'
import { i18n } from './locales'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(i18n)
app.mount('#app')
