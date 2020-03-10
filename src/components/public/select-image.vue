<template>
<!-- 页签形式来显示 -->
<el-tabs v-model="activeName">
    <!-- name表示当前标签页的标识，不可以重复 -->
    <el-tab-pane label="素材库" name="material">
        <!-- 查询全部素材 -->
        <!-- v-for循环遍历list数据 -->
        <div class="select-image-list">
            <!-- 循环 -->
            <el-card v-for="item in list" :key="item.id" class="img-card">
                <!-- 显示素材图片 -->
                <img @click="clickImg(item.url)" :src="item.url" alt="">
            </el-card>
        </div>
        <!-- 分页 -->
        <el-row type="flex" justify="center" style="height:80px" align="middle">
            <!-- 分页组件 -->
            <el-pagination background layout="prev,pager,next"
            :total="page.total"
            :current-page="page.currentPage"
            :page-size="page.pageSize"
            @current-change="changePage"
            ></el-pagination>
        </el-row>
    </el-tab-pane>
    <el-tab-pane label="上传素材" name="upload">上传素材</el-tab-pane>
</el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'material', // 当前激活的变量  默认激活素材库
      list: [], // 素材裂变数据
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0// 总条数
      }
    }
  },
  methods: {
    /* 获取所有素材的方法 */
    getAllImage () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: false, // 查询权不素材 所以给false
          page: this.page.currentPage, // 当前页码
          per_page: this.page.pageSize// 每页条数
        }
      }).then(result => {
        this.list = result.data.results// 获取全部素材的数据
        this.page.total = result.data.total_count // 将总数赋值给页码变量
      })
    },

    // 改变页码
    changePage (newPage) {
      this.page.currentPage = newPage// 赋值新页码
      this.getAllImage()
    },
    // 点击图片触发
    clickImg (url) {
      // 需要将url参数传递给上层组件
    //   在脚手架中 自定义事件名 可以大小写通用 不用纯小写
      this.$emit('selectOneImg', url)
    }
  },
  created () {
    this.getAllImage()// 获取所有数据
  }
}
</script>

<style lang='less' scoped>
.select-image-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .img-card{
        width: 150px;
        height: 150px;
        margin: 20px 0;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
