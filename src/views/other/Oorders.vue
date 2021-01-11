<template>
	<div class="card">
		<div class="part">
			<div class="ids">订单编号：<label class="nums">4322455</label></div>
			<mt-cell title="收件地址（用于接收回寄的材料）"></mt-cell>
			<mt-cell title="没有收件地址无法办理业务，请先添加" is-link to=""></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="专项服务费" value="￥100.00"></mt-cell>
		</div>
		<div class="agreement">
			<div class="left">
				<input type="checkbox" value="agree" name="agree" class="gou" />
			</div>
			<div class="right">
				我同意 <a href="rules.html" class="jump">《西瓜社保用户协议》</a>
			</div>
		</div>
		<div class="ts">
			*请先勾选用户服务协议
		</div>
		<div class="part">
			<mt-cell title="合计:￥100.00">
				<mt-button type="primary" size="small">立即支付</mt-button>
			</mt-cell>
		</div>

	</div>
</template>

<script>
</script>

<style scoped>
	.part {
		margin-bottom: 10px;
	}

	.cont {
		background-color: #FFFFFF;
		min-height: 30px;
		padding: 10px;
		line-height: 25px;
		font-size: 14px;
	}

	.mint-button--primary {
		background-color: #009688;
	}

	.mint-button--small {
		height: 28px;
		padding: 0 10px;
	}

	.agreement {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		display: flex;
	}

	.right {
		margin-left: 5px;
		margin-top: -2px;
	}

	.jump {
		color: #009E94;
	}

	.ts {
		padding-left: 10px;
		margin-bottom: 10px;
		color: red;
		font-size: 12px;
	}

	.ids {
		height: 50px;
		line-height: 50px;
		padding-left: 10px;
		background-color: #FFFFFF;
		border-bottom: 1px solid #F6F6F6;
		font-size: 15px;
	}

	.nums {
		color: #009E94;
	}
</style>
