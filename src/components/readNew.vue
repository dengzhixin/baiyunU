<template>
  <div class ref="box">
    <top />
    <logo />
    <div class="content">
      <center>
        <h2 v-text="news.title"></h2>
        <p v-text="'发布时间：'+news.date"></p>
      </center>

      <p v-html="news.content"></p>
    </div>
    <bottom />
  </div>
</template>

<script>
import top from "./top";
import logo from "./logo";
import bottom from "./bottom";
export default {
  components: {
    top,
    logo,
    bottom
  },
  data() {
    return {
      msg: "Hello Vue",
      news: {}
    };
  },

  computed: {},
  watch: {},
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

    try {
      this.news = this.$store.state.news[this.$route.query.type].list[
        this.$route.query.page
      ][this.$route.query.index];
    } catch {
      this.axios.post("/getNewsById?id=" + this.$route.query.id).then(res => {
        this.news = res.data;
      });
    }

  },
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {},
  // 生命周期 - 销毁之前
  beforeDestroy() {},
  // 生命周期 - 销毁完成
  destroyed() {}
};
</script>
<style scoped>
.content {
  width: 80vw;
  max-width: 1080px;
  min-height: 80vh;
  margin: 0 auto;
}
</style>
