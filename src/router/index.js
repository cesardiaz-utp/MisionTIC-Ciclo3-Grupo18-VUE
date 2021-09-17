import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/secure/user',
    name: "Admin User",
    component: () => import('../views/admin/User.vue') 
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue') // Lazy load
  },
  {
    path: '/catalog/new',
    name: 'New Product',
    component: () => import('../views/NewProduct.vue')
  },
  {
    path: '/client',
    name: 'Client',
    component: () => import('../views/Clients.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
