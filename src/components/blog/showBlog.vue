<template>
  <div class="container">
    <div class="title">
      <h1>{{blog.title}}</h1>
      <div class="artlceMsg">
        <span class="data">{{blog.date.slice(0,10)}}</span>
        <span class="read">111</span>
        <span class="like">11</span>
      </div>
    </div>
    <div v-html="blog.html" class="markdown-body articles"></div>
  </div>
</template>

<script>
export default {
  name: "showBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.axios
      .get(`http://localhost:3333/findBlog/${this.id}`)
      .then(data => {
        console.log(data);
        this.blog = data.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  border: 1px solid #e3e3e5;
  box-shadow: 1px -5px 15px #e3e3e5;
  border-radius: 5px;
  padding: 5px;
  background: #fafafa;
  display: inline-block;
  text-align: left;
}

.articles {
  /* border: 1px solid red; */
  min-height: 75vh;
  margin: 10px;
  padding: 20px;
}

.title {
  border-bottom: 1px solid #e3e3e5;
}
.title > h1 {
  text-align: center;
}
</style>
