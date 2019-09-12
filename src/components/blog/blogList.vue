<template>
  <div class="container-fluid articleBox">
    <div class="row center">
      <Article />
      <Aside />
    </div>
  </div>
</template>

<script>
import Article from "../body/article";
import Aside from "../body/aside";
export default {
  name: "blogList",
  data() {
    return {
      showBlogData: {
        title: "11"
      }
    };
  },
  mounted: function() {},
  components: {
    Article,
    Aside
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/*最外层*/
.articleBox {
  min-height: 200px;
  float: left;
  margin-top: 50px;
  background: #ffffff;
}
.center {
  /* border: 1px solid red; */
  background: #ffffff;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
}

.col-md-8 {
  margin-top: 5px;
  min-height: 800px;
  border: 1px solid #e3e3e5;
}

.article {
  border: 10px solid #e3e3e5;
}
</style>
