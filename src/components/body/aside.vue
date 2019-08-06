<template>
  <aside class="col-md-3">
    <input type="text" v-model="search" placehoder="搜索" />
    <div>公告栏也在这里</div>
    <div>此处Seo</div>
    <div>关键词：</div>
    <div>blog 个人博客，个人网站等关键词收录</div>
    <div>排名白帽优化</div>
    <p>友情链接也在这里</p>
    <p>云标签</p>
    <p>hotBlog 阅读排名 点赞排名 留言排名</p>
    <p>推荐阅读</p>
    <p>最新更新</p>
  </aside>
</template>

<script>
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
</style>
