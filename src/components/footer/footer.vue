<template>
  <footer class="container-fluid">
    <p class="along">若无闲事挂心头，便是人间好时节</p>
  </footer>
</template>

<script>
export default {
  name: "Myfooter",
  data() {
    return {};
  }
};
</script>

<style scoped>
footer {
  float: left;
  border: 1px solid black;
  height: 80px;
  color: #ffffff;
  margin-top: 15px;
  text-align: center;
  background: #2f4261;
}
.along {
  margin: 10px auto;
  line-height: 50px;
}
</style>
