import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/About.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/:name',
    //redirect: '/:name',
    name: 'QRCode Generator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
