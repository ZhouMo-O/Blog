<template>
  <div class="col-md-8 row">
    <div
      class="col-lg-12 animated fadeIn"
      v-bind:class="changeClass"
      v-if="MybodyData.show"
      v-for="blog in blogs"
    >
      <article class="article">
        <router-link v-bind:to="'/showBlog/'+blog._id" class="articleImg"></router-link>
        <div class="article_title">
          <h3>
            <!-- 标题 -->
            <router-link
              v-bind:to="'/showBlog/'+blog._id"
            >{{blog.title.length>10?blog.title.slice(0,10)+'...':blog.title}}</router-link>
          </h3>
          <!-- 文章简介 -->
          <p>{{blog.Intro.length>10?blog.Intro.slice(0,20)+'...':blog.Intro}}</p>

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
      </article>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Articles",
  props: ["changeClass"],
  data() {
    return {
      MybodyData: {
        show: false,
        article: true
      },
      blogs: []
    };
  },
  created() {
    this.axios.get("/findAllBlog").then(data => {
      this.blogs = data.data.slice(0, 10);
      console.log(this.blogs);
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handlerScroll);
  },
  methods: {
    handlerScroll() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop) {
        this.MybodyData.show = true;
      }
    }
  }
};
</script>

<style scoped>
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
    top: -10px;
    box-shadow: 1px 5px 15px #c1c1c1;
    border-radius: 5px;
  }
}

@keyframes learn {
  0% {
    position: relative;
    top: -10px;
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
  height: 270px;
  margin: 8px;
  padding: 5px;
  background: #fcfcfc;
  box-sizing: border-box;
  box-shadow: 1px -5px 40px #dadde3;
  animation: learn 1s forwards;
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
}

/*文章标题*/
.article > div > h3 {
  float: left;
  margin-left: 5px;
  margin-top: 5px;
  /* border: 1px solid red; */
}

.article > div > h3 > a {
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
  bottom: 5px;
  left: 5px;
  float: left;
}
/*评论*/
.comment {
  /* border: 1px solid red; */
  position: absolute;
  bottom: 5px;
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
  bottom: 5px;
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
  bottom: 5px;
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
