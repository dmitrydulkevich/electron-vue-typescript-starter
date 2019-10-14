// Make sure to register before importing any components
// https://github.com/vuejs/vue-class-component#adding-custom-hooks
import './register-hooks';

// polyfills
import '@babel/polyfill';
import 'mutationobserver-shim';

import Vue from 'vue';
import app from '@/components/app.vue';

// plugins
import '@/plugins/bootstrap-vue';

import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount('#app');
