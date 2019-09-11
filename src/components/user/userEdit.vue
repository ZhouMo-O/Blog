<template>
  <div>
    <h1>add user</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.user"></el-input>
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
  name: "user",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      let res = await this.axios.post("/register", this.model);
    }
  }
};
</script>

<style>
</style>