<template>
  <div id="app">

    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <el-row :gutter="20">
      <el-col :span="6" :xs="24"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :xs="24"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :sm="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :sm="12"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="10" type="flex" justify="end" align="middle">
      <el-col :span="16">16 span</el-col>
      <el-col :span="8"> 8 span</el-col>
    <el-row>
  </div>
</template>


<script>
export default {
  name: 'gird',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style>
  h1{
   font-family: 'Hiragino Sans GB'
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    background: #ffcc00;
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
