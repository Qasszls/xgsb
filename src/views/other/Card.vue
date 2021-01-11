<template>
	<div class="card">
		<div class="part">
			<mt-cell title="业务名称" value="社保卡办理（二次信息采集）"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 成功汇缴2-3个月<br>
				· 1.情况一：在本单位非新参即上家单位已提交参保信息的，一直没有申领社保卡，且网申没有电子照片；<br>
				· 2.情况二：首次在北京参保在本单位，但是在制卡环节反馈需要二次信息采集；<br>
				· 3.我司可收费代为发送邮箱；客户自己发送无需收费
			</div>
		</div>
		<div class="part">
			<mt-cell title="所需材料"></mt-cell>
			<div class="title cont">
				· 1.客户自己将一寸白底彩色电子照片，照片名称为参保人姓名和身份证号，发送至社保局邮箱hbsbzxsbk@mail.bjhd.gov.cn（照片宽度358像素，高度441像素，文件不小于9KB不大于20KB）<br>
				·
				2.登录北京市社会保险网上服务平台，点击【申报业务管理】，选择【社会保障卡照片采集】模块，输入未制卡人员的身份证号码，按格式要求上传一寸白底彩色照片，核实参保人员医疗保险登记信息（姓名、性别、身份证号码、名族、出生年月），提交成功即可
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
