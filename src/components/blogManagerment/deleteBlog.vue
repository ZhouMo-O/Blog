<template>
  <div class="allBlog">
    <h3>管理博客:</h3>
    <div class="card card-body mb-2 animated fadeIn" v-for="blog in blogData" :key="blog._id">
      <div class="message" v-show="blog.blog">
        <div class="delete_box">
          <p>是否删除博客:{{blog.title}}</p>
          <span v-bind:id="blog._id" v-on:click="deleteBlog($event)" class="yes"></span>
          <span v-bind:id="blog._id" v-on:click="toggle($event)" class="no"></span>
        </div>
      </div>
      <div class="article_lim">
        <h5>{{blog.title.length >15? blog.title.slice(0,25)+'...':blog.title}}</h5>
        <p class="content">{{blog.Intro.length >15? blog.Intro.slice(0,15)+'...':blog.Intro}}</p>
        <span v-bind:id="blog._id" class="deleteBlog" v-on:click="toggle($event)"></span>
        <span @click="routerTo(blog._id)" v-bind:id="blog._id" class="edit"></span>
      </div>
      <div class="tag_box">
        <span class="tag_list">{{blog.parent.tagName}}</span>
        <span class="tag_list">{{blog.parent.tagName}}</span>
        <span class="tag_list">{{blog.parent.tagName}}</span>
        <span class="tag_list">{{blog.parent.tagName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { constants } from "crypto";
export default {
  name: "deleteBlog",
  data() {
    return {
      ok: false,
      blogData: []
    };
  },
  methods: {
    async deleteBlog(e) {
      var selectedBedDom = $(e.srcElement); //dom元素
      var BlogId = selectedBedDom[0].id;
      var hiddenCard = $(
        e.currentTarget.parentElement.parentElement.parentElement
      )[0];
      const res = await this.axios.delete(`rest/blogs/${BlogId}`);
      hiddenCard.style.display = "none";
    },
    async fetchBlogList() {
      const data = await this.axios.get("rest/blogs");
      this.blogData = Object.assign({}, this.blogData, data.data);
      console.log(this.blogData);
    },
    //传递Id
    routerTo(id) {
      this.$router.push({
        name: "sendBlog",
        params: { userId: id }
      });
    },
    toggle(e) {
      var message =
        $(e.currentTarget.parentElement.parentElement.firstElementChild)[0]
          .className == "message"
          ? $(e.currentTarget.parentElement.parentElement.firstElementChild)[0]
          : $(e.currentTarget.parentElement.parentElement)[0];
      console.log(message);
      var styleStatus = message.style.display == "none" ? "block" : "none";
      var messageDom = (message.style.display = styleStatus);
      console.log(messageDom);
    }
  },
  created() {
    this.fetchBlogList();
  }
};
</script>

<style scoped>
h3,
h5 {
  text-align: left;
}

h5 {
  color: #4285f4;
  width: 96%;
}

/*card-body*/
.animated {
  padding: 10px;
}

.content {
  font-size: 14px;
  text-align: left;
}

.article_lim {
  border: 1px solid #ffffff;
}

.deleteBlog {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 25px;
  top: 25px;
  /* border: 1px solid red; */
  background: url("../../assets/del.svg") no-repeat;
  background-size: 20px;
}

.edit {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 25px;
  bottom: 25px;
  background: url("../../assets/edit.svg") no-repeat;
  background-size: 20px;
}

/*tag BOX*/
.tag_box {
  border: 1px solid #fefefe;
}

.tag_list {
  float: left;
  margin-right: 4px;
  padding: 3px;
  font-size: 10px;
  border: 1px solid #dfdfdf;
  background: #ffffff;
  border-radius: 5px;
}

/*弹窗信息*/
.message {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  border-radius: 5px;
  background: #99999a;
}

.delete_box {
  position: relative;
  width: 100%;
  height: 100%;
}

.delete_box > p {
  color: #1e1e1e;
  text-align: center;
  line-height: 45px;
}

.yes {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 20px;
  background: url("../../assets/yes.svg") no-repeat;
  background-size: 20px;
}

.no {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  bottom: 20px;
  background: url("../../assets/no.svg") no-repeat;
  background-size: 20px;
}
</style>
