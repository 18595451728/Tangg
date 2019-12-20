// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import global from './components/Global.vue'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
// import token from './assets/js/base.js'
import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
import storage from 'good-storage'

Vue.config.productionTip = false
// Vue.prototype.$token=token;
Vue.prototype.$layer = layer(Vue)
Vue.prototype.$storage = storage
Vue.prototype.goBack = function (){
  this.$router.go(-1)
}
fastClick.attach(document.body)
axios.defaults.baseURL = '/api';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
