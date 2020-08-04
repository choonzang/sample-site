import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import i18n from './i18n'

Vue.config.productionTip = false

//new Vue({
//render: h => h(App),
//}).$mount('#app')

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})