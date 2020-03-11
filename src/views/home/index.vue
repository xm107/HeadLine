<template>
<!-- 外层大容器 小容器放内-->
<el-container>
    <!-- 根据折叠状态变成64 -->
    <!-- style 对象语法 -->
    <el-aside  :style="{width : collapse ? '64px' : '260px'}" style=" transition:all 0.5s;background:#205d79" >
         <!-- 左侧导航区 -->
               <!-- 直接把父组件的状态传给 子组件 -->
       <layout-aside :collapse="collapse"></layout-aside>
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
import eventBus from '@/utils/eventBus'
export default {
  data () {
    return {
      collapse: false// 默认展开
    }
  },
  created () {
    //   切换了折叠的状态
    eventBus.$on('changeCollapse', () => {
      // 此时表示 折叠状态一定变了 --->与当前状态相反
      this.collapse = !this.collapse// 只要取反 就和 头部的组件状态对上
    })
  }
}
</script>

<style>

</style>
