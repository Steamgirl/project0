// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入swipe.js文件
import 'swiper/js/swiper.min'
//引入swiper.css文件
import 'swiper/css/swiper.min.css'

//引入动画库
import 'animate.css'
Vue.config.productionTip = false

//引入bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// // 引入less
// import less from "less"
// Vue.use(less)

// 引入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);


import ElememtUl from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElememtUl)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
