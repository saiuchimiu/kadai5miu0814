import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// ルーターは中身のコンポーネントの差し替え

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: () => import(/* webpackChunkName: "Todo" */ '../views/DogView.vue')
  },
  {
    path: '/favorites', 
    name: 'favorite-page',
    component: () => import(/* webpackChunkName: "favorite" */'../views/FavoriteView.vue')
  },
  {
    path: '/Update', 
    name: 'Update-page',
    component: () => import(/* webpackChunkName: "Update" */'../views/UpdateView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
