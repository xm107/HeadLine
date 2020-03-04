<template>
<!-- 外层大容器 小容器放内-->
<el-container>
    <el-aside  width="260px">
         <!-- 左侧导航区 -->
        <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧外容器 -->
    <el-container>
        <el-header style="padding:0" >
        <!-- 顶部操作栏 -->
            <layout-header></layout-header>
        </el-header>
        <!-- 主要区域 -->
            <!-- 主要区域  el-main给加了20px 内边距-->
        <el-main style="padding:0">
            <!-- 二级路由容器 -->
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
