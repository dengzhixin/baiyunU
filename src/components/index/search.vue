<template>
  <div class="content">
    <el-table
      v-if="tableData.list[tableData.currentPage].list"
      :data="tableData.list[tableData.currentPage].list"
      style="width: 100%"
    >
      <el-table-column label="标题">
        <template slot-scope="scope">
          <p @click="handleView(scope.$index, scope.row)">{{ scope.row.title}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
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
export default {
  components: {},
  data() {
    return {
      msg: "Hello " + this.$route.query.searchValue,
      tableData: {
        currentPage: 1,
        list: [],
        page: 1
      }
    };
  },

  computed: {},
  watch: {},
  methods: {
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
    changePage(page) {
      this.tableData.currentPage = page;
    },
    find() {
      this.axios
        .post(
          "/getNewsByKeyword?page=1&keyword=" + this.$route.query.searchValue
        )
        .then(res => {
          window.console.log(res);
          this.tableData.currentPage = 1;
          this.tableData.page = res.data.sumpage;
          //   this.tableData.list[1]=res.data
          this.$set(this.tableData.list, 1, res.data);
          //   this.tableData.splice(1,1,res.data)
        });
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.find();
  },
  // 生命周期 - 创建之前
  beforeCreate() {},
  // 生命周期 - 挂载之前
  beforeMount() {},
  // 生命周期 - 更新之前
  beforeUpdate() {},
  // 生命周期 - 更新之后
  updated() {
    window.console.log(this.$route.query.searchValue);
  },
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
  margin: 20px auto;
  margin-bottom: 80px;
}
.pagination {
  margin: 20px;
}
</style>
