<template>
  <div class="main-page_change">
    <div style="height:80px;">
      <a-time-line :items="items" :current="current"></a-time-line>
    </div>
    <!-- 选择客户 -->
    <div v-if="current===1" style="background-color: #ffffff;">
			<div style="height:45px;width:100%;display: flex;">
        <div style="margin-left: 10px;width: 94%; font-weight: bold;font-size: 17px;">
          <div><i class="star"></i>选择客户</div>
        </div>
        <div style="width:6%;height:100%;margin-top: 7px;">
          <el-button class="create-button" @click="create">新建</el-button>
        </div>
      </div>
      <div style="width:100%;height:45px;display:flex;">
        <div class="form-container">
          <label class="form-label">客户编号：</label>
          <div style="width:80%;height:100%;display:flex;">
            <el-select class='' style="width:42%" v-model="customerTypeSelected" placeholder="请选择">
              <el-option v-for="item in customerTypeList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input class="form-input" maxlength="16" placeholder="请输入客户编号" />
          </div>
        </div>
        <div class="form-container" style="width:26%; margin: 0 2%;">
          <label class="form-label">集团客户名称：</label>
          <div style="width:65%;height:100%;display:flex;">
            <el-input class="form-input" maxlength="16" placeholder="请输入客户名称" />
          </div>
        </div>
        <div class="form-container">
          <label class="form-label">证件信息：</label>
          <div style="width:80%;height:100%;display:flex;">
            <el-select class='' style="width:42%" v-model="documentTypeListSelected" placeholder="请选择">
              <el-option v-for="item in documentTypeList" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input class="form-input" maxlength="16" placeholder="请输入证件" />
          </div>
        </div>
      </div>
      <div style="width:100%;height:45px;display:flex;">
        <div style="width:13%;margin:0 auto;">
          <el-button class="create-button" @click="search">查询</el-button>
          <el-button class="cancle-button" @click="reset">重置</el-button>
        </div>
      </div>
      <div>
        <div style="height:400px;overflow-y:auto;">
          <el-table
            :data="tableData"
            highlight-current-row
            ref="selectableTable"
            class="tableRadio"
            @selection-change="selectTable($event)"
            style="width: 100%">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="集团客户编号">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="客户名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="省分客户编码">
            </el-table-column>
            <el-table-column
              prop="address"
              label="cBSS客户编码"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="name"
              label="归属地市">
            </el-table-column>
            <el-table-column
              prop="address"
              label="客户证件号"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="统一社会信用代码"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="address"
              label="是否一般纳税人"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="操作"
              width="60">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="paginationCss">
          <el-pagination
              @current-change="handleCurrentChange"
              :current-page="current"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="total"></el-pagination>
        </div>
      </div>
    </div>
    <div class="footer-btn-wrap">
      <el-button>选择默认账户（可选）</el-button>
      <el-button type="primary">下一步：批量信息录入</el-button>
    </div>
  </div>
</template>
<script>
export default {
	data() {
		return {
      current:1,
			items: [
				{
					step: 1,
					name: "选择客户"
				},
				{
					step: 2,
					name: "选择用户"
				},
				{
					step: 3,
					name: "批量信息录入"
				}
      ],
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
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
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
      }],
      // 搜索传参
			customerTypeList: [
				{
					value: '1',
					label: '集团客户编号'
				}, {
					value: '2',
					label: '集团客户编号2'
				}
			],
			customerTypeSelected: '1',
			documentTypeListSelected: '1',
			documentTypeList: [
				{
					value: '1',
					label: '营业执照'
				}, {
					value: '2',
					label: '身份证'
				}
      ],
      tableSelected: null,
      current: 1,
      pageSize: 10,
      total: 100,
		};
	},
	mounted() {
		let self = this;
  },
  methods:{
    handleCurrentChange (val) {
      this.current = val
    },
    handleClick(rowData){

    },
    // 选择表格数据
    selectTable: function (selection) {
      console.log(selection)
      if (selection.length > 1) {
        this.$refs.selectableTable.clearSelection()
        this.$refs.selectableTable.toggleRowSelection(selection[selection.length - 1])
      }
      this.tableSelected = selection[selection.length - 1]
    },
		// 确认提交按钮
		submit() {

		},
		create(){

		},
		search(){

		},
		reset(){

		}
  }
};
</script>
<style lang="scss">

</style>