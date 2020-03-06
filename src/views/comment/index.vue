<template>
  <!-- el-card做主页面 -->
  <el-card>
      <!-- 放置面包屑组件 slot="header"表示面包屑作为具名插槽给card的header部分（还有一个body）-->
    <bread-crumb slot="header">
    <!-- slot="title"  表示评论管理给面包屑的插槽-->
        <template slot="title">
            评论管理
        </template>
    </bread-crumb>
    <!-- 表格组件 -->
    <el-table :data="list">
      <!-- 使用el-table-c0lumn作为列 -->
      <!-- prop表示显示的字段 -->
      <el-table-column width="600px" prop="title" label="标题"></el-table-column>
     <!-- 给el-table-column一个formatter属性  -->
      <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <!-- el-table-cloumn组件 在插槽中传出了row $index store column -->
        <!-- 插槽->作用域插槽->子组件中的数据通过插槽传出 slot-scope接接收 -->
        <template slot-scope="obj">
          <el-button type="text" size="small">修改</el-button>
          <!-- 文本内容要根据当前行里面的评论状态决定显示还是隐藏 -->
          <el-button @click="openOrClose(obj.row)" type="text"  size="small">{{obj.row.comment_status?'关闭评论':'打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 放置分页组件 -->
    <el-row style="height:80px" type="flex" align="middle" justify="center">
      <!--
        分页组件需要 动态的数据
        total 当前的总数
        current-page 当前的页码
        page-size 每条多少页
        监听 current-change 事件
       -->
       <el-pagination background layout="prev,pager,next"
         :current-page="page.currentPage"
         :total='page.total'
         :page-size="page.pageSize"
         @current-change='changePage'
         ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      // 分页参数单独放置一个对象 让数据更清晰
      page: {
        total: 0, // 默认总数是0
        currentPage: 1, // 默认的页码 是第一个页  决定了当前页码是第几页
        pageSize: 10// page-size的默认值是10
      },
      list: [

      ]
    }
  },
  methods: {
    // 页码改变事件 newPage 就是点击切换的最新页码
    changePage (newPage) {
      // newPage是最新的切换页码
      // 将最新的页码设置给当前的页码
      this.page.currentPage = newPage
      // 重新获取数据
      this.getComment()
    },
    // 获取评论数据
    getComment () {
      this.$axios({
        url: '/articles', // 请求地址
        // 接口 如果不传分页的数据 默认查第一页的数据
        params: {
          response_type: 'comment', // 此参数用来控制获取数据类型
          page: this.page.currentPage, // 查对应页码
          per_page: this.page.pageSize// 查十条
        }
        // query参数应该在哪传axios
        // params 传get参数也就是query参数
        // data 传body参数也就是请求体参数
      }).then(result => {
        // 将返回中的数组给list
        this.list = result.data.results
        // 在获取完数据后 将 总数赋值给total
        this.page.total = result.data.total_count// 将总数赋值
      })
    },
    formatterBool (row, column, cellValue, index) {
      // row 代表当前的一行数据
      // column 代表当前的列信息
      // celValue 代表当前单元格的值
      // index 代表当前索引
      // 改函数需要返回一个值 用来显示
      return cellValue ? '正常' : '关闭'
    },
    // 实现打开或者关闭的逻辑
    openOrClose (row) {
      const mess = row.comment_status ? '关闭' : '打开'
      // $confirm 也支持promise 点击确认后会进入到then点击取消进入到catch
      this.$confirm(`是否确认${mess}评论`, '提示').then(() => {
        // 调用打开或者关闭接口
        this.$axios({
          url: '/comments/status', // 请求地址
          method: 'put', // 请求类型
          // query
          params: {
            // 为什么评论会失败 就是因为 原来 给你传了 9152 你回传了 9200
            // 所以我们用大数字包 保证 9152不被转化 就可以使用原来的功能
            article_id: row.id.toString()// 要求参数的文章id 将BigNumber类型转化为字符串
          // 前端传字符串到后端 只要和原数字一致  后端会自动将字符串转成大数字
            // 只需要保证 id 和传过来的id一致就行
          },
          data: {
            // body参数
            allow_comment: !row.comment_status// 是打开还是关闭 此状态和评论状态相反
          }
        }).then(() => {
          // 成功    提示消息  获取信息
          this.$message.success(`${mess}评论成功`)
          this.getComment()// 调用重新拉取数据的方法
        }).catch(() => {
          this.$message.error(`${mess}评论失败`)
        })
      })
    }
  },
  created () {
  // 在钩子函数中 直接获取数据  获取第一页数据
    this.getComment()
  }
}
</script>

<style>

</style>
