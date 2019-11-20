<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/manage' }">新闻管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/publish' }">发布</el-breadcrumb-item>
      <el-button size="mini" type="success" class="right" icon="el-icon-check" @click="publish">立即发布</el-button>
      <el-button
        size="mini"
        type="warning"
        class="right"
        icon="el-icon-star-off"
        @click="saveDraf"
      >保存为草稿</el-button>
    </el-breadcrumb>
    <div style="margin:10px"></div>
    <el-row>
      <el-col :span="20">
        <el-input v-model="news.title" placeholder="新闻标题"></el-input>
      </el-col>
      <el-col :span="4">
        <el-select v-model="news.type" popper-class="selector">
          <el-option value="热点新闻">热点新闻</el-option>
          <el-option value="新闻快讯">新闻快讯</el-option>
          <el-option value="媒体白云">媒体白云</el-option>
          <el-option value="学校通知">学校通知</el-option>
        </el-select>
      </el-col>
    </el-row>

    <wangeditor :catchData="catchData" />
  </div>
</template>

<script>
import newsTypeAdapter from "../../tool/newsTypeAdapterToEng.js";

import wangeditor from "../tool/wangeditor";
export default {
  components: {
    wangeditor
  },
  data() {
    return {
      news: {
        title: "",
        content: "",
        type: "热点新闻"
      }
    };
  },

  computed: {},
  watch: {},
  methods: {
    catchData(newsContent) {
      this.news.content = newsContent;
    },
    publish() {
      this.axios
        .post("/addNews", {
          title: this.news.title,
          iconUrl: "",
          content: this.news.content,
          type: newsTypeAdapter(this.news.type),
          statu: 1
        })
        .then(res => {
          if (res.data) {
            this.$confirm("发布成功，立刻去看这条新闻", "提示", {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            })
              .then(() => {
                this.$router.push({
                  path:'/readNews',
                  query:{
                    id:res.data
                  }
                })
              })
              .catch(() => {
                this.$router.push({
                  path:'/admin/manage',
                  query:{
                    id:res.data
                  }
                })
              });
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    saveDraf() {
      this.axios
        .post("/addNews", {
          title: this.news.title,
          iconUrl: "",
          content: this.news.content,
          type: newsTypeAdapter(this.news.type),
          statu: 0
        })
        .then(res => {
          window.console.log(res);
          if (res.data == true) {
            this.this.$message({
              type: "success",
              message: "保存到草稿箱"
            });
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.axios
      .post("/getNewsById?id=" + "5dd3e02513caa943efa0ffaa")
      .then(res => {
        window.console.log(res);
      })
      .catch(err => {
        window.console.log(err);
      });
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
.right {
  float: right;
  padding: 10px;
  margin-right: 10px;
}
</style>
