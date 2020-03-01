import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios';
axios.defaults.baseURL = process.env.NODE_ENV==='production'?'http://112.124.6.208:8080':'/api'
// axios.defaults.baseURL = '/api'

axios.defaults.withCredentials=true;

import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import qs from 'qs'
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'

const errorHandler = (error, vm)=>{
  window.console.error('抛出全局异常');
  window.console.error(vm);
  window.console.error(error);
  
}

Vue.config.errorHandler = errorHandler;


Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
