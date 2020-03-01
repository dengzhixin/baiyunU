<template>
  <div class>
    <top />
    <logo />
    <router-view></router-view>
    
    <bottom />
  </div>
</template>

<script>
import top from "../top";
import logo from "../logo";
import bottom from "../bottom";
export default {
  components: {
    top,
    logo,
    bottom
  },
  data() {
    return {
  
    };
  },

  computed: {
    
  },
  watch: {},
  methods: {
    
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
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

</style>
