import Vue from 'vue'
import Router from 'vue-router'
import Heard from '@/components/heard/Heard'
import Navigation from '@/components/aside/Navigation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components:{
          default:Heard,
          'left':Navigation
      }  
   }
    ]
})
