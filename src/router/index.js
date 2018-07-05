import Vue from 'vue'
import Router from 'vue-router'
import Navgitor from '@/page/Navgitor'
import page1 from '@/page/page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Navgitor',
      component: Navgitor
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    }
  ]
})
