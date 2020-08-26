import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueObserveVisibility from "vue-observe-visibility";

import gsap from "gsap";

global.gsap = gsap;

Vue.config.productionTip = false;
Vue.use(VueObserveVisibility);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
