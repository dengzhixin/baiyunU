<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/manage' }">新闻管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/publish' }">编辑</el-breadcrumb-item>
      <el-button
        size="mini"
        type="success"
        class="right"
        icon="el-icon-check"
        @click="updateNew"
      >立即更新</el-button>
    </el-breadcrumb>
    <div style="margin:10px"></div>
    <el-row>
      <el-col :span="20">
        <el-input v-model="news.title" placeholder="新闻标题"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="newType" @change="selectorChange" popper-class="selector">
          <el-option value="hot">热点新闻</el-option>
          <el-option value="quick">新闻快讯</el-option>
          <el-option value="media">媒体白云</el-option>
          <el-option value="notic">学校通知</el-option>
        </el-select>
      </el-col>
    </el-row>
    <wangeditor :catchData="catchData" :setContent="news.content" />
  </div>
</template>

<script>
import wangeditor from "../tool/wangeditor";
import newsTypeAdapterToChina from "../../tool/newsTypeAdapterToChina.js";
// import newsTypeAdapterToEng from "../../tool/newsTypeAdapterToEng.js";
export default {
  components: {
    wangeditor
  },
  data() {
    return {
      msg: "Hello Vue",
      news: {
        content: ""
      }
    };
  },

  computed: {
    newType() {
      return newsTypeAdapterToChina(this.news.type);
    }
  },
  watch: {},
  methods: {
    selectorChange(newtype) {
      this.news.type = newtype;
    },
    updateNew() {
      this.axios
        .post("/updateNewsById", {
          _id: this.news._id,
          iconUrl: "",
          title: this.news.title,
          content: this.news.content,
          type: this.news.type
        })
        .then(res => {
          window.console.log(res);
          if (res.data == true) {
            this.$message({
              type: "success",
              message: "更新成功"
            });
            this.$router.push({
              path: "/readNews",
              query: {
                id: this.news._id
              }
            });
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    catchData(news) {
      this.news.content = news;
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let query = this.$route.query;
    this.news = this.$store.state.news[query.type].list[query.page][
      query.index
    ];
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.right {
  float: right;
  padding: 10px;
  margin-right: 10px;
}
</style>
