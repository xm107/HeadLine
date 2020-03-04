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
      <el-table-column width="600px" prop="name" label="标题"></el-table-column>
      <el-table-column  label="评论状态"></el-table-column>
      <el-table-column label="总评论数"></el-table-column>
      <el-table-column label="粉丝评论数"></el-table-column>
      <el-table-column label="操作"></el-table-column>
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
  }
}
</script>

<style>

</style>
