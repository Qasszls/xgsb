<template>
	<div class="card">
		<div class="part">
			<mt-cell title="业务名称" value="社保个人新参时间变更"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 网申新参成功后2个月内
			</div>
		</div>
		<div class="part">
			<mt-cell title="所需材料"></mt-cell>
			<div class="title cont">
				· 1.身份证复印件
				· 2.身份证复温馨提醒——如涉及补缴请注意网申补缴规则<br>
				· 我司提供：1.《北京市社会保险个人信息变更登记表》（加盖公章）
				2.单位劳动合同即有明确新参劳动时间复印件（加盖公章、骑缝章）
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
