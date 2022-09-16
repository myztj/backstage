<template>
    <div class="box1">
        <div class="box">
            <h2>Login  Form</h2>
             <el-input
    placeholder="请输入账号"
    prefix-icon="el-icon-user-solid"
    v-model="from.username">
  </el-input>
  <el-input placeholder="请输入密码" v-model="from.password" show-password prefix-icon="el-icon-goods"></el-input>
  <el-button type="primary" @click="logins">Login</el-button>
  <p>Username:admin   Password:123456</p>
        </div>
    </div>
</template>

<script>
import {onlogin} from '../utlis/api'
export default {
    name:'login',
    data() {
        return {
            from:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        logins(){
          onlogin(this.from).then(res=>{
            console.log(res);
            if (res.code==20000) {
                this.$message.success('登录成功')
                localStorage.setItem('token',res.data.token)
                this.$router.push('/')
            }
        })
        }
    },
    created() {
        
    },
};
</script>

<style lang="scss" scoped>
.box1 {
  overflow: hidden;
  width: 100%;
  height: 95vh;
  background-color: #2d3a4b;
  color: #fff;
  .box {
    h2{
      text-align: center;
    }
    width: 500px;
    height: 300px;
    margin: 100px auto;
  }
}
::v-deep .el-input__inner{
    margin: 15px 0;
  background-color: #283443 !important;
}
.el-button{
    width: 100%;
    margin: 15px 0;
}
</style>

