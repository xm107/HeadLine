<template>
<!-- 使用elementUI面包屑组件  设置分隔符-->
    <el-breadcrumb separator=">">
        <!-- <el-breadcrumb-item>  相当于router-link标签 -->
        <el-breadcrumb-item to="/home">首页</el-breadcrumb-item>
        <!-- 第二个选项是动态的采用传值传进来props传值 slot插槽(采用)-->
        <el-breadcrumb-item>
            <!-- 内容是动态的 -->
            <!-- 定义一个具名插槽 -->
            <slot name="title"></slot>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
