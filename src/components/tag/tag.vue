<template>
  <el-form ref="form" :model="modle" label-width="80px">
    <h1>标签管理</h1>
    <br />
    <el-form-item label="标签名称">
      <el-input v-model="modle.tagName">11</el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      modle: {}
    };
  },
  methods: {
    async onSubmit() {
      const res = await this.axios.post("tag", this.modle);
      console.log(res);
    }
  }
};
</script>

<style>
</style>teplate>