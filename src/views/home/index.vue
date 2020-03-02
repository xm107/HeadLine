<template>
<!-- 外层大容器 小容器放内-->
<el-container>
    <!-- 左侧导航区 -->
    <el-aside>左</el-aside>
    <!-- 右侧外容器 -->
    <el-container>
        <!-- 右上 -->
        <el-header>右上</el-header>
        <!-- 主要区域 -->
        <el-mainer>
            <!-- 二级路由容器 -->
            主要区域
            <router-view></router-view>
        </el-mainer>
    </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
