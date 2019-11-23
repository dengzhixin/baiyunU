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
      <div class="login">
        <div v-if="$store.state.username==null">
          <h2>BaiYunU</h2>
          <el-input placeholder="请输入内容" class="marginTop10" v-model="username">
            <template slot="prepend">账号：</template>
          </el-input>
          <el-input placeholder="请输入内容" class="marginTop10" v-model="password">
            <template slot="prepend">密码：</template>
          </el-input>
          <center>
          <el-button class="marginTop10" type="primary" @click="login">登录</el-button>
        </center>
        </div>
        
        <ul class="tags">
          <li>校园门户</li>
          <li>青果教务</li>
          <li>图书馆</li>
          <li>信息公开</li>
          <li>采购招标</li>
          <li>人才招聘</li>
          <li>后勤服务</li>
          <li>来校路线</li>
          <li>学校视频</li>
          <li>党建视频</li>
          <li>技师学院</li>
        </ul>
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
      activeName: "hot",
      username: "",
      password: ""
    };
  },

  computed: {},
  watch: {},
  methods: {
    login() {
      this.axios
        .post("/user/login?id=" + this.username + "&password=" + this.password)
        .then(res => {
          window.console.log(res);
          if (
            res.data.msg == this.username + "登录成功" ||
            res.data.msg == "已登录"
          ) {
            this.$store.commit("login", this.username);
            this.$router.push("/admin");
          } else {
            alert(res.data.msg);
          }
        });
    },
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
  display: flex;
  padding: 40px 0px;
  justify-content: space-between;
}
.news {
  width: 50%;
  box-sizing: border-box;
}
.news li {
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.login {
  width: 30%;
  max-width: 350px;
  border-radius: 20px;
  /* border: 2px solid #034567; */
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.1);
}
.tags {
  list-style: none;
  margin: 20px;
}
.tags li {
  width: 50%;
  float: left;
  text-align: center;
}
.marginTop10 {
  margin-top: 10px;
}
</style>
