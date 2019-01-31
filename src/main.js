// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from "axios"
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import '../static/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import '../static/bootstrap-3.3.7-dist/js/bootstrap.min'
import Echarts from 'echarts'
import moment from 'moment'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = Echarts;
Vue.use(Echarts);
Vue.prototype.$moment = moment;


//全局修改axios 默认配置
// axios.defaults.baseURL = '/api';
//
// axios.defaults.headers.post['Content-Type'] = 'application/jsonp';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
