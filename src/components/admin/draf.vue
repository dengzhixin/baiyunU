<template>
<div class=''>
   <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/admin/manage' }">新闻管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/admin/draf' }">草稿</el-breadcrumb-item>
        </el-breadcrumb>
   <div style="margin:10px"></div>
    <el-table :data="tableData.list[tableData.currentPage]" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="tittle" label="标题"></el-table-column>
      <el-table-column prop="type" width="60" label="类型"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">发布</el-button>
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
data () {
   return {
      msg: 'Hello Vue',
      tableData: null
      }
},

computed: {},
watch: {},
methods: {},
// 生命周期 - 创建完成（可以访问当前this实例）
created () {
  this.tableData = this.$store.state.news.draf;
},
// 生命周期 - 挂载完成（可以访问DOM元素）
mounted () {},
// 生命周期 - 创建之前
beforeCreate () {},
// 生命周期 - 挂载之前
beforeMount () {},
// 生命周期 - 更新之前
beforeUpdate () {},
// 生命周期 - 更新之后
updated () {},
// 生命周期 - 销毁之前
beforeDestroy () {},
// 生命周期 - 销毁完成
destroyed () {}
}
</script>
<style>
.pagination{
  float: right;
}
</style>
