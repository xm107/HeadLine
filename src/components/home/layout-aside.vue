<template>
<!-- el-menu 导航菜单

el-menu-item 子菜单

el-submenu  折叠菜单
 -->
  <div class="layout-aside">
<!-- 头部图片 -->
<div class="title">
    <img src="../../assets/img/logo_admin.png" alt="">
</div>
<!-- 左侧导航菜单  开启路由模式  (完整写法):router="true"简写----》router-->
<!-- 需要给每一个菜单项配置  index属性 index属性在路由模式下回座位跳转路径 -->
<el-menu router background-color="#2C6C98" text-color="#053B62">
    <!-- 子菜单 没有子菜单用el-menu-item -->
    <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
    </el-menu-item>
    <!-- 有二级菜单 需要用el-submenu -->
    <el-submenu index="1">
        <!--  具名插槽title是一级菜单 -->
        <template slot="title">
            <i class='el-icon-s-grid'></i>
            <span>内容管理</span>
        </template>
            <!-- 匿名插槽是二级菜单 二级菜单还用el-menu-item -->
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/article">内容列表</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
        <template slot="title">
            <i class='el-icon-s-opportunity'></i>
            <span>成员管理</span>
        </template>
        <!-- 二级菜单项 还是使用el-menu-item -->
        <el-menu-item index="/home/picture">图文数据</el-menu-item>
        <el-menu-item index="/home/fansinfo">成员概况</el-menu-item>
        <el-menu-item index="/home/fansphoto">成员画像</el-menu-item>
        <el-menu-item index="/home/fanslist">成员列表</el-menu-item>
    </el-submenu>
    <el-menu-item  index="/home/account">
        <i class="el-icon-user-solid"></i>
        <span>账户信息</span>
    </el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-aside {
    background-color: rgb(32, 93, 121);
    height: 100vh;
    .title{
        text-align: center;
        padding: 10px 0;
        img {
            height: 40px;
        }
    }
    .el-menu {
          border-right: none;
      }
      i{
          color: rgb(64, 168, 233);
      }
}
</style>
