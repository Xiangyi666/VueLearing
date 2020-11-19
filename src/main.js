// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueLazyload from 'vue-lazyload'
// 全局引入Toast
import './components/Model/model.css'
import Toast from './components/Model/index'

// eslint-disable-next-line no-unused-vars
// import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/fonts/glyphicons-halflings-regular.eot'
import 'bootstrap/fonts/glyphicons-halflings-regular.svg'
import 'bootstrap/fonts/glyphicons-halflings-regular.ttf'
import 'bootstrap/fonts/glyphicons-halflings-regular.woff'
import 'bootstrap/fonts/glyphicons-halflings-regular.woff2'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(Toast)

Vue.use(VueLazyload)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
