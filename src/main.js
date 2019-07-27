import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import E from 'element-ui';
import './element-variables.scss'

Vue.use(E);
import EVue from './packages';

Vue.use(EVue);


import router from './router';
import store from './store';

Vue.use(Vuex);
Vue.config.productionTip = false;
let vm = new Vue({
  store,
  router,
  // Common,
  render: h => h(App),
}).$mount('#app');
window.vm = vm;