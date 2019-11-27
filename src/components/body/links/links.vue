<template>
  <div class="link">
    <span class="linksTitle">友情链接:</span>
    <div v-for="tag in tagData" :key="tag._id">
      <span class="links">{{tag.tagName}}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  width: 100%;
  text-align: left;
  margin-top: 5px;
  float: left;
}

.linksTitle {
  font-weight: 500;
  font-size: 18px;
  border-bottom: 1px solid #a2a2a2;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

/*云标签呈现模块 */
.links {
  float: left;
  margin: 4px;
  padding: 3px;
  font-size: 10px;
  border: 1px solid;
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;
}
</style>