<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/blogManagerment/userEdit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "userlist",
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      let res = await this.axios.get("/findUser");
      this.items = res.data;
      console.log(this.items);
    },
    remove(row) {
      console.log(row);
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>template>