<template>
  <div class="home">
   <el-container>
  <el-aside width="200px">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
            <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <!-- 坑 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import axios from 'axios'
import http from "../utlis/http"
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {

    }
  },
  created() {
    axios.get('/admin/sysAuth/index/getInitMenus').then(res=>{
      console.log(res);
    })
  },
}
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
  
  .el-aside {
    background-color: #cccc;
    color: #333;
    height: 100vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 90vh;
  }
</style>

