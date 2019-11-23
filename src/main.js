import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios';
axios.defaults.baseURL = 'http://112.124.6.208:8080'
axios.defaults.withCredentials=true;

import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import qs from 'qs'
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'

Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
