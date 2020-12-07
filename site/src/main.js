import Vue from 'vue';
import VueRouter from 'vue-router';
import i18n from './plugins/i18n';

import App from './App.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app');
