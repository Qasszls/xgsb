<template>
	<div class="person">
		<div class="head">
			<div class="info">
				<div class="name">Hi~,刘大大</div>
				<div class="tel">188****1009</div>
			</div>
		</div>
		<div class="vip">
			<div class="img"><img src="../../assets/img/vip.png" style="width: 50px;height: 50px;padding-top: 10px;" /></div>
			<div class="tit">会员权益</div>
		</div>
		<div class="menus">
			<mt-cell title="缴纳社保/公积金" to="social" is-link value="">
			</mt-cell>
			<mt-cell title="缴纳个税" to="tax" is-link value="">
			</mt-cell>
			<mt-cell title="邮寄地址" to="adress" is-link value="">
			</mt-cell>
		</div>
		<div class="menus">
			<mt-cell title="订单管理" to="orders" is-link value="">
			</mt-cell>
			<mt-cell title="账号管理" to="manage" is-link value="">
			</mt-cell>
		</div>
		<div class="btn">
			<mt-button type="primary" size="large">退出登录</mt-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Person'

	}
</script>

<style scoped>
	.head {
		height: 130px;
		z-index: 0;
		background-image: url(../../assets/img/bg.png);
	}

	.info {
		display: flex;
		height: 60px;
		line-height: 60px;
	}

	.name {
		font-size: 22px;
		color: #FFFFFF;
		padding-left: 20px;
	}

	.tel {
		font-size: 11px;
		margin-left: 10px;
		color: #FFFFFF;
		opacity: 0.8;
		padding-top: 2px;
	}

	.vip {
		background-color: #FFFFFF;
		height: 100px;
		margin-left: 20px;
		margin-right: 20px;
		border-radius: 20px;
		margin-top: -60px;
		position: relative;
		z-index: 99;
		text-align: center;
	}

	.tit {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
	}

	.menus {
		margin-top: 30px;
	}

	.btn {
		margin-top: 10px;
		margin-left: 5%;
	}
	
	.mint-button--large {
		width: 90%;
		background-color: #009688;
	}
</style>
