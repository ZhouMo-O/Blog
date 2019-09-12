<template>
  <div id="app">
    <Mynav />
    <router-view id="indexView"></router-view>
    <MyFooter />
  </div>
</template>

<script>
import MyFooter from "./components/footer/footer";
import Mynav from "./components/head/nav";
export default {
  name: "app",
  data() {
    return {
      data: { show: true }
    };
  },
  components: { Mynav, MyFooter },
  mounted() {},
  methods: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#indexView {
  /* border: 1px solid red; */
  min-height: 75vh;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
