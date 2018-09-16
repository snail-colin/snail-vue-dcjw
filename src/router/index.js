import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index/index'
import my from '@/page/my/my'
import tmlx from '@/page/tmlx/tmlx'
import sxlx from '@/page/tmlx/sxlx'
import learnCar from '@/page/learn/learn-car'
import examHome from '@/page/exam/exam-home'
import exam from '@/page/exam/exam';
import examResult from '@/page/exam/exam-result';
import examBaHome from '@/page/exam-ba/exam-ba-home'
import examBa from '@/page/exam-ba/exam-ba';
import examBaResult from '@/page/exam-ba/exam-ba-result';

Vue.use(Router);
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
      // path: '/sxlx/:recordIndex',
      path: '/sxlx',
      name: 'sxlx',
      component: sxlx,
      props:true,
    },
    {
      path: '/learn-car',
      name: 'learn-car',
      component: learnCar
    },
    {
      path: '/exam-home',
      name: 'exam-home',
      component: examHome
    },
    {
      path: '/exam',
      name: 'exam',
      component: exam
    },
    {
      path: '/exam-result',
      name: 'exam-result',
      component: examResult
    },
    {
      path: '/exam-ba-home',
      name: 'exam-ba-home',
      component: examBaHome
    },
    {
      path: '/exam-ba',
      name: 'exam-ba',
      component: examBa
    },
    {
    path: '/exam-ba-result',
      name: 'exam-ba-result',
      component: examBaResult
  },
  ]
})
