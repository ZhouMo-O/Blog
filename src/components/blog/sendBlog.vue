<template>
  <div class="panel panel-default container">
    <h3>{{id?'编辑':'创建'}}博客</h3>
    <p class="blogTitle">文章标题：</p>
    <input type="text" v-model="blogData.title" class="title form-control" />
    <p class="blogIntro">文章简介：</p>
    <input type="text" v-model="blogData.Intro" class="title form-control" />
    <VueEditor
      v-model="blogData.markdown"
      id="edit"
      @image-added="handleImageAdded"
      useCustomImageHandler
    ></VueEditor>
    <button type="btn" class="btn btn-primary" v-on:click="saveDoc(),routerTo()">保存</button>
    <el-select class="select" v-model="blogData.parent" multiple placeholder="请选择">
      <el-option v-for="item in parents" :key="item._id" :label="item.tagName" :value="item._id"></el-option>
    </el-select>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "sendBlog",
  props: {
    id: {}
  },
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
      },
      parents: []
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.axios.post("upload", formData);
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async fetchParents() {
      const res = await this.axios.get("rest/tags");
      this.parents = res.data;
    },
    saveDoc() {
      //保存的时候判断一下路由上有没有ID传过来，有的话就是编辑，没有就是发布，
      //然后路由重定向一下
      console.log(this.blogData);
      if (this.id) {
        console.log("put");
        let url = "rest/blogs/" + this.id;
        this.axios.put(url, this.blogData).then(data => {
          console.log(data);
        });
      } else {
        console.log("post");
        let url = "rest/blogs";
        this.axios.post(url, this.blogData).then(data => {
          console.log(data);
        });
      }
    },
    //根据传入的ID去获取博客
    async fetchEditBlog() {
      const res = await this.axios.get(`rest/blogs/${this.id}`);
      console.log(res);
      this.blogData = res.data;
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
  },
  created() {
    this.fetchParents();
    this.id && this.fetchEditBlog();
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
.select {
  margin-top: 10px;
  float: left;
}
</style>
