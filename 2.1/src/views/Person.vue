<template>
  <div id="person">
    <Header/>
    <br>
    <!-- 头像 -->
  	<div class="avatar">
      <el-avatar :size="90"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <span>admin</span>
    <br>
    <br>
    <!-- 个人信息 -->
    <div class="content">
      <ul>
        <li>
          <h3>账号</h3>
          <hr>
        </li>
        <li>
          <h3>企业名</h3>
          <hr>
        </li>
        <li>
          <h3>管辖区域</h3>
          <hr>
        </li>
        <li>
          <h3>管辖区域车辆数</h3>
          <hr>
        </li>
        <li>
          <h3>消息中心</h3>
          <!-- <el-badge class="mark" :value="12" /> -->
          <hr>
        </li>
      </ul>
      <br>
      <el-button type="danger" plain>退出</el-button>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: 'Person',
    components: {
    Header
  }
  }
</script>

<style scoped>
#person{
  background-image: url(../assets/background_none.png);
  background-repeat:no-repeat;
  background-position:center;
  background-size:100% 100%;
  height: 810px;
  text-align: center;
}

#person .content{
  height: 450px;
  width: 700px;
  background-color: rgba(255,254,254,0.5);
  /*border: 1px solid #000;*/
  margin:0 auto;
}
#person .content h3{
  text-align: left;
  padding-top: 10px;
}
#person .content ul{
  list-style-type: none;
}
</style>