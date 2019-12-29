// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import util from './lib/util'
import vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.prototype.util = util;
Vue.use(vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
