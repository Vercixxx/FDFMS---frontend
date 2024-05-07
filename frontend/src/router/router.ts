import { createWebHashHistory, createRouter, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { ComputedRef, computed } from 'vue'

// Auth Guard
let isAuthenticated: ComputedRef<boolean> = computed(() => sessionStorage.getItem('token') !== null)

// Pages
import LoginPage from '../pages/LoginPage.vue'
import MainPage from '../pages/MainPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LoginPage,
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (isAuthenticated.value) {
        next('/dashboard')
      } else {
        next()
      }
    }

  },
  {
    path: '/dashboard',
    component: MainPage,
    beforeEnter: (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (isAuthenticated.value) {
        next()
      } else {
        next('/')
      }
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router