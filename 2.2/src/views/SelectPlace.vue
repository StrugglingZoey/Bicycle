<template>
  <div id="selectPlace">
    <Header />
    <h3>具体位置：</h3>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <br />
    <br />
    <el-row>
      <el-button type="reset">重选投放点</el-button>
      <el-button type="compute">计算投放量</el-button>
      <br />
      <br />
      <el-button type="map" @click="map">区域投放图</el-button>
      <el-button type="form" @click="form">区域投放表</el-button>
    </el-row>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "SelectPlace",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "中南财经政法大学（南湖校区）"
        },
        {
          value: "选项2",
          label: "民族大道时间广场"
        }
      ],
      value: "中南财经政法大学（南湖校区）"
    };
  },
  components: {
    Header
  },
  methods: {
    form() {
      console.log("生成投放表");
      this.$router.push({
        name: "form"
      });
    },
    map() {
      console.log("生成投放图");
      this.$router.push({
        name: "map"
      });
    }
  }
};
</script>

<style scoped>
#selectPlace {
  background-image: url(../assets/selectPlace.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 810px;
  text-align: center;
}

.el-button {
  background-color: lightgoldenrodyellow;
  font-size: 14px;
}
</style>