<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      const res = await this.axios.post("/login", this.model);
      //sessionStorage.token = res.data.token;  //浏览器关闭token失效
      localStorage.token = res.data; //浏览器关闭后token依然有效
      this.$router.push("/blogManagerment/deleteBlog");
      this.$message({
        type: "success",
        message: "登录成功"
      });
      console.log(localStorage.token);
    }
  }
};
</script>

<style>
.login-card {
  width: 25rem;
  margin: 5rem auto;
}
.login-container {
  min-height: 1400px;
  /* border: 1px solid red; */
}
</style>