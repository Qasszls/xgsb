<template>
	<div class="add">
		<mt-field label="姓名" placeholder="请输入姓名" v-model="username"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="地区" type="tel" v-model="city">北京市</mt-field>
		<mt-field label="详细地址" placeholder="请输入详细地址" v-model="adress"></mt-field>
		<div class="btn">
			<mt-button type="primary" size="large">提交</mt-button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.btn {
		margin-top: 10px;
	}
	
	.mint-button--large {
		background-color: #009688;
	}
</style>
