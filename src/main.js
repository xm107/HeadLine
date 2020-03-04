import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/permission'// 引入权限模块
import ElementUI from 'element-ui'// 引入模块
import axios from '@/utils/request'// 引入封装的request.js
import Components from '@/components'// 引入自己开发的所有的组件
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import '@/styles/index.less'
Vue.config.productionTip = false
Vue.use(Components)// 注册自定义开发组件
Vue.use(ElementUI)// 全局注册--->所有位置都可以使用组件
// vue.use实际上会调用ElementUI对象里的一个方法instal方法，并且传入当前的vue对象
Vue.prototype.$axios = axios// 将axios赋值给Vue对象的原型属性
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
