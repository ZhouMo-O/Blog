<template>
  <div class="col-md-8 row">
    <div
      class="col-lg-12 animated fadeIn"
      v-bind:class="changeClass"
      v-for="blog in blogs.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      :key="blog._id"
    >
      <article class="article">
        <router-link v-bind:to="'/showBlog/'+blog._id" class="articleImg"></router-link>
        <!-- 标签 -->
        <div class="tag_box">
          <span
            @click="getTagBlog(item._id)"
            v-for="item in blog.parent"
            :key="item.tagName"
            class="tag_list"
          >{{item.tagName}}</span>
        </div>
        <div class="article_title">
          <h4>
            <!-- 标题 -->
            <router-link
              v-bind:to="'/showBlog/'+blog._id"
            >{{blog.title.length>10?blog.title.slice(0,25)+'...':blog.title}}</router-link>
          </h4>
          <!-- 文章简介 -->
          <p id="Intro">{{blog.Intro.length>10?blog.Intro.slice(0,20)+'...':blog.Intro}}</p>
          <div class="blogData">
            <!-- 时间 -->
            <div class="date">{{blog.date.slice(0,10)}}</div>

            <!-- 阅读 -->

            <div class="read">
              <div class="read_icon"></div>
              <div class="read_number">:{{blog.read}}</div>
            </div>

            <!-- 点赞 -->
            <div class="like">
              <div class="like_icon"></div>
              <div class="like_number">:{{blog.like}}</div>
            </div>

            <!-- 评论数 -->
            <div class="comment">
              <div class="comment_icon"></div>
              <div class="comment_number">:{{blog.comment.length-1}}</div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div class="page">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pagesize"
        layout="total, prev, next, jumper"
        :total="blogs.length"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "Articles",
  props: {
    changeClass: {
      type: String
    },
    id: {
      type: String
    }
  },
  data() {
    return {
      MybodyData: {
        show: false,
        article: true
      },
      blogs: [],
      currentPage: 1, //当前页
      pagesize: 10 //    每页的数据
    };
  },
  created() {
    this.fetchBlogList();
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
    },
    async getTagBlog(id) {
      const res = await this.axios.get(`/tag/blogs/${id}`);
      this.$router.push("/blogList");
      this.blogs = res.data;
    },
    async fetchBlogList() {
      const res = await this.axios.get("rest/blogs");
      this.blogs = res.data;
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/*动画*/
@keyframes myfirst {
  from {
    position: relative;
    top: 0;
  }
  20% {
    position: relative;
    top: 2px;
  }
  to {
    position: relative;
    top: -8px;
    box-shadow: 1px 5px 15px #c1c1c1;
    border-radius: 5px;
  }
}

@keyframes learn {
  0% {
    position: relative;
    top: -8px;
  }
  20% {
    position: relative;
    top: 0px;
  }
  100% {
    box-shadow: 1px -5px 10px #e7eaed;
  }
}

.article:hover {
  animation: myfirst 0.5s forwards;
}

/*第二层*/
.center {
  background: #ffffff;
}

/*第二层 左侧文章外层*/
.col-md-8 {
  float: left;
  margin-left: 3.1vw !important;
  /* border: 1px solid #e3e3e5; */
  background: #ffffff;
}

/*左侧文章内容模块*/
.col-lg-12 {
  background: #ffffff;
}

/*文章内容*/
.article {
  border: 1px solid #e3e3e5;
  border-radius: 3px;
  height: 240px;
  margin: 8px;
  padding: 5px;
  background: #fcfcfc;
  box-sizing: border-box;
  box-shadow: 1px -5px 40px #dadde3;
  animation: learn 1s forwards;
}

.col-xl-6 > .article {
  height: 290px;
}

/*博客标签 外层 这么写是因为没有标签的时候博客样式会混乱*/
.tag_box {
  float: left;
  height: 30px;
  border-left: 1px solid #fcfcfc;
  position: relative;
  top: -25px;
  left: -1px;
}
.tag_box > span {
  float: left;
  height: 23px;
  margin-right: 4px;
  margin-left: 1px;
  padding: 3px;
  font-size: 10px;
  /* border: 1px solid #dfdfdf; */
  background: rgba(252, 252, 252, 0.8);
  border-radius: 5px;
}

/*文章简介*/
#Intro {
  /* border: 1px solid red; */
  font-size: 10px;
}

/*文章图片大小*/
.articleImg {
  width: 100%;
  height: 55%;
  display: block;
  /* border: 1px solid red; */
  background: url("../../assets/codeCover.png") no-repeat;
  background-size: cover;
}
/*文章标题和body的外层包裹*/
.article_title {
  width: 100%;
  height: 40%;
  float: left;
  /* border: 1px solid red; */
  position: relative;
  top: -25px;
}

/*文章标题*/
.article > div > h4 {
  float: left;
  margin-left: 5px;
  margin-top: 5px;
  /* border: 1px solid red; */
}

.article > div > h4 > a {
  font-size: 18px;
  font-weight: 800;
  color: #333;
  text-align: left;
  font-family: -apple-system, "Open Sans", "Microsoft YaHei", sans-serif;
  text-decoration: none;
}

/**文章body*/
.article > div > p {
  margin-left: 5px;
  font-size: 14px;
  /* border: 1px solid red; */
  float: left;
  width: 100%;
  text-align: left;
}

/*文章发布的日期*/
.date {
  /* border: 1px solid red; */
  position: absolute;
  font-size: 14px;
  bottom: -10px;
  left: 5px;
  float: left;
}
/*评论*/
.comment {
  /* border: 1px solid red; */
  position: absolute;
  bottom: -10px;
  right: 0px;
}

.comment .comment_icon {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  background: url("../../assets/pinglun.svg");
  background-size: cover;
}

.comment .comment_number {
  font-size: 14px;
  display: block;
  float: left;
  background-size: cover;
}

/*阅读*/
.read {
  /* border: 1px solid red; */
  position: absolute;
  bottom: -10px;
  right: 55px;
}

.read .read_icon {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  background: url("../../assets/read.svg");
  background-size: cover;
}

.read .read_number {
  font-size: 14px;
  display: block;
  float: left;
  background-size: cover;
}

/*点赞*/
.like {
  /* border: 1px solid red; */
  position: absolute;
  bottom: -10px;
  right: 110px;
}

.like .like_icon {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  background: url("../../assets/like.svg");
  background-size: cover;
}

.like .like_number {
  font-size: 14px;
  display: block;
  float: left;
  background-size: cover;
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

@media screen and (min-width: 2400px) {
  .col-md-8 {
    margin-left: 0 !important;
  }
}
</style>
