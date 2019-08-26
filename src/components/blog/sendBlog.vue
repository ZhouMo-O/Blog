<template>
  <div class="panel panel-default container">
    <!-- <div class="card">
      <div class="card-body">
        <h1>写博客:</h1>
      </div>

      <div>
        博客标题:
        <input type="text" v-model="blogData.title" class="form-control" />
        博客内容:
        <div class="form-group">
          <textarea v-model="blogData.body" class="form-control" rows="5" id="comment">{{blogData.title}}</textarea>
        </div>
        <select name="tagCloud" id="tag" v-model="blogData.tagCloud">
          <option value="vue">Vue</option>
          <option value="css3">Css3</option>
        </select>
        <button type="submit" class="btn btn-primary" v-on:click="sendBlog">Submit</button>
      </div>
    </div>-->
    <p class="blogTitle">文章标题：</p>
    <input type="text" v-model="blogData.title" class="title form-control" />
    <p class="blogIntro">文章简介：</p>
    <input type="text" v-model="blogData.Intro" class="title form-control" />
    <div id="main">
      <mavon-editor class="mavon" ref="editor" @change="UpdataDoc" v-model="blogData.markdown" />
    </div>
    <button
      type="btn"
      :toolbars="toolbars"
      class="btn btn-primary"
      v-on:click="saveDoc(blogData.markdown,blogData.html),routerTo()"
    >保存</button>
  </div>
</template>

<script>
export default {
  name: "sendBlog",
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
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        // save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true // 导航目录
      }
    };
  },
  methods: {
    //实际传入了这两个参数 $refs.editor.d_value,$refs.editor.d_render
    //这个函数的作用是存储编辑之前的内容。
    UpdataDoc(markdown, html) {
      this.blogData.markdown = markdown;
      this.blogData.html = html;
    },
    //save方法
    saveDoc(markdown, html) {
      let data = {
        markdown: markdown,
        html: html,
        title: this.blogData.title,
        Intro: this.blogData.Intro
      };
      //保存的时候判断一下路由上有没有ID传过来，有的话就是编辑，没有就是发布，
      //然后路由重定向一下
      let url;
      if (this.$route.params.userId) {
        console.log("put");
        console.log(data);
        url = "/Editblog/" + this.$route.params.userId;
        this.axios.post(url, data).then(data => {
          console.log(data);
        });
      } else {
        console.log("post");
        url = "/sendBlog";
        this.axios.post(url, data).then(data => {
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
