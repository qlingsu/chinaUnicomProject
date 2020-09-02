<style lang="scss">
.a-time-line-node {
	position: relative;
	font-size: 0px;
	overflow: hidden;
	float: left;
	height: 22px;
}
.a-time-line-step {
	height: 22px;
	// line-height: 22px;
	width: 22px;
	border-radius: 50%;
	text-align: center;
	display: inline-block;
	vertical-align: middle;
}
.a-time-line-step-before {
	@extend .a-time-line-step;
	font-size: 14px;
	border: 1px solid #ff7745;
	color: #ff7745;
}
.a-time-line-step-current {
	@extend .a-time-line-step;
	background-color: #ff7745;
	color: white;
	font-size: 14px;
}
.a-time-line-step-after {
	@extend .a-time-line-step;
	border: 1px solid #d6d6d6;
	color: #d6d6d6;
	font-size: 14px;
}

.a-time-line-name {
	display: inline-block;
	vertical-align: middle;

	font-size: 14px;
}
.a-time-line-name-before {
	@extend .a-time-line-name;
	color: black;
	margin-left: 10px;
}
.a-time-line-name-current {
	@extend .a-time-line-name;
	color: black;
	margin-left: 10px;
}
.a-time-line-name-after {
	@extend .a-time-line-name;
	color: #d6d6d6;
	margin-left: 10px;
}
.a-time-line-line {
	width: 160px;
	height: 0px;
	border-bottom: 1px solid #d6d6d6;
	display: inline-block;
	vertical-align: middle;
	margin: 0 10px;
}
</style>
<template>
	<div style>
		<div v-for="(item,index) in items" :key="index" class="a-time-line-node">
			<div class="a-time-line-step">
				<div v-if="item.step<current" class="a-time-line-step-before">
					<div class="icon iconfont iconduihao"></div>
				</div>
				<div v-if="item.step==current" class="a-time-line-step-current">{{item.step}}</div>
				<div v-if="item.step>current" class="a-time-line-step-after">{{item.step}}</div>
			</div>
			<div class="a-time-line-name">
				<div v-if="item.step<current" class="a-time-line-name-before">{{item.name}}</div>
				<div v-if="item.step==current" class="a-time-line-name-current">{{item.name}}</div>
				<div v-if="item.step>current" class="a-time-line-name-after">{{item.name}}</div>
			</div>
			<div class="a-time-line-line" v-if="index<items.length-1"></div>
		</div>
	</div>
</template>
<script>
export default {
	name: "a-time-line",
	props: {
		items: {
			type: Array,
			default: function() {
				//{name}
				return [];
			}
		},
		current: {
			type: Number,
			default: 1
		}
	}
};
</script>