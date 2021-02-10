import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Application UI
  // Elements
  {
    path : '/elements/avatars',
    name : 'Avatars',
    component : () => import(/* webpackChunkName : "Avatars */ '@/views/Elements/Avatars.vue')
  },
  {
    path : '/elements/dropdowns',
    name : 'Dropdowns',
    component : () => import(/* webpackChunkName : "Dropdowns */ '@/views/Elements/Dropdowns.vue')
  },
  {
    path : '/elements/badges',
    name : 'Badges',
    component : () => import(/* webpackChunkName : "Badges */ '@/views/Elements/Badges.vue')
  },
  {
    path : '/elements/buttons',
    name : 'Buttons',
    component : () => import(/* webpackChunkName : "Buttons */ '@/views/Elements/Buttons.vue')
  },
  // Overlays
  {
    path : '/overlays/modals',
    name : 'Modals',
    component : () => import(/* webpackChunkName : Modals */ '@/views/Overlays/Modals.vue')
  },
  {
    path : '/overlays/notification',
    name : 'Notifications',
    component : () => import(/* webpackChunkName : Notifications */ '@/views/Overlays/Notifications.vue')
  },
  {
    path : '/overlays/slide-overs',
    name : 'slideOvers',
    component : () => import(/* webpackChunkName : Notifications */ '@/views/Overlays/SlideOvers.vue')
  },
  // Navigation
  {
    path : '/navigation/navbars',
    name : 'Navbars',
    component : () => import(/* webpackChunkName : Navbars */ '@/views/Navigation/Navbars.vue')
  },
  {
    path : '/navigation/pagination',
    name : 'Pagination',
    component : () => import(/* webpackChunkName : Pagination */ '@/views/Navigation/Pagination.vue')
  },
  {
    path : '/navigation/tabs',
    name : 'Tabs',
    component : () => import(/* webpackChunkName : Tabs */ '@/views/Navigation/Tabs.vue')
  },
  // Wildcard for any other path
  {
    path : '*',
    redirect : {
      name : 'Home'
    }
  }
  // {
  //   path : '*',
  //   name : 'Catchall',
  //   component : Home
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
