<template>
	<div class="card">
		<div class="part">
			<mt-cell title="业务名称" value="社保重复缴费退费"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 成功汇缴1个月及以上
			</div>
		</div>
		<div class="part">
			<mt-cell title="所需材料"></mt-cell>
			<div class="title cont">
				· 1.身份证复印件<br>
				· 2.北京市工行储蓄卡或工行存折复印件（朝阳需要）<br>
				· 3.代管企业提供公章
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
