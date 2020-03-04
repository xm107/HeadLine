/* 封装请求工具request.js
对于axios的二次封装
配置拦截器及其他 */

import axios from 'axios'
import router from '@/router'// 路由实例对象
// 拦截器其他操作
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 配置axios的请求头地址

// 请求拦截器的开发
axios.interceptors.request.use(function (config) {
// 成功时执行 第一个参数会有一个config config 就是所有axios的请求信息
// 在第一个函数中 需要将配置进行返回 返回的配置会作为请求参数进行请求
// 在返回之前 就是我们同意注入token的最佳时间
  const token = localStorage.getItem('user-token')// 从缓存中取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config
}, function (error) {
  // 失败时  会有一个错误 直接reject错误即可
// 失败时执行第二个 axios 是一个支持promise 如果失败了 我们应该直接reject reject会直接进入到axios的catch中
  return Promise.reject(error)
})

// 响应拦截器的开发
axios.interceptors.response.use(function (response) {
  // 回调函数第一个参数 是响应体
  // 在拦截器中 需要将信息返回
  return response.data ? response.data : {}// 有的接口没有任何相应数据
}, function (error) {
// 失败时候执行
// error是错误对象 里面包含了错误的状态码 和响应信息
// 401状态码  标识号永和身份不对
// 401出现：表示 拿错钥匙/钥匙过期/钥匙名字不对/钥匙格式问题
// 导航校验 检验了token有没有 检查了钥匙是否存在
// 应该换一个新的钥匙
// 回登录页=> 重新登录换一把新的 重来
// 回登录页 应该把旧钥匙给清除
  if (error.response.status === 401) {
    localStorage.removeItem('user-token')// 删除钥匙
    router.push('/login')// 直接导入路由实例对象 使用跳转方式 和组件this.$router一样
    // 跳回登录页
  }
  //   错误处理
  return Promise.reject(error)
})
export default axios
