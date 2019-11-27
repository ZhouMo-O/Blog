<template>
  <div class="link">
    <span class="linksTitle">友情链接:</span>
    <div v-for="link of tagData">
      <a class="links" target="_blank" :href="link.link">{{link.linksIntro}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagData: [],
      link: "12312312"
    };
  },
  methods: {
    async getTagList() {
      const res = await this.axios.get("rest/links");
      this.tagData = res.data;
    }
  },
  created() {
    this.getTagList();
  }
};
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
  border: 1px solid #e3e3e5;
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 1px -5px -15px #e3e3e5;
}
</style>