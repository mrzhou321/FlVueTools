import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../demos/Home')
  },
  {
    path: '/lf_table',
    name: 'table',
    component: () => import('../demos/TableDemo')
  }
]
export default new Router({
  routes
})
