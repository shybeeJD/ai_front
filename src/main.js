// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/Layout/Index.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { VueTypedJs } from 'vue-typed-js'

require('./mock/mock.js')
require('swiper/dist/css/swiper.css')

Vue.use(VueTypedJs)
Vue.use(VueAwesomeSwiper)
Vue.use(Element)
Vue.config.productionTip = false
//
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
