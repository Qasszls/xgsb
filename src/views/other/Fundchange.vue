<template>
	<div class="card">
		<div class="part">
			<mt-cell title="业务名称" value="公积金信息变更501表盖章"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 我们单位进行公积金增员时增员错误<br>
				· 需要我们进行501表盖章<br>
				· 员工公积金账户中姓名或身份证号变更<br>
				· 备注上客户是什么信息错误，正确的信息应该是什么
			</div>
		</div>
		<div class="btn">
			<mt-button type="primary" size="large">前往办理</mt-button>
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

	.btn {
		margin-top: 10px;
		margin-left: 5%;
	}

	.mint-button--large {
		width: 90%;
		background-color: #009688;
	}
</style>
