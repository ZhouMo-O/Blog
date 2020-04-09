<template>
  <div class>
    <el-card shadow="always" class="box-card about">
      <h4>关于:</h4>
      <el-divider></el-divider>
      <p>关于博客:</p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;我自学前端的时候，还是jq时代，前端的科技树还是点的各种动效。
        后面时代突然就变了，就像目睹了一辆末班车，然后我的下一站是前端工程化，es6。
        那时候公司业务也是繁忙，学Vue也是断断续续的，文档看的七七八八，一直没有做过什么项目。后面来了个小项目，在公司就我一个前端的情况下也没敢上Vue,因为确实不熟悉。
        一直用的easyUi，jq，和handlebars这些技术。
      </p>
      <p>
        &nbsp;&nbsp;&#160;&#160;后来过了一遍es6，vue，node，mongodb，之后决定就以此来构建自己的技术栈，开发一个自己的项目：个人博客sunset。开发的过程无疑是艰辛的，遇到了各种各样的问题，期间一度备受打击，
        但是从未想过放弃，一直在坚持。
      </p>
      <p>
        &#160;&#160; &nbsp;&nbsp;勉强算是功夫不负有心人把，当初预设的功能80%都完成了，但是呢也有很多的问题，前后端分离不彻底，技术栈混乱，没有采用ssr，
        seo差，性能差，工程管理混乱等问题,所以打算重做，具体请看=>
        <a
          href="http://www.blog5.net.cn/showBlog/5e7d92729918e22ed448cfa9"
        >个人博客重构计划</a>。
        本来也是不打算在更新任何功能的，但是就想以此来为这个博客做一个收尾吧，毕竟从这里开始，我的水平有了很大的提升。
      </p>
      <br />
      <p>关于我：</p>
      <p>
        &#160;&#160;&#160;&#160;一个自学前端新人，目标是成为全栈选手，终极目标是希望成为一名产品经理。因为之前公司人少，
        我除了编码测试之外，还要和用户和开发方打交道。所以算是学习了如何跟进项目，感觉也蛮有意思的，所以我并不讨厌产品经理，反而我希望能有个靠谱的产品经理，这种感觉只有当过孤儿院院长的人才会懂。
      </p>
      <p>&#160;&#160;&#160;&#160;如果你喜欢博客里的一些内容，或者你想和我交个朋友，聊聊天，交流一下厨艺。那就加我的WeChat吧，期待孤岛上我的能收到你的漂流瓶。</p>
      <div class="wechatImg">
        <img src="http://www.blog5.net.cn/uploads/ea9b9f805999898b00540bd4a251dc20" alt />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  text-align: left;
}
.about {
  width: 90vw;
  min-height: 90vh;
  margin: 30px auto;
}

.wechatImg {
  float: right;
  margin: 0 auto;
}
</style>