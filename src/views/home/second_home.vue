<template>
<!-- 二级路由的默认组件 -->
<div class="second-home">
<!-- 幻灯片 -->
<el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
         <img class="img" :src="item" alt="">
      </el-carousel-item>
</el-carousel>
<!-- 放置图标组件 -->
<!-- ref -->
<!-- <div ref="myChart" class="echarts">

</div> -->
</div>
</template>

<script>
// import Echarts from 'echarts'
export default {
  // mounted () {
  //   // 进行echarts图表实例化
  //   this.myChart = Echarts.init(this.$refs.myChart)// 实例化 得到一个图表的实例化对象
  // },

  data () {
    return {
      list: [
        'http://02imgmini.eastday.com/mobile/20190116/20190116161051_55d790c0c9405b20d29792e3699fc560_5.jpeg',
        'http://img3.duitang.com/uploads/item/201604/24/20160424064636_rERS4.thumb.700_0.jpeg',
        'http://b-ssl.duitang.com/uploads/item/201810/15/20181015090209_qmrbq.jpeg',
        'http://b-ssl.duitang.com/uploads/item/201809/07/20180907225511_jptkf.thumb.400_0.jpeg'
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
    .img{
      height:300px;
    }
}
</style>
