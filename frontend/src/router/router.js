import { createWebHashHistory, createRouter } from 'vue-router'


// Pages
import LoginPage from '../pages//LoginPage.vue'

const routes = [
  { path: '/', component: LoginPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router