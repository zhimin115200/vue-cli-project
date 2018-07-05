// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import directives from './common/directive/directive.js'
import filters from './common/filter/filter.js'
import store from './store/store.js'

Vue.use(directives)

for (var key in filters) {
  Vue.filter(key, filters[key])
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
