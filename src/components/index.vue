<template>
  <div class>
    <top />
    <logo />
    <el-carousel :interval="4000" type="card" height="320px" indicator-position="none">
      <el-carousel-item v-for="item in 7" :key="item">
        <img :src="'/image/'+item+'.jpg'" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <div class="news">
        <el-tabs v-model="activeName" @tab-click="tabChange">
          <el-tab-pane label="热点新闻" name="hot">
            <ul>
              <li
                v-for="(news,index) in $store.state.news.hot.list[1]"
                :key="news._id"
                v-text="news.title"
                @click="readNews(index,news)"
              ></li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="校园快讯" name="quick">
            <ul>
              <li
                v-for="(news,index) in $store.state.news.quick.list[1]"
                :key="news._id"
                v-text="news.title"
                @click="readNews(index,news)"
              ></li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="媒体白云" name="media">
            <ul>
              <li
                v-for="(news,index) in $store.state.news.media.list[1]"
                :key="news._id"
                v-text="news.title"
                @click="readNews(index,news)"
              ></li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="学校通知" name="notic">
            <ul>
              <li
                v-for="(news,index) in $store.state.news.notic.list[1]"
                :key="news._id"
                v-text="news.title"
                @click="readNews(index,news)"
              ></li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
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
      activeName: "hot"
    };
  },

  computed: {},
  watch: {},
  methods: {
    tabChange(tab) {
      let newsType = tab.name;
      if (this.$store.state.news[newsType].list.length < 1) {
        this.$store.dispatch("requestNews", {
          pageSize: 10,
        page: 1,
        type: newsType
        });
        // this.requestNews(10, 1, newsType, () => {
        // });
      } 
    },
    readNews(index, news) {
      this.$router.push({
        path: "/readNews",
        query: {
          type: news.type,
          index: index,
          page: 1,
          id: news._id
        }
      });
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (!this.$store.state.news.hot.list[1]) {
      let obj = {
        pageSize: 10,
        page: 1,
        type: "hot"
      };
      this.$store.dispatch("requestNews", obj);
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
  margin: 0 auto;
}
.news {
  padding: 40px 0px;
  width: 60%;
  box-sizing: border-box;
}
.news li {
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.news li:hover {
  /* background-color: rgba(0, 0, 0, 0.1); */
}
</style>
