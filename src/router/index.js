import Vue from 'vue'
import Router from 'vue-router'
import Heard from '@/components/heard/Heard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Heard',
      component: Heard
    }
  ]
})
