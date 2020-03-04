/* 使用vue.use的方式注册
Vue.use会调用对象的install方法第一个参数 是Vue对象
公共的注册js文件 全局注册
注册我们自己开发的所有的组件 */

import LayoutHeader from './home/layout-header'
import LayoutAside from './home/layout-aside'
import BreadCrumb from './common/bread-crumb'
export default {
  install: function (Vue) {
    // 注册全局组件Vue   一旦注册全局任意位置可以使用
    Vue.component('layout-header', LayoutHeader)// 注册头部组件
    Vue.component('layout-aside', LayoutAside)// 注册左部组件
    Vue.component('bread-crumb', BreadCrumb)// 注册面包屑组件
  }
}
