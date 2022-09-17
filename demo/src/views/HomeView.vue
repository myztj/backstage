<template>
  <div class="home">
   <el-container>
  <el-aside :width="isCollapse?'60px':'200px'">
     <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :collapse="isCollapse"
      router
      active-text-color="#ffd04b">
            <el-menu-item index="/">
        <i class="el-icon-platform-eleme"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-submenu :index="`/${item.name}`" v-for="(item,index) in mencsList" :key="item.id">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="`/${item.name}/${ele.name}`" v-for="(ele,index) in item.children" :key="ele.id">
            <template slot="title">
          <i :class="ele.icon"></i>
          <span>{{ele.title}}</span>
        </template>
            </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
      <div class="left">
        <i class="el-icon-s-fold" :class="isCollapse?'active':''" @click="isflag"  style="font-size: 25px"></i>
         <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }" v-for="(item,index) in navLists" :key="index">{{item.title?item.title:'主页'}}</el-breadcrumb-item>
</el-breadcrumb>
      </div>
      <div class="right">
        <p>欢迎管理员：{{username}}</p>
        <div class="img">
          <img src="../assets/20210816114249107peiqi (1).jpg" alt="">
        </div>
        <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">欢居客户端预览</el-dropdown-item>
    <el-dropdown-item command="b">乐居后台预览</el-dropdown-item>
    <el-dropdown-item command="c">接口地址</el-dropdown-item>
    <el-dropdown-item command="d" disabled>不烦官网</el-dropdown-item>
    <el-dropdown-item command="e" divided>退出</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
    </el-header>
    <el-main>
      <!-- 坑 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import { getMencs } from "../utlis/api";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      mencsList: [],
      isCollapse: false,
      username: "",
      navLists:['主页']
    };
  },
  methods: {
    isflag() {
      this.isCollapse = !this.isCollapse;
    },
    handleCommand(val){
        console.log(val);
        if (val=='e') {
          localStorage.clear()
          this.$router.push('/login')
        }
    }
  },
  watch:{
    immediate:true,
   $route:{
     handler(newpath){
      console.log(newpath.matched.slice(1)); 
      let list=newpath.matched.slice(1)
      let lists=[]
       list.forEach(item=>{
              lists.push({
                title:item.meta.title,
                name:item.name
              })
     })
        console.log(lists);
        this.navLists=lists
    }
   }
  },
  created() {
    getMencs().then(res => {
      console.log(res);
      this.mencsList = res.data.permissionList;
    });
    this.username = localStorage.getItem("name") || '没有登录';
  }
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #ffff;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .active {
    transition: all 0.5s;
    transform: rotate(180deg) !important;
  }
}

.el-aside {
  background-color: #545c64;
  color: #333;
  height: 100vh;
  transition: all 1s;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 90vh;
}
.left {
  display: flex;
  align-items: center;
}
.right {
  display: flex;
  align-items: center;
  .img {
    width: 60px;
    height: 100%;
    border-radius: 10px;
    margin: 0 5px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
}
.fs {
  font-size: 30px;
}
</style>

