<template>
<!-- el-card布局 -->
    <el-card>
        <!-- 面包屑 -->
        <bread-crumb slot="header">
        <!-- 具名插槽 template -->
        <template slot="title">
            素材管理
        </template>
        </bread-crumb>
        <!-- 放置一个上传组件 el-row可以布局-->
        <el-row type="flex" justify="end">
            <!-- 上传组件要求必须传action属性 不传就会报错 可以给空字符串 show-file-list 是否显示已上传文件列表 -->
            <el-upload :show-file-list="false" :http-request="uploadImg" action="">
                <el-button size="small" type="primary">上传素材</el-button>
                <!-- 插入一个内容 点击内容就会弹出上传文件框 -->
            </el-upload>
        </el-row>

        <!-- 放置标签页  v-model所绑定的值就是当前所激活的页签  切换tabs页签的时候 需要 进行事件的监听-->
        <el-tabs v-model="activeName" @tab-click = 'changeTab'>
            <!-- 放置标签lable表示标签显示的名称  -->
            <el-tab-pane label="全部素材" name="all">
                <!-- 全部收藏的数据 -->
                <div class="img-list" >
                    <!-- 采用v-for对list进行循环 -->
                    <el-card class="img-card" v-for="item in list" :key="item.id">
                        <!-- 放置图片 并且赋值 图片地址-->
                        <img :src="item.url" alt="">
                        <!-- 操作栏 可以flex布局 -->
                        <el-row class="operate" type="flex" align="middle" justify="space-around">
                            <i class="el-icon-star-on"></i>
                            <i class="el-icon-delete-solid"></i>
                        </el-row>
                    </el-card>
                </div>
            </el-tab-pane>
            <el-tab-pane label="收藏素材" name="collect">
                <!-- 收藏素材的数据 -->
                <div class="img-list">
                    <!-- 采用v-for对list数据进行循环 -->
                    <el-card class="img-card" v-for="item in list" :key="item.id">
                        <!-- 放置图片 并且赋值 图片地址 -->
                        <img :src="item.url" alt="">
                    </el-card>
                </div>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前激活收藏   默认选中全部收藏
      list: []// 全部素材的数据
    }
  },
  methods: {
    //   定义一个上传组件的方法
    uploadImg (params) {
      // params.file就是需要上传的图片文件
    //   接口参数类型要求是formData
      const data = new FormData()// 实例化一个formData对象
      data.append('image', params.file)// 加入文件参数
      //   开始发送上传请求
      this.$axios({
        url: '/user/images', // 请求地址
        method: 'post', // 上传或者新增一般都是post类型
        data// es6简写
      }).then(() => {
        //   如果成功了，我们应该重新获取数据
        this.getMaterial()
      }).catch(() => {
        //   请求失败
        this.$message.error('上传素材失败')
      })
    },
    getMaterial () {
      this.$axios({
        url: '/user/images', // 请求地址
        params: {
          collect: this.activeName === 'collect'// 根据当前的页签变活
        }, // get参数 jquery参数
        data: {}// data参数放的是body参数
      }).then(result => {
        // 将返回数据 赋值到data中
        this.list = result.data.results
      })
    },
    // 切换页签事件
    changeTab () {
    // 在切换事件中
    // 可以根据当前 active='collect' 获取收藏素材
      this.getMaterial()// 直接调用获取素材的方法
    }
  },
  created () {
    // 实例化过后 调用过去素材数据
    this.getMaterial()// 获取素材数据
  }

}
</script>

<style lang='less' scoped>
  .img-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .img-card {
          width: 220px;
          height: 240px;
          margin: 20px 40px;
          position: relative;
          img {
              width: 100%;
              height: 100%;
          }
          .operate {
              position: absolute;
              left:0;
              bottom:0;
              width: 100%;
              background: #f4f5f6;
              height: 30px;
              i  {
                  font-size:20px;
              }
          }
      }
  }
</style>
