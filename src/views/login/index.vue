<template>
  <div class="login">
    <!-- 放置一个el-card组件 -->
    <el-card class='login-card'>
      <!-- 放置标题图片 -->
      <div class='title'>
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 表单：登录模块 绑定model属性 绑定rules属性:验证规则 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" >
        <!-- 手机号 设置prop属性:绑定对应的变量-->
        <el-form-item prop="mobile">
           <el-input v-model="loginForm.mobile" class="input" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <el-input class="input" v-model="loginForm.code" style="width:65%" placeholder="验证码"></el-input>
            <el-button style="float:right " plain>发送验证码</el-button>
        </el-form-item>
          <!-- 复选框 -->
        <el-form-item prop="checked">
          <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
          <el-button @click="login" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单的数据
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false// 是否同意协议
      },
      // 定义表单的验证规则
      /* required:true--->改字段必填 null underfined和空字符串
        messages */
      loginRules: {
        // 手机号规则
        mobile: [{
          required: true,
          message: '您的手机号不能为空'
        }, {
          pattern: /^1[3-9]\d{9}$/, // 正则表达式
          message: '您的手机号格式不正确'
        }],
        // 验证码规则
        code: [{
          required: true,
          message: '您的验证码不能为空'
        }, {
          pattern: /^\d{6}$/, // 正则表达式
          message: '验证码应为6位数字'
        }],
        // 是否同意协议规则
        checked: [{
          /* 自定义校验语法:  { validator: function (rule, value, callback ) {}
            rule:当前的校验规则，value:当前的要校验的字段的值--->true:成功；反之失败
            callback回调函数，成功失败都要执行 callback(new Error("错误信息")
                  } */
          validator: function (rule, value, callback) {
            value ? callback() : callback(new Error('请阅读并同意用户隐私协议'))
          }
        }]
      }
    }
  },
  methods: {
    login () {
      // this.$refs.loginFrom 获取的就是el-from的对象实例
      /* 方法二：回调函数isOk,fields(没有校验通过的字段)
          this.$refs.loginFrom.validate(function(isOk){
            if(isOK){
              console.log("校验通过")
            }else{
              console.log("校验位通过")
            }
          }) */
      // 方式一：promise
      this.$refs.loginForm.validate().then(() => {
        // 如果成功通过 校验就会到达then
        // 通过校验后调用接口---->手机号信息是否正确
        this.$axios({
          url: '/authorizations', // 请求地址
          // params: {}, // 指的是url参数 参数会拼接到url地址上面  常常说的 get参数
          data: this.loginForm,
          // data: { ...this.loginForm, hecked: null }, // body请求体参数  常用于post/put/patch
          method: 'post'// 请求类型put/get/delete/post/patch 默认值get  可大写/小
        }).then(result => {
          // 成功之后打印结果
          // 把令牌放起来  把token存于本地缓存上
          window.localStorage.setItem('user-token', result.data.token)
          // 编程式导航
          this.$router.push('/home')// 登陆成功--->home页
        }).catch(() => {
          this.$message({
            message: '手机号或者验证码错误',
            type: 'warning'
          })
        })
      })
    }
  }
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
