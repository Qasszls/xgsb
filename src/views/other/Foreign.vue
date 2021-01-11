<template>
	<div class="card">
		<div class="part">
			<mt-cell title="业务名称" value="社保费用一次性清算（转外籍）"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 我司成功汇缴一个月及以上，且我司为该员工最后一家社保单位<br>
				· 员工最好是已经转外籍成功之后办理
			</div>
		</div>
		<div class="part">
			<mt-cell title="所需材料"></mt-cell>
			<div class="title cont">
				· 《北京市社会保险参保人员减少表》一式二份；单位盖章<br>
				· 本人申请一份（需本人签字，加盖单位公章）<br>
				· 护照复印件1份
				· 《北京市养老保险金月报支付明细表（表十六附表）》一式二份，空表单位盖章<br>
				· 本人申请：单位名称，员工，身份证号，因转外籍国家名；写明自愿终止养老保险关系，申请一次性领取个人账户储存额。申请人，日期，盖单位公章（下载处有模板）
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
