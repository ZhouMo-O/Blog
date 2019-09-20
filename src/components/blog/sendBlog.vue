<template>
  <div class="panel panel-default container">
    <p class="blogTitle">文章标题：</p>
    <input type="text" v-model="blogData.title" class="title form-control" />
    <p class="blogIntro">文章简介：</p>
    <input type="text" v-model="blogData.Intro" class="title form-control" />
    <VueEditor v-model="blogData.markdown" id="edit" useCustomImageHandler></VueEditor>
    <button type="btn" class="btn btn-primary" v-on:click="saveDoc(),routerTo()">保存</button>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "sendBlog",
  components: {
    VueEditor
  },
  data() {
    return {
      blogData: {
        title: "",
        Intro: "",
        tagCloud: [],
        author: "",
        html: "",
        markdown: ""
      }
    };
  },
  methods: {
    saveDoc() {
      //保存的时候判断一下路由上有没有ID传过来，有的话就是编辑，没有就是发布，
      //然后路由重定向一下
      let url;
      if (this.$route.params.userId) {
        console.log("put");
        url = "/Editblog/" + this.$route.params.userId;
        this.axios.post(url, this.blogData).then(data => {
          console.log(data);
        });
      } else {
        console.log("post");
        url = "/sendBlog";
        this.axios.post(url, this.blogData).then(data => {
          console.log(data);
        });
      }
    },
    //根据传入的ID去获取博客
    getBlog(id) {
      this.axios
        .get(`/findBlog/` + id)
        .then(data => {
          this.blogData = data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    routerTo() {
      this.$router.push({
        name: "deleteBlog"
      });
    }
  },
  mounted: function() {
    //如果通过路由传入了ID那么就进入了编辑模式
    if (this.$route.params.userId) {
      this.getBlog(this.$route.params.userId);
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 10px;
}

.blogTitle {
  text-align: left;
}

.blogIntro {
  text-align: left;
}

.title {
  margin-bottom: 10px;
}
.mavon {
  height: 70vh;
}

.container {
  display: inline-block;
  min-height: 90vh;
}

.btn {
  margin: 10px;
  float: right;
}

.card {
  border: 1px solid red;
}
#tag {
  float: left;
}
</style>
