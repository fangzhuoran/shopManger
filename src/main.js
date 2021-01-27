import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css' //导入全局样式
import './assets/fonts/iconfont.css' // 导入字体图标
//引入axios
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 默认基地址，荣耀的
axios.defaults.baseURL = 'http://192.168.88.36:8888/api/private/v1/'
//!请求在到达服务器之前，先会调用use中的这个回调函数来添加请求头信息
axios.interceptors.request.use((config) => {
  //为请求头对象，添加token验证的Authorization字段
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// !无效 token 的处理
axios.interceptors.response.use((res) => {
  if (res.data.meta.msg === '无效token' && res.data.meta.status === 400) {
    location.href = '/#/login'
  }
  return res
})
// 时间处理
Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')

  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
