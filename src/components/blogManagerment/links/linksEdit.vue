<template>
  <el-form ref="form" :model="modle" label-width="80px">
    <h3>{{id?'编辑':'创建'}}友链:</h3>
    <br />
    <el-form-item label="简介">
      <el-input v-model="modle.linksIntro"></el-input>
    </el-form-item>
    <el-form-item label="友情链接">
      <el-input v-model="modle.link"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      modle: {}
    };
  },
  methods: {
    async fetchId() {
      const res = await this.axios.get(`rest/links/${this.id}`);
      this.modle = res.data;
      console.log(res);
    },
    async onSubmit() {
      if (this.id) {
        const send = await this.axios.put(`rest/links/${this.id}`, this.modle);
      } else {
        const res = await this.axios.post("rest/links", this.modle);
        console.log(res);
      }
      this.$router.push("/blogManagerment/linksList");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    }
  },
  created() {
    this.id && this.fetchId();
  }
};
</script>

<style>
</style>teplate>