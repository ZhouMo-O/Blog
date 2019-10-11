<template>
  <div>
    <h1>add user</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="subumit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetch() {
      let user = await this.axios.get(`/findOneUser/${this.id}`);
      this.model = user.data;
    },
    async save() {
      if (this.id) {
        let res = await this.axios.put(`/editUser/${this.id}`, this.model);
        this.$router.push("/blogManagerment/userList");
        this.$message({
          type: "success",
          message: res.data.message
        });
      } else {
        let res = await this.axios.post("/register/", this.model);
        this.$router.push("/blogManagerment/userList");
        this.$message({
          type: "success",
          message: "注册用户成功"
        });
      }
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
</style>