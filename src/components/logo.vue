<template>
  <div class="logo">
    <router-link to="/"><img src="/image/8.png" alt /></router-link>
    <div class="texts">
      <div class="text text2">敦 品 励 学 求 是 笃 行</div>
      <div class="text text1">理 想 职 业 从 白 云 开 始</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "Hello Vue"
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
<style scoped>
.logo {
  width: 1080px;
  height: 60px;
  margin: 20px auto;
  padding: 20px;
}
.logo img {
  width: auto;
  height: 60px;
  float: left;
}
.logo .texts {
  position: relative;
}
@keyframes textsAnimation {
   from{
      width: 0;
   }
   to{
      width: 200px;
   }
}
.logo .text {
  position: absolute;
  right: 0;
  color: #034567;
  font-weight: 700;
  float: right;
  line-height: 80px;
}

.logo .text1 {
  animation: textAnimation1 3s infinite;
}
.logo .text2 {
  animation: textAnimation2 3s infinite;
  
}
@keyframes textAnimation1 {
  from {
    opacity: 1;
    /* display: block; */
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
    /* display: none */
  }
}
@keyframes textAnimation2 {
  from {
    opacity: 0;
    /* display: block; */
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
    /* display: none */
  }
}
</style>
