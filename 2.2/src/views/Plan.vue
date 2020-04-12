<template>
  <div id="plan">
    <Header />
    <h3>当前城市：{{ city }}</h3>
    <!-- <el-button type="button" round @click="confirm">确定</el-button> -->
    <div id="city-view"></div>
    <div class="steps">
      <el-steps :active="active" align-center finish-status="success">
        <el-step title="选择投放区域"></el-step>
        <el-step title="确定投放点"></el-step>
        <el-step title="选择调度方案"></el-step>
        <el-step title="生成投放策略"></el-step>
      </el-steps>
      <el-button @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import {loadModules} from 'esri-loader';

export default {
  name: "Plan",
  data() {
    return {
      city:'武汉',
      center_x:114.305215,
      center_y:30.592935,
      active: 0
      }
  },
  components: {
    Header
  },
  methods: {
      createView(){
       let map = new AMap.Map('city-view',{
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom:11, //初始化地图层级
          center: [this.center_x, this.center_y] //初始化地图中心点
        });

        AMap.plugin([
          'AMap.ToolBar',
          'AMap.Scale',
          ], function(){
          // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
          map.addControl(new AMap.ToolBar());

          // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
          map.addControl(new AMap.Scale());
        });
    },
    next(){
      if (this.active++ > 3) this.active = 0;
    }
  },
  mounted(){
    this.createView();
  }
}
</script>

<style scoped>
#plan{
  background-image: url(../assets/selectCity.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 810px;
  text-align: center;
}

.steps{
  position: absolute;
  width: 80%;
  left: 10%;
  bottom: 5px;
}

#city-view{
  position: absolute;
  width: 55%;
  left: 20%;
  height: 65%;
}
</style>