<template>
	<div class="card">
		<div class="part">
			<mt-cell title="业务名称" value="个人公积金账户信息变更和合并"></mt-cell>
			<mt-cell title="办理费用" value="￥50.00"></mt-cell>
		</div>
		<div class="part">
			<mt-cell title="办理条件"></mt-cell>
			<div class="title cont">
				· 成功缴纳一个月公积金<br>
				· 一、必须单位盖章才能办理：姓名和身份证号变更。个人原单位信息错误的，找原单位做账户信息变更<br>
				· 二、自己可线下办理（无需盖单位公章）：（除了变更姓名、证件类型、身份证号）变更约定周期、联名卡号、公积金系统中记录的住房地址、住房支出金额等<br>
				· 三、自己线上可更改：住房公积金系统中性别、出生年月、民族、政治面貌、户籍所在地、籍贯、学历、毕业学校、职业、户口类型、家庭地址、家庭邮编、手机号码等个人信息不正确或不完整。（线上办理有疑问咨询12329即可）<br>
				·注意：(1) 有多账户的信息变更时可同时进行账户合并，若只有一个账户的，变更信息后无需进行账户合并 <br>
				· (2) 我司办理时，工单中要体现变更前，变更后，正确错误的详细信息分别是什么（否则办理时可能查询不到之前账户无法变更或合并）<br>
				· (3) 个人原单位信息错误的，找原单位做账户信息变更；个人未在我司有公积金账户，名下有多账户的，找原单位做账户合并
			</div>
		</div>
		<div class="part">
			<mt-cell title="所需材料"></mt-cell>
			<div class="title cont">
				· 一、个人姓名、证件类型或身份证号码变更：<br>
				· 1）填写501表、加盖单位公章。（姓名身份证号变更的501表均需加盖单位公章）；注意，501表中填写上变更前，变更后的相关信息<br>
				· 2）户口本原件或提供公安机关证明（个人姓名、身份证号码在公安户籍系统实际发生变化）；如果是我们单位录入错误不需要提供户口本或公安机关证明；<br>
				· 3）身份证原件<br>
				· 二、住房公积金系统中记录的住房地址、住房支出金额等房屋信息与实际不一致：即提取限额与住房实际支出不一致：<br>
				· 1）办理提取时的全套房屋材料原件（根据购房提取类型不同，提供的材料不同）<br>
				· 2）501表+身份证原件<br>
				· 三、离婚后解除住房公积金系统中双方配偶关系关联（个人线下可办理）：<br>
				· 1）结婚证（离婚证）原件。婚姻状态变更为离婚但没有离婚证的，可提供法院判决离婚的《人民法院民事判决书》和《人民法院协助执行通知书》<br>
				· 2）501表+身份证原件<br>
				· 四、住房公积金联名卡信息，包括：变更联名卡卡号、重置住房公积金查询密码、变更约定周期等：<br>
				· 1）501表+身份证原件
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
