<template>
  <div class>
    <div class="content">
      <el-button size="mini" type="default" @click="dialoadAddView= true">添加新管理员</el-button>
      <el-dialog class="dialog-addUser" title="添加新管理员" :visible.sync="dialoadAddView">
        <div class="layout-row">
          <h3>用户名</h3>
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </div>
        <div class="layout-row">
          <h3>密码</h3>
          <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
        </div>
        <div class="layout-row">
          <h3>角色</h3>
          <el-select v-model="role" placeholder="请选择管理员角色">
            <el-option label="新闻管理员" value="newsadmin"></el-option>
            <el-option label="主管理员" value="admin"></el-option>
          </el-select>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialoadAddView = false">取 消</el-button>
          <el-button type="primary" @click="handleAdd">确 定</el-button>
        </div>
      </el-dialog>
      <el-table
        v-if="$store.state.users.list[$store.state.users.currentPage]"
        :data="$store.state.users.list[$store.state.users.currentPage].list"
        style="width: 100%"
      >
        <el-table-column prop="_id" label="用户名"></el-table-column>
        <el-table-column prop="password" label="密码(*)"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="default" @click="handleEdit(scope.$index, scope.row)">修改密码</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          layout="prev, pager, next"
          :page-size="1"
          :current-page="$store.state.users.currentPage"
          :total="$store.state.users.sumPage"
          @current-change="changePage"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "Hello 管理员管理",
      dialoadAddView: false,
      username: "",
      password: "",
      role: "newsadmin"
    };
  },

  computed: {},
  watch: {},
  methods: {
    handleAdd() {
      let obj = {
        _id: this.username,
        password: this.password,
        role: this.role
      };
      this.axios
        .post("/admin/addAdmin", obj)
        .then(res => {
          window.console.log(res);
          if (res.data.msg == "添加成功") {
            this.$message({
              type: "success",
              message: "添加成功"
            });
            this.dialoadAddView = false;
            this.$store.commit("addUser",obj)
            this.username=""
            this.password=""
          } else {
            this.$message({
              type: "danger",
              message: res.data.msg
            });
          }
        })
        .catch(() => {});
    },
    handleEdit(index, row) {
      this.$prompt("请输入密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/,
        inputErrorMessage:
          "密码需要有小写字母、大写字母、数字、特殊符号的两种及以上并且密码长度在6到16位"
      })
        .then(({ value }) => {
          let obj = {
            _id: row._id,
            password: value
          };

          this.axios
            .post("/admin/updateAdmin", obj)
            .then(res => {
              if (res.data) {
                this.$message({
                  type: "success",
                  message: "密码修改成功"
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
    },
    changePage(page) {
      this.$store.commit("setUsersPage", page);
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let res = this.$store.dispatch("requesUsers", 1);
    window.console.log(res);
    // res.then(() => {
    //    window.console.log(this.$store.state.users)
    // });
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
<style>
.dialog-addUser h3 {
  width: 100px;
  margin-bottom: 20px;
}
.el-select {
  width: 100%;
}
</style>
