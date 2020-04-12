<template>
  <div id="form">
    <Header />
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="index" label="投放点编号" width="180"></el-table-column>
      <el-table-column prop="number" label="投放量" width="180"></el-table-column>
      <el-table-column prop="suitableNumber" label="适宜投放量" width="180"></el-table-column>
      <el-table-column prop="warning" label="是否预警" width="180"></el-table-column>
      <el-table-column prop="note" label="备注" width="180"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      tableData: [{}]
    };
  }
};
</script>

<style>
#form {
  background-image: url(../assets/blank.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 810px;
}

.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>