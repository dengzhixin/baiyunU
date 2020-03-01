<template>
  <div class="cardBox">
    <div class="card layout-col">
      <i class="el-icon-user"></i>
      <h2>用户名：{{$store.state.userInfo.username}}</h2>
      <h2>角色：{{$store.state.userInfo.role}}</h2>
      <el-button size="small" type="default" @click="updatePassword()">修改密码</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "Hello myself"
    };
  },

  computed: {},
  watch: {},
  methods: {
    updatePassword() {
      this.$prompt("请输入新密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/,
        inputErrorMessage:
          "密码需要有小写字母、大写字母、数字、特殊符号的两种及以上并且密码长度在6到16位"
      })
        .then(({ value }) => {
          let obj = {
            _id: this.$store.state.userInfo.username,
            password: value,
          };

          this.axios
            .post("/admin/updateAdmin", obj)
            .then(res => {
              if (res.data) {
                this.$message({
                  type: "success",
                  message: "密码修改成功,请重新登录"
                });
                this.axios.post("/user/logout").then(() => {
                  this.$store.commit("login", null);
                  this.$router.push({
                    path:'/'
                  })
                });
              } else {
                this.$message({
                  type: "danger",
                  message: "密码修改失败"
                });
              }
            })
            .catch(() => {
              this.$message({
                type: "danger",
                message: "密码修改失败"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
        });
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
.cardBox {
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.card {
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
}
.card h2 {
  margin: 10px;
}
</style>
