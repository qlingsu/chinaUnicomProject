<template>
	<div>
		批量核查转定
		<a-time-line :items="items" :current="current"></a-time-line>
	</div>
</template>
<script>
export default {
	data() {
		return {
      current:2,
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
			]
		};
	},
	mounted() {
		let self = this;
	}
};
</script>