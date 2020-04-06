<template>
  <div id="home">
    <Header/>
    <div class="bottom">
      <el-button type="primary" round @click="plan">开始规划</el-button>
      Copyright©慧park All Rights Reserved.
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'

  export default {
    name: 'Home',
    components: {
    Header
    },
    methods:{
      plan(){
        console.log("开始规划...");
      }
    }
  }
</script>

<style scoped>
#home{
  background-image: url(../assets/background.png);
  background-repeat:no-repeat;
  background-position:center;
  background-size:100% 100%;
  height: 810px;
  text-align: center;
}

.el-button{
  position: absolute;
  bottom: 150px;
  width: 180px;
  font-size: 25px;
  margin-left: 50px;

}

.bottom{
  position: absolute;
  bottom: 0;
  height: 30px;
  width: 100%;
}
</style>