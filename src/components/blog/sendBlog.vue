<template>
  <div class="panel panel-default container">
    <div class="card">
      <div class="card-body">
        <h1>写博客:</h1>
      </div>

      <div>
        博客标题:
        <input type="text" v-model="blogData.title" class="form-control" />
        博客内容:
        <div class="form-group">
          <textarea v-model="blogData.body" class="form-control" rows="5" id="comment">{{blogData.title}}</textarea>
        </div>
        <select name="tagCloud" v-model="blogData.tagCloud">
          <option value="vue">Vue</option>
          <option value="css3">Css3</option>
        </select>
        <button type="submit" class="btn btn-primary" v-on:click="sendBlog">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sendBlog",
  data() {
    return {
      blogData: { title: "", body: "", tagCloud: [], author: "" }
    };
  },
  methods: {
    sendBlog() {
      let data = this.blogData;
      // JSON.stringify(data)  保留方法 后续研究
      this.axios.post("http://192.168.1.107:3333/sendBlog", data).then(data => {
        console.log(data);
      });
    }
  },
  mounted: function() {}
};
</script>

<style scoped>
h1 {
  margin: 10px;
}

.container {
  border: 1px solid red;
  display: inline-block;
  margin-top: 100px;
  height: 90vh;
  min-height: 90vh;
}

.card {
  border: 1px solid red;
  max-height: 80vh;
}

.sendBlog {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  border: 1px solid red;
}
</style>
