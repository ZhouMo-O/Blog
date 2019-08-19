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
    <p>博客标题</p>
    <input type="text" v-model="blogData.title" class="title form-control" />
    <div id="main">
      <mavon-editor
        class="mavon"
        ref="editor"
        @change="UpdataDoc"
        v-model="value"
        :toolbars="toolbars"
        @save="saveDoc"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "sendBlog",
  data() {
    return {
      value: "",
      blogData: { title: "", body: "", tagCloud: [], author: "" },
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
        //save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true // 导航目录
      }
    };
  },
  methods: {
    sendBlog() {
      let data = this.blogData;
      // JSON.stringify(data)  保留方法 后续研究
      this.axios.post("http://192.168.1.107:3333/sendBlog", data).then(data => {
        console.log(data);
      });
    },
    //实际传入了这两个参数 $refs.editor.d_value,$refs.editor.d_render
    UpdataDoc(markdown, html) {
      console.log(markdown);
    },
    saveDoc(markdown, html) {
      console.log(html);
      let data = { markdown: markdown, html: html };
      this.axios.post("http://192.168.1.107:3333/sendBlog", data).then(data => {
        console.log(data);
      });
    },
    getBlog() {
      let id = JSON.stringify(this.$route.params.userId);

      this.axios
        .get(`http://192.168.1.107:3333/findBlog/${{ id }}`)
        .then(data => {
          console.log(data);
        });
    }
  },
  mounted: function() {
    if (this.$route.params.userId) {
      console.log(this.$route.params.userId);
      this.getBlog();
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 10px;
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

.card {
  border: 1px solid red;
}
#tag {
  float: left;
}
</style>
