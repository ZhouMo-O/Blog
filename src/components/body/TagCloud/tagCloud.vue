<template>
  <div class="tagCloud">
    <span class="tagTitle">云标签</span>
    <div class="tag" v-for="tag in tagData" :key="tag._id">
      <span>{{tag.tagName}}</span>
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
    }
  },
  created() {
    this.getTagList();
  }
};
</script>

<style>
.tagCloud {
  border-bottom: 1px solid #e3e3e5;
  text-align: left;
}

/*云标签呈现模块 */
.tag > span {
  float: left;
  margin: 4px;
  padding: 3px;
  font-size: 10px;
  border: 1px solid #dfdfdf;
  background: #ffffff;
  border-radius: 5px;
}
</style>