<template>
	<div class="adress">
		<div class="adr">需要办理附加业务等请在此添加地址</div>
		<div class="dz">
			<mt-radio align="right" v-model="value" :options="['地址A', '地址B', '地址C']">
			</mt-radio>
		</div>
		<div class="btn">
			<mt-button type="primary" size="large">新增地址</mt-button>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.adr {
		height: 50px;
		line-height: 50px;
		background-color: #FFFFFF;
		text-align: center;
		font-size: 15px;
		margin-bottom: 10px;
	}

	.btn {
		margin-top: 10px;
	}
	
	.mint-button--large {
		background-color: #009688;
	}
</style>
