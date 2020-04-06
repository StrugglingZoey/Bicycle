<template>
  <div id="nav">
<!--     <router-link to="/home">主页</router-link>
    <router-link to="/strategy">投放策略</router-link>
    <router-link to="/supplementary">辅助功能</router-link>
    <router-link to="/person">个人中心</router-link> -->
    <div class="container">
      <el-menu :router=true :default-active="$route.name"  class="el-menu-demo" mode="horizontal">
        <el-menu-item index="home">主页</el-menu-item>
        <el-menu-item index="strategy">投放策略</el-menu-item>
        <el-submenu index="supplementary">
          <template slot="title">
            <span>辅助功能</span>
          </template>
          <el-menu-item index="bike">单车信息</el-menu-item>
          <el-menu-item index="trace">单车轨迹</el-menu-item>
        </el-submenu>
        <el-menu-item index="person">个人中心</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav{
    padding-top: 20px;
  }
  .container{
    margin:0 auto;
    width: 435px;
  }
  li,span{
    font-size: 18px;
  }


</style>
