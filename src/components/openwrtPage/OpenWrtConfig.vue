<template>
  <div>
    <h1>OpenWrt配置</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="SS配置">
        <el-input v-model="model.ss"></el-input>
      </el-form-item>
      <el-form-item label="KcpTun配置">
        <el-input v-model="model.kcp"></el-input>
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
      model: {
        ss: "",
        kcp: ""
      }
    };
  },
  methods: {
    async fetch() {
      let config = await this.axios.get(`/getOpenWrtConfig`);
      this.model = config.data[0];
    },
    async save() {
      if (this.model != "") {
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