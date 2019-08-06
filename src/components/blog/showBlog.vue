<template>
  <div>
    <h1>{{blog.title}}</h1>
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

<style>
</style>
