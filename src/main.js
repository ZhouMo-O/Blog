import Vue from 'vue';
import App from './App.vue';
import animated from 'animate.css'; // npm install animate.css --save安装，再引入
import mavonEditor from 'mavon-editor' //编辑器
import 'mavon-editor/dist/css/index.css'
import router from './router/router' //路由
import './plugins/element.js'
import http from './http'
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import {
  VueEditor
} from "vue2-editor";

//mavon markdown
Vue.use(mavonEditor)
Vue.use(animated)
Vue.use(VueEditor)
Vue.config.productionTip = false
Vue.prototype.axios = http

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')