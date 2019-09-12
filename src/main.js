import Vue from 'vue';
import App from './App.vue';
import animated from 'animate.css'; // npm install animate.css --save安装，再引入
import mavonEditor from 'mavon-editor' //编辑器
import 'mavon-editor/dist/css/index.css'
import router from './router/router' //路由
import './plugins/element.js'


//mavon markdown
Vue.use(mavonEditor)
Vue.use(animated)
Vue.config.productionTip = false

import http from './http'
Vue.prototype.axios = http

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')