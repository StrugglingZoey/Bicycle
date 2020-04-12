<template>
  <div id="selectRegion">
    <Header />
    <h3>当前区域：</h3>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="button" round @click="confirm">确定</el-button>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "SelectRegion",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "洪山区"
        },
        {
          value: "选项2",
          label: "江夏区"
        },
        {
          value: "选项3",
          label: "武昌区"
        },
        {
          value: "选项4",
          label: "江汉区"
        },
        {
          value: "选项5",
          label: "黄陂区"
        },
        {
          value: "选项6",
          label: "江岸区"
        }
      ],
      value: "洪山区"
    };
  },
  components: {
    Header
  },
  methods: {
    confirm() {
      console.log("继续进行下一步具体位置选择...");
      this.$router.push({
        name: "selectPlace"
      });
    }
  }
};
</script>

<style scoped>
#selectRegion {
  background-image: url(../assets/selectRegion.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 810px;
  text-align: center;
}
</style>