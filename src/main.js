// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import '@/assets/icon/iconfont.css'
import 'vue2-animate/dist/vue2-animate.min.css';
import VueLazyload from 'vue-lazyload' // 懒加载

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '@/assets/error.jpg',
  loading: '@/assets/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false
Vue.use(Vant);
/* eslint-disable no-new */


var app = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
})

