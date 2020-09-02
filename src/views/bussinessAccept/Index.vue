<template>
	<div class='bussiness-total app-main'>
		<!-- 顶部 -->
		<div style="height:45px;width:100%">
			<!-- :active="1":space="200"  align-center -->
			<div style="width:60%;">
				<el-steps :active="active" finish-status="success">
					<el-step title="选择客户"></el-step>
					<div style="width: 400px; height: 20px;    position: absolute; left: 30%; border-bottom: 1px solid rgb(218, 218, 218);"></div>
					<el-step style="    max-width: 50%; position: absolute; left: 64%;" title="批量信息录入"></el-step>
				</el-steps>
			</div>

		</div>
		<!--  -->
		<!-- 中间部分 -->
		<div style="width:98%;margin-left:1%; background-color: #ffffff;" :class=" active=='0' ? 'middle-height-min' : 'middle-height-max'">
			<!--  -->
			<div v-if="active=='0'" style="width:100%;height:100%;    padding: 10px 20px ">
				<div style="height:45px;width:100%;display: flex;">
					<div style=" width: 94%; font-weight: bold;font-size: 17px;">
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
						<label class="form-label" style="width: 36%;">集团客户名称：</label>
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

			</div>
			<div v-else-if="active=='1'">

			</div>

		</div>
		<!-- 底部部分 -->
		<div style="height:60px;background-color: #ffffff;width:98%;margin-left:1%;margin-top: 20px;">
			<div v-if='active==0' style="height:100%;width:100%;display: flex;">
				<el-button class='step-button-white' style="margin-top: 12px; margin-left: 70%;" @click="chooseDefaultUser">选择默认账户(可选)</el-button>
				<el-button class='step-button-orange' style="margin-top: 12px;" @click="next">下一步:批量信息录入</el-button>
			</div>
			<div v-else style="height:100%;width:100%;display: flex;">
				<el-button style="margin-top: 12px; margin-left: 70%;" @click="next">上一步:选择客户</el-button>
				<el-button style="margin-top: 12px;" @click="submit">确认提交</el-button>
			</div>

		</div>

	</div>
</template>
<script>
import './bussinessAccept.scss';


export default {
	data() {
		return {
			active: 0,
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
			]
			// 增加传参
		}
	},
	methods: {
		next() {
			this.active = this.active == 0 ? 1 : 0;
		},
		// 选择默认账户(可选)
		chooseDefaultUser() {

		},
		// 确认提交按钮
		submit() {

		}
	}
}
</script>