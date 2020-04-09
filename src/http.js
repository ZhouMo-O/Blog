import Vue from "vue";
import axios from "axios";
//用npm引入的bt
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import qs from "qs";

//axios
Vue.prototype.axios = axios;
Vue.prototype.HOST = "/api/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; // 配置请求头
axios.defaults.baseURL = process.env.VUE_APP_URL || "/api"; // "http://localhost:3333/api";
//axios添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    if (localStorage.token) {
      config.headers.authorization = "Bearer " + localStorage.token;
    }
    return config;
  },
  function(error) {
    loadinginstace.close();
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res; //正常数据就返回
  },
  (err) => {
    if (err.response.data.message) {
      Vue.prototype.$message({
        //定义全局变量消息message，只要有err信息，那么就会触发这个message方法，就会给提示报错信息
        type: "error", //err风格
        message: err.response.data.message, //展示约定好的数据
      });
    }
    if (err.response.status === 401) {
      console.log("unknow user please login!");
    }
    return Promise.reject(err); //否则的话就正常的返回一个promise
  }
);

//axios添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default axios;
