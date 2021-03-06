import Vue from 'vue'

import App from './App.vue'
import css from './styles/main.scss'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
