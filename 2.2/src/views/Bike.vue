<template>
  <div id="bike">
    <h3>点击查看单车信息：</h3>
    <div id="bike-view"></div>
    <div class="something">
      <h3>投放区域：{{ area }}</h3>
    </div>
  </div>
</template>

<script>
  //引入
  import AMap from 'AMap';

  export default {
    name: 'bike',
    data () {
      return {
        isShow:true,
        center_x:114.386234,
        center_y: 30.473798,
        area:'中南财经政法大学(南湖校区)'
      }
    },
    methods:{
      // 创建地图
      createView(){
        let map = new AMap.Map('bike-view',{
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
#bike{
  background-image: url(../assets/blank.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 800px;
}

#bike-view{
  position: absolute;
  width: 80%;
  height: 570px;
  left: 10%;
}


.something{
  position: absolute;
  bottom: 20px;
  left: 39%;
}

h4{
  margin: 0;
}
</style>