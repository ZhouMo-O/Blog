<template>
  <div class="allBlog">
    <h3>管理博客:</h3>
    <div class="card card-body mb-2 animated fadeIn" v-for="blog in blogData" :key="blog.title">
      <div class="message" v-show="blog.blog">
        <div class="delete_box">
          <p>是否删除博客:{{blog.title}}</p>
          <span v-bind:id="blog._id" v-on:click="deleteBlog($event)" class="yes"></span>
          <span v-bind:id="blog._id" v-on:click="toggle($event)" class="no"></span>
        </div>
      </div>
      <h5>{{blog.title.length >10? blog.title.slice(0,10)+'...':blog.title}}</h5>
      <p class="content">{{blog.Intro.length >10? blog.Intro.slice(0,10)+'...':blog.Intro}}</p>
      <span v-bind:id="blog._id" class="deleteBlog" v-on:click="toggle($event)"></span>
      <span @click="routerTo(blog._id)" v-bind:id="blog._id" class="edit"></span>
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
  created() {
    this.axios
      .get("/findAllBlog")
      .then(data => {
        data.data.ok = true;
        this.blogData = data.data;
        console.log(this.blogData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    deleteBlog(e) {
      var selectedBedDom = $(e.srcElement); //dom元素
      var selectedBedDomValue = selectedBedDom[0].id;
      var hiddenCard = $(
        e.currentTarget.parentElement.parentElement.parentElement
      )[0];
      this.axios
        .post(`/deleteBlog/${selectedBedDomValue}`)
        .then(data => {
          hiddenCard.style.display = "none";
        })
        .catch(err => {
          console.log(err);
        });
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
        $(e.currentTarget.parentElement.firstElementChild)[0].className ==
        "message"
          ? $(e.currentTarget.parentElement.firstElementChild)[0]
          : $(e.currentTarget.parentElement.parentElement)[0];
      var styleStatus = message.style.display == "none" ? "block" : "none";
      var messageDom = (message.style.display = styleStatus);
    }
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
}

.content {
  font-size: 14px;
  text-align: left;
}

.deleteBlog {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  background: url("../../assets/del.svg") no-repeat;
  background-size: 20px;
}

.edit {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  bottom: 20px;
  background: url("../../assets/edit.svg") no-repeat;
  background-size: 20px;
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
