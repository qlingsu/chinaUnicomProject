<template>
	<div class='bussiness-total app-main'>
		<!-- 顶部 -->
		<div style="height:45px;width:100%">
			<!-- :current="1":space="200"  align-center -->
			<!-- <div style="width:60%;">
				<el-steps :current="current" finish-status="success">
					<el-step title="选择客户"></el-step>
					<div style="width: 400px; height: 20px;    position: absolute; left: 30%; border-bottom: 1px solid rgb(218, 218, 218);"></div>
					<el-step style="    max-width: 50%; position: absolute; left: 64%;" title="批量信息录入"></el-step>
				</el-steps>
			</div> -->
			<a-time-line :items="items" :current="current"></a-time-line>
		</div>
		<!--  -->
		<!-- 中间部分 -->
		<div style="width:98%;margin-left:1%; " :class=" current=='1' ? 'middle-height-min' : 'middle-height-max'">
			<!--  -->
			<div v-if="current=='1'" style="width:100%;height:100%;  background-color: #ffffff;  padding: 10px 20px ">
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
					<div style="width:200px;margin:0 auto;">
						<el-button class="create-button" @click="search">查询</el-button>
						<el-button class="cancle-button" @click="reset">重置</el-button>
					</div>

				</div>
				<div class='tableContent'>
					<el-table class="table-pc" ref="multipleTable" :data="customerList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" :header-cell-style="{
                                    'background-color': '#F7F6FB',
                                    'color': 'black',
                                    'text-align': 'center' }">
						<!-- type="selection" -->
						<!-- <el-table-column  width="55" align="center">
							<template>
								<div> 
									<div>

									</div>
								</div>
							</template>
						</el-table-column> -->
						<el-table-column width="45" type="selection" align="center"></el-table-column>
						<el-table-column prop="customerId" label="客户集团编号" width="180" show-overflow-tooltip align="center"></el-table-column>
						<el-table-column prop="name" label="客户名称" width="150" show-overflow-tooltip align="center"></el-table-column>
						<el-table-column prop="provinceId" label="省份客户编码" width="150" show-overflow-tooltip align="center"></el-table-column>
						<el-table-column prop="cbssCustomerId" label="cBSS客户编码" width="150" show-overflow-tooltip align="center"></el-table-column>
						<el-table-column prop="city" label="归属城市" width="150" align="center"></el-table-column>
						<el-table-column prop="certificateNumber" label="客户证件号" width="180" show-overflow-tooltip align="center"></el-table-column>
						<el-table-column prop="socialCreditCode" label="统一社会信用代码" align="center"></el-table-column>
						<el-table-column prop="taxpayer" label="是否一般纳税人" align="center"></el-table-column>
						<el-table-column label="操作" align="center">
							<template slot-scope="scope">
								<div @click="customerDetail(scope.row)" style="color:rgb(65,161,254); cursor: pointer;letter-spacing: 3px;"><span>详情</span></div>
							</template>
						</el-table-column>
					</el-table>

				</div>
				<div class="pagination">
					<el-pagination background align="right" layout="prev, pager, next" :total="total"></el-pagination>
				</div>

			</div>
			<!-- 批量信息录入 -->
			<div v-else-if="current =='2'">
				<!-- 客户信息 -->
				<div style="height:85px;width:100%;padding: 10px 20px;background-color: #ffffff;">
					<div style=" width: 100%; font-size: 17px;">客户信息</div>
					<div style="width:100%;margin-top: 7px;">
						<el-row :gutter="40">
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="width:100%;height:100%;margin-left: 50px;">
										集团客户名称：<span style="color:rgb(65,161,254)">{{selectedCustomer.name}}</span>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="width:100%;height:100%;margin-left: 50px;">
										集团客户编号：{{selectedCustomer.customerId}}
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="width:100%;height:100%;margin-left: 50px;">
										集团归属地：{{selectedCustomer.city}}
									</div>
								</div>
							</el-col>

						</el-row>
					</div>
				</div>

				<!-- 客户联系人/经办人/代理人 -->
				<div style=" height: 150px; width: 100%; margin-top: 10px; background-color: #ffffff;padding: 10px 20px;">
					<div style=" width: 100%; font-size: 17px;display:flex">
						<div style="width:65%">客户联系人/经办人/代理人信息</div>
						<div style="width:35%;display:flex">
							<el-checkbox-group v-model="personerCheckList">
								<el-checkbox label="客户联系人信息"></el-checkbox>
								<el-checkbox label="经办人信息"></el-checkbox>
								<el-checkbox label="代理人信息"></el-checkbox>
							</el-checkbox-group>
						</div>
					</div>
					<!-- 画中间显示的选择人的tab -->
					<div style="display: flex;margin-top: 10px;border-bottom: 1px solid #f1f1f1;">
						<div :class='selectCustomerType == "1" ? "selectedCustomerType" : "unselectedCustomerType" '>客户联系人信息</div>
						<div :class='selectCustomerType == "1" ?  "unselectedCustomerType" :  "selectedCustomerType"'>经办人信息</div>
					</div>
					<!--  -->
					<div style="width:100%;margin-top: 7px;">
						<el-row :gutter="10">
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>联系人姓名：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-input class="form-input" maxlength="16" placeholder="请输入客户名称" />
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>联系人电话：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-input class="form-input" maxlength="16" placeholder="请输入客户名称" />
										</div>
									</div>

								</div>
							</el-col>
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>联系人邮箱：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-input class="form-input" maxlength="16" placeholder="请输入客户名称" />
										</div>
									</div>
								</div>
							</el-col>

						</el-row>
					</div>
				</div>
				<!-- 发展人信息 -->
				<div style=" height: 200px; width: 100%; margin-top: 10px; background-color: #ffffff;padding: 10px 20px;">
					<div style=" width: 100%; font-size: 17px;display:flex">
						<div style="width:65%">发展人信息</div>
					</div>
					<div style="width:100%;margin-top: 7px;">
						<el-row :gutter="10">
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>发展人渠道名称：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-select class='' v-model="customerTypeSelected" placeholder="请选择">
												<el-option v-for="item in customerTypeList" :key="item.value" :label="item.label" :value="item.value">
												</el-option>
											</el-select>
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>发展人姓名：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-input class="form-input" maxlength="16" placeholder="发展人姓名" />
										</div>
									</div>

								</div>
							</el-col>
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>发展人渠道ID：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-input class="form-input" maxlength="16" placeholder="发展人渠道ID" />
										</div>
									</div>
								</div>
							</el-col>

						</el-row>
						<el-row :gutter="10">
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>发展人员工ID：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-input class="form-input" maxlength="16" placeholder="发展人员工ID" />
										</div>
									</div>
								</div>
							</el-col>
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>发展人联系方式：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-input class="form-input" maxlength="16" placeholder="发展人联系方式" />
										</div>
									</div>

								</div>
							</el-col>
							<el-col :span="8">
								<div class="grid-content bg-purple">
									<div style="display:flex;margin-left: 50px;">
										<label class="form-label" style="line-height: 34px;"><i class="star"></i>是否发送短信：</label>
										<div style="width:65%;height:100%;display:flex;">
											<el-select class='' v-model="messageFlag" placeholder="请选择">
												<el-option v-for="item in messageFlagList" :key="item.value" :label="item.label" :value="item.value">
												</el-option>
											</el-select>
										</div>
									</div>
								</div>
							</el-col>

						</el-row>
					</div>
				</div>
				<!-- 附件及备注  -->
				<!-- 这里设置有附件的时候的高度自动 -->
				<div style=" height: 120px; width: 100%; margin-top: 10px; background-color: #ffffff;padding: 10px 20px;">
					<div style=" width: 100%; font-size: 17px;display:flex">
						<div style="width:65%">附件及备注</div>
					</div>
					<div style="width: 100%;display: flex;margin-top:7px;line-height: 20px;">
						<span>附件：</span>
						<div >
							<i  class="iconfont iconmine" style="color: #ff7745;margin: 0 4px;" ></i>
							新增附件</div>
						<span style=" color: #606266;font-size: 10px;margin-left: 10px;">（附件类型：doc、xls、docx、xlsx、rar、zip、jpg、gif、jpeg、png、pdf文件大小不超过30M）</span>
					</div>
					<!-- 显示附件的一堆信息 -->
					<div style="width:100%;margin-top: 7px;">
					</div>
					<div style="width:100%;margin-top: 7px;display:flex;">
						<label class="form-label" style="line-height: 34px;">备注：</label>
						<div style="width:65%;height:100%;display:flex;">
							<el-input class="form-input large-input" maxlength="50" placeholder="可填写备注信息" />
						</div>
					</div>
				</div>
				<!-- 商品信息列表  -->

			</div>

		</div>
		<!-- 底部部分 -->
		<div style="height:60px;background-color: #ffffff;width:98%;margin-left:1%;margin-top: 20px;">
			<div v-if='current==1' style="height:100%;width:100%;display: flex;">
				<el-button class='step-button-white' style="margin-top: 12px; margin-left: 70%;" @click="chooseDefaultUser">选择默认账户(可选)</el-button>
				<el-button class='step-button-orange' style="margin-top: 12px;" @click="next">下一步:批量信息录入</el-button>
			</div>
			<div v-else style="height:100%;width:100%;display: flex;">
				<el-button class='step-button-white' style="margin-top: 12px; margin-left: 70%;" @click="next">上一步:选择客户</el-button>
				<el-button class='step-button-grey' style="margin-top: 12px;" @click="submit">确认提交</el-button>
			</div>

		</div>

	</div>
</template>
<script>
import './bussinessAccept.scss';


export default {
	data() {
		return {
			// 第一页的
			current: 2,
			items: [
				{
					step: 1,
					name: "选择客户"
				},
				{
					step: 2,
					name: "批量信息录入"
				}
			],
			// current: 0,
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
			// 增加传参

			// 返回的参数
			customerOne: {

				customerId: '5151051365110003756',
				name: '安百拓贸易有限公司',
				provinceId: '2019101018782731',
				cbssCustomerId: '5116101013135230',
				city: '广东-广州',
				certificateNumber: '620102881219098574',
				socialCreditCode: '012068',
				taxpayer: '是',

			},
			customerList: [],
			multipleSelection: [],
			// 分页
			len: 10,
			pageNum: 1,
			startRecord: 1,
			total: 0,
			// 
			// 选择的客户信息
			selectedCustomer: {},

			// 第二页的
			// 信息录入的参数
			personerCheckList: ['经办人信息'],
			selectCustomerType: "1",
			messageFlag: '1',
			messageFlagList: [
				{
					value: '1',
					label: '否'
				}, {
					value: '2',
					label: '是'
				}
			],
		}
	},
	methods: {
		next() {
			this.current = this.current == 1 ? 2 : 1;
		},
		// 初始化方法
		init() {
			var customerTwo = {
				customerId: '5151051365110003799',
				name: '广汽本田有限公司',
				provinceId: '2019101018782731',
				cbssCustomerId: '5116101013135230',
				city: '广东-佛山',
				certificateNumber: '620102881219098574',
				socialCreditCode: '012068',
				taxpayer: '是',
			}
			this.customerList.push(customerTwo)
			this.selectedCustomer = customerTwo;
			for (var i = 0; i <= 9; i++) {
				console.log(i)
				var index = i + 1;
				this.customerOne.index = index;
				this.customerList.push(this.customerOne)
			}
			this.total = 11;

			console.log(this.customerList)

		},
		// 客户左侧列表选择方法
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		// 选择默认账户(可选)
		chooseDefaultUser() {

		},
		// 跳转到分页按钮
		current_change(pageNum) {
			var self = this;
			self.pageNum = pageNum;
			self.getStartRecord();
			// self.freshMethod();
		},
		getStartRecord() {
			var self = this;
			self.startRecord = (self.pageNum - 1) * self.len + 1;
		},
		// 确认提交按钮
		submit() {

		},
		//客户详情按钮 
		customerDetail() {
			console.log('详情按钮')
		},
		create() {


		},
		search() {

		},
		reset() {

		}
	},
	created() {
		this.init();
	}
}
</script>