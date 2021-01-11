<template>
	<div class="tax">
		<img src="../../assets/img/tax.png" />
		<div class="detail">
			<mt-cell title="缴纳个税"></mt-cell>
			<mt-cell title="个税月份" value="2020-10"></mt-cell>
			<div class="tips">为了避免重复报税，请确认10月无其他公司为您报税</div>
			<div class="select" @click="popupVisible = true">
				<mt-cell title="发薪日" is-link>
					<span>{{currentTags?currentTags.sex: '15日'}}</span>
				</mt-cell>
			</div>
			<mt-field label="银行卡号" placeholder="请输入银行卡号" v-model="bankid"></mt-field>
			<div class="select" @click="popupVisible = true">
				<mt-cell title="开户行" is-link>
					<span>{{currentTags?currentTags.sex: '中国招商银行'}}</span>
				</mt-cell>
			</div>
			<div class="select" @click="popupVisible = true">
				<mt-cell title="开户支行" is-link>
					<span>{{currentTags?currentTags.sex: '朝阳支行'}}</span>
				</mt-cell>
			</div>
			<div class="pros">建议使用招行，非招行需收取10元跨行手续费</div>
		</div>
		<div class="btn">
			<mt-button type="primary" size="large">计算订单</mt-button>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.detail {
		margin-bottom: 10px;
	}

	.tips {
		height: 30px;
		line-height: 30px;
		font-size: 12px;
		color: gray;
		background-color: #FFFFFF;
		padding-left: 10px;
		border-bottom: 1px solid #F6F6F6;
	}

	.pros {
		text-align: center;
		opacity: 0.8;
		height: 40px;
		line-height: 40px;
		background-color: #FFFFFF;
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
