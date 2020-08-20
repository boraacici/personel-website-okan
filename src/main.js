import Vue from 'vue'
import App from './App.vue'
import router from './router'

import gsap from "gsap";

global.gsap = gsap;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
