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
    <p class="blogTitle">博客标题：</p>
    <input type="text" v-model="blogData.title" class="title form-control" />
    <div id="main">
      <mavon-editor class="mavon" ref="editor" @change="UpdataDoc" v-model="blogData.markdown" />
    </div>
    <button type="submit" class="btn btn-primary" v-on:click="saveDoc(markdown,html)">保存</button>
  </div>
</template>

<script>
export default {
  name: "sendBlog",
  data() {
    return {
      value: "",
      html: "",
      markdown: "",
      blogData: { title: "", body: "", tagCloud: [], author: "" }
    };
  },
  methods: {
    sendBlog() {
      console.log("111");
    },
    //实际传入了这两个参数 $refs.editor.d_value,$refs.editor.d_render
    UpdataDoc(markdown, html) {
      this.markdown = markdown;
      this.html = html;
      console.log(this.markdown, this.html);
    },
    saveDoc(markdown, html) {
      let data = { markdown: markdown, html: html, title: this.blogData.title };
      let url;
      if (this.$route.params.userId) {
        url = "http://192.168.1.107:3333/sendBlog" + this.$route.params.userId;
      } else {
        url = "http://192.168.1.107:3333/sendBlog";
      }
      this.axios
        .post(url, data)
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //根据传入的ID去获取博客
    getBlog(id) {
      this.axios
        .get(`http://192.168.1.107:3333/findBlog/` + id)
        .then(data => {
          this.blogData = data.data;
        })
        .catch(err => {
          console.log(err);
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

.title {
  margin-bottom: 50px;
}

.mavon {
  height: 70vh;
}

.container {
  display: inline-block;
  min-height: 90vh;
}

.btn {
  margin: 5px;
  float: right;
}

.card {
  border: 1px solid red;
}
#tag {
  float: left;
}
</style>
