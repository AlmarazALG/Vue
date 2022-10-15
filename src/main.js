import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from './router/index'

import Axios from 'axios';

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.prototype.$http=Axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
