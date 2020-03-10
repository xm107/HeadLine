<template>
  <div class="cover-image">
    <!-- v-for循环 -->
    <div @click="openDialog(index)" v-for="(item,index) in list" :key="index" class="cover-image-item">
      <!-- 图片地址应该等于item -->
      <!-- 一开始的item是一个空字符串（应该点击之后才有） 此时应该根据item是否有值 来决定显示默认图片还是item-->
      <!-- item没有值就显示默认图片 -->
      <!-- img 如果不是固定地址的话 图片应该转化成变量 -->
      <img :src="item ?item:defaultImg" alt="">
    </div>
    <!-- 采用element-ui组件的弹层组件 -->
    <!-- @事件="简单逻辑" -->
    <el-dialog :visible="dialogVisible" @close="dialogVisible=false">
      <!-- 会再次封装一个组件  选择图片的组件-->
      <!-- 监听说的自定义 就在谁的标签上写v-on -->
      <select-image @selectOneImg="receiveImg">
      </select-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'], // 接受传递的参数
  data () {
    return {
      defaultImg: require('../../assets/img/pic_bg.png'), // 默认图片需要先转化成变量
      dialogVisible: false, // 控制弹层的显示或者隐藏
      selectIndex: -1 // 用来记录当前点击了哪个索引
    }
  },
  methods: {
    // 点击图片时弹出一个层
    openDialog (index) {
      this.dialogVisible = true // 显示弹层
      this.selectIndex = index // 记录点击了哪个索引
    },
    // 接收传递的图片
    receiveImg (url) {
      // 拿到地址
      // props数据 不嗯呢该直接修改 只能读取
      // 再次传递给父组件
      // 二次传递的时候 需要把之前记录的要更改的索引 传出去
      this.$emit('selectTwoImg', url, this.selectIndex) // 二次传递给父组件
      this.dialogVisible = false // 关闭弹层
    }
  }
}
</script>

<style lang='less' scoped>
.cover-image{
  display:flex;
  margin: 20px 100px;
  .cover-image-item{
    border: 1px solid #cccccc;
    width: 250px;
    height:250px;
    padding: 20px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
