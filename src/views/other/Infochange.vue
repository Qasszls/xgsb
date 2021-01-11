<template>
	<div class="card">
		<div class="part">
			<mt-cell title="业务名称" value="社保个人账户信息变更（个人）"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 成功汇缴1个月以上
			</div>
		</div>
		<div class="part">
			<mt-cell title="所需材料"></mt-cell>
			<div class="title cont">
				· 1.《北京市社会保险个人信息变更登记表》一式二份（加盖公章）<br>
				· 如涉及参保人员姓名、身份证号码、民族、缴费人员类别、户口性质等变更：<br>
				· 1.身份证正反面复印件1份；2.居民户口簿首页、本人页、变更页复印件1份；3.户籍管理机构曾为其办理过姓名、身份证号码变更的需要变更证明，若户口薄上体现了曾用名，现用名的，可不提供
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
