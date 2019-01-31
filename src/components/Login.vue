<template>
    <div class="login-wrapper">
      <!-- START Login Background Pic Wrapper-->
      <div class="bg-pic">
        <!-- START Background Pic-->
        <img style="opacity: 0.7;" src="../../static/images/6678.jpg"
             alt="" class="lazy">
        <!-- END Background Pic-->
        <!-- START Background Caption-->
        <div class="bg-caption pull-bottom sm-pull-bottom text-white p-l-20 m-b-20"
             style="width: 800px;margin-bottom: 3%">
          <h2 class="semi-bold text-white" style="letter-spacing: 3px;font-size: 39px;line-height: 65px">
            聚合离散数据 探寻智能价值</h2>
          <p class="">
            <br>
            版权所有© 2018-2019 吉林地震局 吉林大学
          </p>
        </div>
        <!-- END Background Caption-->
      </div>
      <!-- END Login Background Pic Wrapper-->
      <!-- START Login Right Container-->
      <div class="login-container bg-white">
        <div class="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40" style="margin-top: 25%">
          <p style="font-size: 27px;">东北地震与火山<br>大数据中心</p>
          <p class="p-t-35">请输入您的用户凭证</p>
          <!-- START Login Form -->
          <form id="loginForm" class="p-t-15" role="form" action="${ctx}/login" method="post">
            <!-- START Form Control-->
            <div class="form-group form-group-default">
              <label>用户名</label>
              <div class="controls">
                <!--<input type="text" id="username" name="username" value="${username}" placeholder="User Name"-->
                       <!--class="form-control" required>-->
                <el-input v-model="username" placeholder="User Name" clearable name="username" ></el-input>
              </div>
            </div>
            <!-- END Form Control-->
            <!-- START Form Control-->
            <div class="form-group form-group-default">
              <label>密码</label>
              <div class="controls">
                <!--<input type="password" id="password" name="password" class="form-control"-->
                       <!--placeholder="Credentials" required>-->
                <el-input v-model="password" placeholder="Credentials" clearable name="password"></el-input>
              </div>
            </div>
            <!-- START Form Control-->
            <div class="row">
              <div class="col-md-6 no-padding sm-p-l-10">
                <div class="checkbox ">
                  <input type="checkbox" value="1" id="checkbox1">
                  <label for="checkbox1">记住我</label>
                </div>
              </div>
            </div>
            <!-- END Form Control-->

            <!--<input type="submit" class="submitButton btn btn-primary btn-cons m-t-10" value="登录" style="" @click="login" >-->
            <el-button class="submitButton btn btn-primary btn-cons m-t-10" @click="login">登录</el-button>
          </form>


          <!--END Login Form-->
          <div class="pull-bottom sm-pull-bottom">
            <div class="m-b-30 p-r-80 sm-m-t-20 sm-p-r-15 sm-p-b-20 clearfix">
              <div class="col-sm-12 no-padding m-t-10">
                <p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END Login Right Container-->
    </div>
</template>

<script>

    export default {
        name: "Login",
      data(){
          return{
            username:"",
            password:"",
          }
      },
      methods:{
        //  登录请求
        login(){
          if(this.username == "" && this.password == ""){
            this.$message.error("请填写用户名和密码！");
            return;
          }
          // this.$axios.post('/login',{
          //   username:this.username,
          //   password:this.password
          // })
          //   .then((response)=>{
          //     console.log("请求成功！");
          //   }).catch((response)=>{
          //     console.log(error);
          // });
          this.$router.push('/dashboard');
        }
      },
      mounted(){

      },
      created() {
          $(document).ready(function(){
            if(window.self != window.top){
              parent.window.location.repalce(window.location.href);
            }
          })
      },
    }
</script>

<style scoped>
  .form-group-default .form-control {
    height: 35px;
  }

  .form-control {
    font-size: 17px;
  }

  .submitButton {
    background-color: #3c81bc;
    border-color: #246781;
  }

  .submitButton:hover {
    background-color: #256194;
    border-color: #3286a7;
  }
  .login-wrapper .bg-pic > img{
    width: 80%;
  }
</style>
