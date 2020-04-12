<template>
  <div id="login">
    <div class="content">
      <div class="input-content">
        <el-input placeholder="请输入账号" v-model="input1">
          <i slot="prefix" class="el-input__icon el-icon-bicycle"></i>
        </el-input>
        <el-input placeholder="请输入密码" v-model="input2" show-password>
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </div>
      <el-checkbox v-model="checked">记住密码</el-checkbox>
      <a href="#">忘记密码</a>
      <br />
      <el-button type="primary" plain @click="login">登 录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input1: "",
      input2: "",
      checked: false
    };
  },
  methods: {
    login() {
      // console.log("login");
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style scoped>
#login {
  background-image: url(../assets/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: 810px;
}
.content {
  width: 450px;
  height: 270px;
  /*  border: 1px solid #000;*/
  margin: 0 auto;
  position: relative;
  top: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  /*text-align: center;*/
}
.input-content {
  width: 400px;
  margin: 0 auto;
  position: relative;
  top: 20px;
}

.el-input {
  font-size: 16px;
  padding-top: 20px;
}

i {
  position: absolute;
  top: 10px;
}

.el-checkbox {
  position: absolute;
  left: 25px;
  bottom: 90px;
}

.content a {
  position: absolute;
  right: 25px;
  bottom: 90px;
  font-size: 14px;
}

.el-button {
  position: absolute;
  bottom: 20px;
  left: 135px;
  width: 180px;
  font-size: 16px;
}
</style>