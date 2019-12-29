import Vue from 'vue'
import Router from 'vue-router'
import down from '../view/down.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/download.html/',
      name: 'down',
      component: down
    }
  ]
})
