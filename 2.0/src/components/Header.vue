<template>
  <div id="nav">
    <router-link to="/home">主页</router-link>
    <router-link to="/strategy">投放策略</router-link>
    <router-link to="/supplementary">辅助功能</router-link>
    <router-link to="/person">个人中心</router-link>
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
    padding: 30px;
  }

  #nav a{
    font-size: 20px;
    color: #484848;
    margin: 15px;
    text-decoration: none;
  }

  #nav a.router-link-exact-active{
    color: #e9232c;
  }

</style>
