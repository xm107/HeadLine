<template>
<!-- element布局组件  el-row el-col -->
<el-row align="middle" type="flex" class="layout-header">
    <!-- 两列 -->
    <!-- 左侧 -->
    <el-col class="left" :span="12">
        <!-- 图标 -->
        <i class='el-icon-magic-stick'></i>
        <span>
           仙女集合地
       </span>
    </el-col>
    <!-- 右侧 -->
    <el-col class="right" :span="12">
        <!-- 再次放一个row属性 align设置垂直对齐方式 justify设置水平对齐放式-->
        <el-row type="flex" justify="end" align="middle">
            <img src="../../assets/img/xn1.jpg" alt="">
            <!-- 下拉菜单 command点击菜单触发事件回调 -->
            <el-dropdown trigger="click" @command="clickMenu">
                <!-- 显示内容 -->
                <span>迪士尼在逃公主</span>
                <!-- 下拉内容需要做具名插槽dropdown  el-dropdown-menu专门的下拉组件-->
                <el-dropdown-menu slot="dropdown">
                    <!-- 下拉选项 -->
                    <el-dropdown-item command="info">个人信息</el-dropdown-item>
                    <el-dropdown-item command="git">GIT地址</el-dropdown-item>
                    <el-dropdown-item command="lgout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-row>
    </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}// 用户个人信息
    }
  },
  methods: {
    clickMenu (command) {
      // 需要处理三种情况
      if (command === 'info') {
        // 点击了个人信息
      } else if (command === 'git') {
        // 如果点击了git地址就跳转到git仓库
        // 改变当前项目地址
        window.location.href = 'https://github.com/xm107'
      } else {
        // 退出系统 1. 删除token 2. 跳转回登录页
        window.localStorage.removeItem('user-token') // 删除localstorage中某个选项
        this.$router.push('/login') // 跳回登录页  编程式导航
      }
    }
  },
  created () {
    //   获取用户的个人信息
    this.$axios({
      url: '/user/profile' // 请求地址
    }).then(result => {
      // 如果加载成功了 我们要将数据赋值给 userInfo
      this.userInfo = result.data
    })
  }
}
</script>

<style lang="less" scoped>
.layout-header{
    height: 60px;
    background-image: url("../../assets/img/(1).png");
    background-repeat: no-repeat;
    background-size: 100% 130%;
    .left {
      margin: 0 20px;
        i{
            font-size: 20px;
        }
    }
    .right{
      margin: 0 30px;
        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 6px;
        }
    }
}
</style>
