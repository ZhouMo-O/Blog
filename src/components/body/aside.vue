<template>
  <aside class="col-md-3">
    <tagCloud></tagCloud>
  </aside>
</template>

<script>
import tagCloud from "../body/TagCloud/tagCloud";
export default {
  name: "Aside",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  },
  components: {
    tagCloud
  }
};
</script>

<style scoped>
/*中间层右侧tips*/
.col-md-3 {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 1vw !important;
  background: #fcfcfc;
  border: 1px solid#E3E3E5;
  box-shadow: 1px -5px 15px #e7eaed;
}

/*媒体查询*/
@media screen and (max-width: 767px) {
  .col-md-3 {
    /* border: 1px solid red; */
    margin: 10px !important;
    width: 97%;
  }
  .col-md-8 {
    margin-left: 0 !important;
  }
}
.an {
  margin: 5px;
  border-bottom: 1px solid #e3e3e6;
}
</style>
