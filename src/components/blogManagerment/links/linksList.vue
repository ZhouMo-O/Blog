<template>
  <div>
    <h3>标签列表:</h3>
    <el-table :data="linksData" style="width: 100%">
      <el-table-column prop="linksIntro" label="标签名称"></el-table-column>
      <el-table-column prop="link" label="友情链接"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/blogManagerment/linksEdit/${scope.row._id}`)"
            type="text"
            size="small"
          >编辑</el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  name: "tagList",
  data() {
    return {
      linksData: []
    };
  },
  methods: {
    async fetchTag() {
      const res = await this.axios.get("rest/links");
      this.linksData = res.data;
      console.log(this.linksData);
    },
    async remove(row) {
      this.$confirm(`是否删除友情链接${row.linksIntro}`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.axios.delete(`rest/links/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetchTag();
      });
    }
  },
  created() {
    this.fetchTag();
  }
};
</script>

<style>
</style>