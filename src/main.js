import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "@/routes";

Vue.config.productionTip = false

require('@/assets/main.scss');

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
