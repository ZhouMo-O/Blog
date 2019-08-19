<template>
  <div class="Index">
    <div class="container-fluid" id="body">
      <!-- 注意 article太小了在1200px也分成一个好了 -->
      <h1 class="animated fadeInUp" id="TopText">周·末</h1>
      <h2 class="animated fadeInUp">{{IndexData.date}}</h2>
    </div>
    <Mybody />
  </div>
</template>

<script>
import Mynav from "./head/nav";

export default {
  name: "Myindex",
  data() {
    return {
      IndexData: {
        date: ""
      }
    };
  },
  components: {
    Mynav
  },
  methods: {
    timeCheck: function() {
      var MyDate = new Date().getHours();
      if (MyDate >= 5 && MyDate <= 10) {
        this.IndexData.date = "早上好,欢迎访问我的小站";
      } else if (MyDate >= 11 && MyDate <= 12) {
        this.IndexData.date = "中午好，欢迎访问我的小站";
      } else if (MyDate >= 13 && MyDate <= 18) {
        this.IndexData.date = "下午好，欢迎访问我的小站";
      } else if (MyDate >= 19 && MyDate <= 22) {
        this.IndexData.date = "晚上好，欢迎访问我的小站";
      } else if (MyDate >= 23 && MyDate <= 4) {
        this.IndexData.date = "晚上好，欢迎访问我的小站，夜深了,注意休息";
      } else {
        consol.log("给您拜个早年吧！");
      }
    }
  },
  mounted: function() {
    this.timeCheck();
  }
};
</script>

<style scoped>
#body {
  background: url("./../assets/zaoshang.jpg");
  position: relative;
  top: -55px;
  background-size: cover;
  height: 100vh;
}

#nav {
  position: absolute;
}

#TopText {
  position: relative;
  top: 30vh;
  font-size: 4rem;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 500;
}

h2 {
  position: relative;
  top: 35vh;
  font-size: 18px;
  font-weight: 550;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  letter-spacing: 0.5vw;
}

.col-md-8 {
  border: 1px solid red;
}

.fadeInUp {
  color: #e8eaed;
  animation-duration: 1.5s; /*动画持续时间*/
  animation-delay: 0; /*动画延迟时间，多个元素，延迟时间要依次累加*/
  animation-iteration-count: 1; /*动画执行次数*/
  animation-fill-mode: both; /*---设置对象状态为动画结束或开始的状态;*/
}
</style>
