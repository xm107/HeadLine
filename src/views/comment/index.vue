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
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [

      ]
    }
  },
  methods: {
    // 获取评论数据
    getComment () {
      this.$axios({
        url: '/articles', // 请求地址
        params: {
          response_type: 'comment'// 此参数用来控制获取数据类型
        }
        // query参数应该在哪传axios
        // params 传get参数也就是query参数
        // data 传body参数也就是请求体参数
      }).then(result => {
        // 将返回中的数组给list
        this.list = result.data.results
      })
    },
    formatterBool (row, column, cellValue, index) {
      // row 代表当前的一行数据
      // column 代表当前的列信息
      // celValue 代表当前单元格的值
      // index 代表当前索引
      // 改函数需要返回一个值 用来显示
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
  // 在钩子函数中 直接获取数据
    this.getComment()
  }
}
</script>

<style>

</style>
