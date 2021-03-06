/* 使用vue.use的方式注册
Vue.use会调用对象的install方法第一个参数 是Vue对象
公共的注册js文件 全局注册
注册我们自己开发的所有的组件 */

import LayoutHeader from './home/layout-header'
import LayoutAside from './home/layout-aside'
import BreadCrumb from './common/bread-crumb'
import VueQuillEditor from 'vue-quill-editor'
import CoverImage from './public/cover-image'
import SlectImage from './public/select-image'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install: function (Vue) {
    // 注册全局组件Vue   一旦注册全局任意位置可以使用
    Vue.component('layout-header', LayoutHeader)// 注册头部组件
    Vue.component('layout-aside', LayoutAside)// 注册左部组件
    Vue.component('bread-crumb', BreadCrumb)// 注册面包屑组件
    // 注册 富文本编辑器
    Vue.use(VueQuillEditor)
    Vue.component('cover-image', CoverImage)// 注册封面组件
    Vue.component('select-image', SlectImage)// 注册选择图片组件
  }
}
