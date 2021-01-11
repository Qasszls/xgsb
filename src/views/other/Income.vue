<template>
	<div class="card">
		<div class="part">
			<mt-cell title="业务名称" value="收入证明"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 1.合作并成功缴纳1个月以上社保及代发工资；<br>
				· 2.申请开具证明期间，在我司为正常缴纳状态；<br>
				· 用途：小孩上学、旅游签证、公积金购房贷款、商业购房贷款
			</div>
		</div>
		<div class="part">
			<mt-cell title="所需材料"></mt-cell>
			<div class="title cont">
				· 代理企业：<br>
				· 1.单位与该员工签订的劳动合同（加盖单位公章）<br>
				· 2.单位提供的免责声明加盖公章
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
