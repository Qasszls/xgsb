<template>
	<div class="edit">
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="新密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-field label="确认密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<div class="btn">
			<mt-button type="primary" size="large">提交修改</mt-button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.btn {
		margin-top: 10px;
		margin-left: 5%;
	}
	
	.mint-button--large {
		width: 90%;
		background-color: #009688;
	}
</style>
