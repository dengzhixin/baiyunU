<template>
  <div class>
    <div class="top">
      <div class="content">
        <div class="left">学校代码：10822</div>
        <div class="right">
          <el-input placeholder="请输入内容" v-model="searchValue" @keyup.enter.native="toSearch" size="small">
            <el-button slot="append" icon="el-icon-search" @click="toSearch"></el-button>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchValue: ""
    };
  },

  computed: {},
  watch: {},
  methods: {
      toSearch(){
        window.location.href="/#/search?searchValue="+this.searchValue
        // this.$router.push({
        //   path:'/search',
        //   query:{
        //     searchValue:this.searchValue
        //   }
        // })
      }
  },
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
<style scoped>
.top {
  width: 100%;
  height: 45px;
  background-color: #014165;
}
.content {
  width: 80vw;
  max-width: 1080px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.content .left {
  width: 200px;
  height: 100%;
  background-color: #3b89ad;
  line-height: 45px;
  color: white;
  text-align: center;
}
.content .right{
    width: 200px;
    margin-left: 20px
}
</style>
