import Vue from 'vue';
import App from './App.vue';
import animated from 'animate.css'; // npm install animate.css --save安装，再引入
import axios from 'axios';
import qs from 'qs'
import mavonEditor from 'mavon-editor' //编辑器
import 'mavon-editor/dist/css/index.css'
import router from './router/router' //路由
import './plugins/element.js'


//mavon markdown
Vue.use(mavonEditor)

//axios
Vue.prototype.axios = axios;
Vue.prototype.HOST = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 配置请求头
axios.defaults.baseURL = process.env.VUE_APP_URL || '/api'
//axios添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'post') { // post请求时，处理数据
    config.data = qs.stringify({
      ...config.data //后台数据接收这块需要以表单形式提交数据，而axios中post默认的提交是json数据,所以这里选用qs模块来处理数据.
    })
  }
  return config;
}, function (error) {
  loadinginstace.close()
  return Promise.reject(error);
})

axios.interceptors.response.use(res => {
  return res //正常数据就返回
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$message({ //定义全局变量消息message，只要有err信息，那么就会触发这个message方法，就会给提示报错信息
      type: 'error', //err风格
      message: err.response.data.message //展示约定好的数据
    })
  }
  return Promise.reject(err) //否则的话就正常的返回一个promise
})


//axios添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});



Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')