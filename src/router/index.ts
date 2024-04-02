import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home/index.vue'
import Chat from '../pages/chat/index.vue'
import Search from '../pages/search/index.vue'
import Settings from '../pages/settings/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/chat', component: Chat },
  { path: '/search', component: Search },
  { path: '/settings', component: Settings }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { routes, router }
