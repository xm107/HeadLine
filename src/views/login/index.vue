<template>
  <div class="login">
    <!-- 放置一个el-card组件 -->
    <el-card class='login-card'>
      <!-- 放置标题图片 -->
      <div class='title'>
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 放置表单 -->
      <el-form>
        <!-- 表单域 里面   放置 input/select/checkbox 相当于一行-->
        <el-form-item>
           <el-input class="input" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 表单域 -->
        <el-form-item>
          <el-input class="input" style="width:65%" placeholder="验证码"></el-input>
            <el-button style="float:right " plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- 复选框 -->
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang= "less" scoped>
/* 加 scoped属性，当前组件的样式只对自己页面的html起作用 */
/* 如果改写style样式，需要在style标签中 lang="less" */
.login {
  background-image: url("../../assets/img/login_bg1.jpg");
  height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card {
      border:0px;
      box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.2);  /* 阴影效果 */
      background: transparent;/* 透明效果 */
      /* filter:blur(3px);毛玻璃效果 */
      width: 440px;
      height: 350px;
      .title {
        text-align: center;
        margin-bottom: 30px;
        img {
          height: 45px;
        }
      }
    }
  }
</style>
