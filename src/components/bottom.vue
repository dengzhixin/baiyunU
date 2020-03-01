<template>
  <div class="bottom">
    <div class="content">
      <el-row>
        <el-col class="department" :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
          <h2>职能部门</h2>
          <ul>
            <li>教务处</li>
            <li>实践教学中心</li>
            <li>发展规划处</li>
            <li>教学质量监测与评估中心</li>
            <li>科研处</li>
            <li>人事处</li>
            <li>办公室</li>
            <li>学风建设</li>
            <li>财务部</li>
            <li>策划推广部</li>
            <li>学生处</li>
            <li>国际交流处</li>
            <li>招生办</li>
            <li>就业指导中心</li>
            <li>教育技术中心</li>
            <li>校企合作办公室</li>
            <li>总务处</li>
            <li>基建处</li>
            <li>图书馆</li>
            <li>信息发展中心</li>
            <li>教师发展中心</li>
            <li>物资采购部</li>
            <li>保卫处</li>
          </ul>
                                
        </el-col>
        <el-col class="department" :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <h2>党群部门</h2>
               
          <ul>
            <li>党委办</li>
            <li>统战部</li>
            <li>组织部</li>
            <li>宣传部</li>
            <li>关工委</li>
            <li>武装部</li>
        
          </ul>
                                
        </el-col>
      </el-row>
      <div class="dashBorder"></div>
      <el-row class="info">
        <el-col  :xs="24" :sm="24" :md="20" :lg="20" :xl="20">
          <img class="logo" src="/image/logo.png" alt="">
          <p>招生咨询：020-36093333 传真：020-36095259 邮政编码：510450</p>
          <p>西校区地址：广东省广州市白云区江高镇学苑路1号</p>
          <p>北校区地址：广州市白云区钟落潭镇九佛西路280号</p>
          <p>粤公网安备 44011102000160号</p>
          <p>ICP备案号：粤ICP备15092391号-2</p>
        </el-col>
        <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          <h2>官方公众号</h2>
          <img class="wechat" src="http://www.baiyunu.edu.cn/templates/net/images/gzh.jpg" alt="">
        </el-col>
      </el-row>
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
.bottom {
  width: 100%;
  /* height: 560px; */
  background-color: #034567;
  color: white;
  padding-bottom: 20px;
}
.content {
  width: 80vw;
  max-width: 1080px;
}
.content p {
  text-align: left;
}
.department{
  padding: 20px 0px;

}
.department ul{
list-style: none;
}
.department ul li{
  float: left;
  padding-right:8px;
  padding-bottom: 6px;
  color: #7b7d8a
}
.info{
  border-top: 2px dashed #004f7b;
  padding-top: 25px;
}
.info .logo{
  height: 40px
}
.wechat{
height: 150px;
}
</style>
