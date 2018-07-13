// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import directives from './common/directive/directive.js'
import filters from './common/filter/filter.js'
import store from './store/store.js'
import {interceptors} from 'xk-restapi'
Vue.use(directives)

for (var key in filters) {
  Vue.filter(key, filters[key])
}

interceptors.request.options = function (options) {
  console.log(options)
  return options
}

interceptors.response.success = function (response) {
  console.log(response)
  return response
}

interceptors.response.error = function (error) {
  console.error(error)
  return error
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
