<template>
  <div class="container-fluid articleBox">
    <div class="row center">
      <Articles changeClass="col-xl-6" />
      <Aside />
    </div>
  </div>
</template>

<script>
import Articles from "./article";
import Aside from "./aside";
export default {
  name: "Mybody",
  components: {
    Articles,
    Aside
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/*最外层*/
.articleBox {
  margin: 0 auto;
  min-height: 200px;
  margin-top: 1vw;
  background: #ffffff;
}
.col-md-8 {
  margin-top: 5px;
}
.center {
  max-width: 1500px;
  /* border: 1px solid red; */
  margin: 0 auto;
}
</style>
