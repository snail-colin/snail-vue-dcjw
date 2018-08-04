import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index'
import my from '@/page/my/my'
import tmlx from '@/page/tmlx/tmlx'
import sxlx from '@/page/tmlx/sxlx'
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
    },
    {
      path: '/tmlx',
      name: 'tmlx',
      component: tmlx
    },
    {
      path: '/sxlx',
      name: 'sxlx',
      component: sxlx
    }
  ]
})
