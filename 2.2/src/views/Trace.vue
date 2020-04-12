<template>
  <div id="trace">
    <h3>请选择您想要查看的车辆：</h3>
    <div id="trace-view"></div>
    <div class="something">
      <h4>投放区域：</h4>
      <el-select v-model="areaValue" placeholder="请选择投放区域">
        <el-option v-for="item in areas" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <h4>时间段：</h4>
      <el-select v-model="timeValue" placeholder="请选择时间段">
        <el-option v-for="item in times" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <br>
      <el-button type="primary" plain @click="showValue">确认</el-button>
    </div>
  </div>
</template>

<script>
  import AMap from 'AMap';

  export default {
    name: 'trace',
    data () {
      return {
        areas: [
          {
            value: "选项1",
            label: "中南财经政法大学（南湖校区）"
          }
        ],
        times: [
          {
            value: "选项1",
            label: "0:00-2:00"
          },
          {
            value: "选项2",
            label: "2:00-4:00"
          },
          {
            value: "选项3",
            label: "4:00-6:00"
          },
          {
            value: "选项4",
            label: "6:00-8:00"
          },
          {
            value: "选项5",
            label: "8:00-10:00"
          },
          {
            value: "选项6",
            label: "10:00-12:00"
          },
          {
            value: "选项7",
            label: "12:00-14:00"
          },
          {
            value: "选项8",
            label: "14:00-16:00"
          },
          {
            value: "选项9",
            label: "16:00-18:00"
          },
          {
            value: "选项10",
            label: "18:00-20:00"
          },
          {
            value: "选项11",
            label: "20:00-22:00"
          },
          {
            value: "选项12",
            label: "22:00-0:00"
          },
        ],
        areaValue:'',
        timeValue:'',
        center_x:114.386234,
        center_y: 30.473798
      }
    },
    methods:{
      // 创建地图
      createView(){
        let map = new AMap.Map('trace-view',{
          resizeEnable: true, //是否监控地图容器尺寸变化
          zoom:17, //初始化地图层级
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
      }
    },
  mounted(){
    this.createView();
  }
}
</script>

<style scoped>
#trace{
  background-image: url(../assets/blank.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 750px;
}
#trace-view{
  position: absolute;
  width: 80%;
  height: 500px;
  left: 10%;
}
.areas{
  display: flex;
  flex-direction: row;
  margin: 20px;
}
.something{
  position: absolute;
  bottom: 30px;
  left: 30%;
}

h4{
  margin:0;
  padding-left:40px;
  display: inline-block;
}
.el-button{
  margin-top: 30px;
  width: 150px;
  font-size: 18px;
}
</style>