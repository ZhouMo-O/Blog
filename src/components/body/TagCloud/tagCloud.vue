<template>
  <div class="tagCloud">
    <span class="tagTitle">云标签:</span>
    <div v-for="tag in tagData" :key="tag._id">
      <span class="tag" @click="$router.push(`blogList${tag._id}`)">{{tag.tagName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tagCloud",
  data() {
    return {
      tagData: []
    };
  },
  methods: {
    async getTagList() {
      const res = await this.axios.get("rest/tags");
      this.tagData = res.data;
    },
    async goTag(id) {
      const tagBlog = await this.axios.get(`tag/blog/${id}`);
      this.$router.push("/blogList");
    }
  },
  created() {
    this.getTagList();
  }
};
</script>

<style>
.tagCloud {
  width: 100%;
  text-align: left;
  float: left;
}

.tagTitle {
  font-weight: 500;

  font-size: 18px;
  border-bottom: 1px solid #a2a2a2;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

/*云标签呈现模块 */
.tag {
  float: left;
  margin: 4px;
  padding: 3px;
  font-size: 10px;
  border: 1px solid #dfdfdf;
  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;
}
</style>