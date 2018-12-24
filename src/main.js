// import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from './axios/axios';
window.Vue.prototype.$http = axios;
new window.Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
