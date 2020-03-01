<template>
  <div class>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/manage' }">新闻管理</el-breadcrumb-item>
      <el-select v-model="type" @change="changeNewType" class="typeSelecter">
        <el-option value="热点新闻">热点新闻</el-option>
        <el-option value="新闻快讯">新闻快讯</el-option>
        <el-option value="媒体白云">媒体白云</el-option>
        <el-option value="学校通知">学校通知</el-option>
      </el-select>
    </el-breadcrumb>
    <div style="margin:10px"></div>

    <el-table :data="tableData.list[tableData.currentPage]" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="type" width="60" label="类型"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="success" @click="handleView(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini" type="default" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        layout="prev, pager, next"
        :page-size="1"
        :current-page="tableData.currentPage"
        :total="tableData.page"
        @current-change="changePage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import newsTypeAdapter from "../../tool/newsTypeAdapterToEng.js";
export default {
  components: {},
  data() {
    return {
      type: "热点新闻",
      tableData: {
        currentPage:1,
        list:[],
        page:1
      },
    };
  },

  computed: {},
  watch: {},
  methods: {
    changePage(page) {
      let newsType = newsTypeAdapter(this.type);
      let that =this
      if (!this.$store.state.news[newsType].list[page]) {
        this.requestNews(10, page, newsType, () => {
          this.$store.state.news[newsType].currentPage=page
          that.tableData=this.$store.state.news[newsType] 
        });
      } else {
          that.tableData.currentPage=page
      }
    },
    changeNewType() {
      let newsType = newsTypeAdapter(this.type);
      if (this.$store.state.news[newsType].list.length < 1) {
        this.requestNews(10, 1, newsType, () => {
          this.tableData = this.$store.state.news[newsType];
        });
      } else {
        this.tableData = this.$store.state.news[newsType];
      }
    },
    requestNews(pageSize, page, type, fallback) {
      let obj = {
        pageSize: pageSize,
        page: page,
        type: type
      };

      if (!this.$store.state.news[type].list[page]) {
        let res = this.$store.dispatch("requestNews", obj);
        res.then(() => {
          fallback();
        });
      } else {
        fallback();
      }
    },
    handleView(index, row) {
      this.$router.push({
        path: "/readNews",
        query: {
          type: row.type,
          index: index,
          page: this.tableData.currentPage,
          id: row._id
        }
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/admin/edit",
        query: {
          type: row.type,
          index: index,
          page: this.tableData.currentPage,
          id: row._id
        }
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
              type: row.type,
              index: index,
              currentPage: this.tableData.currentPage
            });
            this.tableData.list.splice(index, 1);
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
    typeIdToText(type) {
      switch (type) {
        case 0:
          return "热点新闻";
        case 1:
          return "校园快讯";
        case 2:
          return "媒体白云";
        case 3:
          return "媒体白云";
      }
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.changeNewType();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.console.log(this.tableData)
    // this.tableData = this.news.hot;
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
.pagination {
  float: right;
}
.el-select{
  width: auto;
}
.typeSelecter {
  float: right;
}
</style>
