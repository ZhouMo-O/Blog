<template>
  <div>
    <h1>OpenWrt配置</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="服务器地址">
        <el-input v-model="model.server"></el-input>
      </el-form-item>
      <el-form-item label="服务器端口">
        <el-input v-model="model.server_port"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item label="加密方式">
        <el-input v-model="model.method"></el-input>
      </el-form-item>
      <el-form-item label="本地监听地址">
        <el-input v-model="model.local_address"></el-input>
      </el-form-item>
      <el-form-item label="超时时间">
        <el-input v-model="model.timeout"></el-input>
      </el-form-item>
      <el-form-item label="端口重用">
        <el-input v-model="model.reuser_port"></el-input>
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
  name: "OpenWrtConfig",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetch() {
      let config = await this.axios.get(`/getOpenWrtConfig`);
      this.model = Object.assign({}, this.model, config.data);
      console.log(this.model);
    },
    async save() {
      if (this.model._id) {
        let res = await this.axios.put(
          `/putOpenWrtConfig/${this.model._id}`,
          this.model
        );
        this.$router.push("/OpenWrtConfig");
        this.$message({
          type: "success",
          message: res.data.message
        });
      } else {
        let res = await this.axios.post("/openWrtEdit/", this.model);
        this.$router.push("/OpenWrtConfig");
        this.$message({
          type: "success",
          message: "配置成功"
        });
      }
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>