import Vue from 'vue';
import App from './App.vue';
import animated from 'animate.css'; // npm install animate.css --save安装，再引入
import router from './router/router' //路由
import './plugins/element.js'
import http from './http'

import {
  VueEditor
} from "vue2-editor";

Vue.use(animated)
Vue.use(VueEditor)
Vue.config.productionTip = false
Vue.prototype.axios = http

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')