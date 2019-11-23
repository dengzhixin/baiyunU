<template>
  <el-menu class>
    <el-container>
      <el-header height="40px" class="header">
        <div class="content">
          <img src="/image/" alt="">
          <marquee behavior="scroll" direction="left" scrollamount="4">{{$store.state.username}}欢迎你使用广东白云学院新闻发布管理系统</marquee>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="left">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              :router="true"
            >
              <el-menu-item index="/admin/manage">
                <i class="el-icon-setting"></i>
                <span slot="title">新闻管理</span>
              </el-menu-item>
              <el-menu-item index="/admin/publish">
                <i class="el-icon-setting"></i>
                <span slot="title">发布新闻</span>
              </el-menu-item>
              <el-menu-item index="/admin/draf">
                <i class="el-icon-star-off"></i>
                <span slot="title">草稿箱</span>
              </el-menu-item>
            </el-menu>
          </el-row>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-menu>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "Hello Vue",
      true:true
    };
  },

  computed: {},
  watch: {},
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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

<style>
.header{
  background-color: #B3C0D1;

}
.content{
  width: 1080px;
  line-height: 40px;
  margin: 0 auto;
}
.left {
  height: calc(100vh - 40px);
  background-color: rgb(84, 92, 100);
}
.main {
  height: calc(100vh - 40px);
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
