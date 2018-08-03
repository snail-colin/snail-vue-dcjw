import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index'
import my from '@/page/my/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
