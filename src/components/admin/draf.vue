<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/manage' }">新闻管理</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/draf' }">草稿</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin:10px"></div>
    <el-table
      :data="$store.state.news.draf.list[$store.state.news.draf.currentPage]"
      border
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="type" width="60" label="类型"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleView(scope.$index, scope.row)">预览</el-button>
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="success" @click="handleSend(scope.$index, scope.row)">发布</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination layout="prev, pager, next" :total="tableData.page"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      msg: "Hello Vue",
      tableData: null
    };
  },

  computed: {},
  watch: {},
  methods: {
    handleSend(index, row) {
      this.axios
        .post("/updateNewsById", {
          _id: row._id,
          statu: 1
        })
        .then(res => {
          if (res.data == true) {
            this.$message({
              type: "success",
              message: "发布成功"
            });
            this.$store.commit("deleteItem", {
              type: "draf",
              index: index,
              currentPage: this.$store.state.news.draf.currentPage
            });
            this.$router.push({
              path: "/readNews",
              query: {
                id: row._id
              }
            });
          }
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该新闻, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios.post("/deleteNewsById?id=" + row._id).then(() => {

            this.$store.commit("deleteItem", {
              type: "draf",
              index: index,
              currentPage: this.$store.state.news.draf.currentPage
            });
            this.$message({
              type: "success",
              message: "删除成功"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleView(index, row) {
      this.$router.push({
        path: "/readNews",
        query: {
          type: "draf",
          index: index,
          page: this.$store.state.news.draf.currentPage,
          id: row._id
        }
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/admin/edit",
        query: {
          type: "draf",
          page: this.$store.state.news.draf.currentPage,
          index: index,
          id: row._id
        }
      });
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.tableData = this.$store.state.news.draf;
    if (this.$store.state.news.draf.list.length == 0) {
      this.axios.get("/getDraft?page=" + 1).then(res => {
        this.$store.state.news.draf.list[1] = res.data.list;
        this.$store.state.news.draf.page = res.data.sumpage;
      });
    } else {
      this.tableData = this.$store.state.news.draf.list[1];
    }
  },
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
.pagination {
  float: right;
}
</style>
