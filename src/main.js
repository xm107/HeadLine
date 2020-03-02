import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'// 引入样式
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import '@/styles/index.less'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI)// 全局注册--->所有位置都可以使用组件
// vue.use实际上会调用ElementUI对象里的一个方法instal方法，并且传入当前的vue对象
// 配置axios的请求头地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios// 将axios赋值给Vue对象的原型属性
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
