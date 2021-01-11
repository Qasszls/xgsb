<template>
	<div class="add">
		<div class="part">
			<mt-cell title="业务名称" value="补办社保卡"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 社保卡姓名、社会保障号码、性别、民族、出生年月发生变更，且医疗参保信息已变更或卡发生损坏、消磁等原因无法正常使用的
			</div>
		</div>
		<div class="part">
			<mt-cell title="所需材料"></mt-cell>
			<div class="title cont">
				· 1.身份证原件<br>
				· 2.损坏的另需提供原社保卡
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
