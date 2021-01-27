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
axios.defaults.baseURL = 'http://192.168.88.36:8888/api/private/v1/'
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
