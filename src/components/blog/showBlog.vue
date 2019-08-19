<template>
  <div class="container">
    <div class="head">
      <h1>{{blog.title}}</h1>
    </div>
    <p>{{blog.body}}</p>
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
  background: #fafafa;
  display: inline-block;
}
.head {
  border: 1px solid red;
}
.head > h1 {
  text-align: left;
}
</style>
