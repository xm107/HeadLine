<template>
<!-- 二级路由的默认组件 -->
<div class="second-home">
<!-- 幻灯片 -->
<el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
         <img :src="item" alt="">
      </el-carousel-item>
</el-carousel>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%85%AC%E4%B8%BB%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=2168106561,3833927184&os=2592627906,858997360&simid=4079589709,721040456&pn=5&rn=1&di=76700&ln=910&fr=&fmq=1583259736008_R&fm=rs4&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=11&spn=0&pi=0&gsm=0&oriquery=%E5%85%AC%E4%B8%BB&objurl=http%3A%2F%2Fdingyue.ws.126.net%2FimuDAn15wNQckYplBEU2obV0NqWp68zIuQqb8omaTIG2R1581031396199compressflag.jpeg&rpstart=0&rpnum=0&adpicid=0&force=undefined',
        '../../assets/img/xn2.jpg',
        '../../assets/img/xn3.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.second-home{
    /* calc 在css中计算数值 用法 calc(四则运算)  变量之间运算符之间要有空格*/
    height: calc(100vh - 60px);
    background-size: cover;
    background-image: url("../../assets/img/1234.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
