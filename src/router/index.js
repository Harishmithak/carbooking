import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import( '../views/login/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    
    component: () => import( '../views/signup/SignupView.vue')
  },
  {
    path: '/ride',
    name: 'ride',
    component: () => import( '../views/ride/RideView.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        next();
      } else {
        next('/login');
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
