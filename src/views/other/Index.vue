<template>
	<div class="others">
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">全部附加业务</mt-tab-item>
			<mt-tab-item id="2">我的附加业务</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="nav">
					<mt-button size="small" @click.native.prevent="active = 'tab-container1'">社保类</mt-button>
					<mt-button size="small" @click.native.prevent="active = 'tab-container2'">公积金类</mt-button>
					<mt-button size="small" @click.native.prevent="active = 'tab-container3'">居住证类</mt-button>
					<mt-button size="small" @click.native.prevent="active = 'tab-container4'">证明类</mt-button>
				</div>
				<div class="page-tab-container">
					<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
						<mt-tab-container-item id="tab-container1">
							<div class="fw">
								<div class="title">企业社保账户操作</div>
								<mt-cell title="社保个人新参时间变更" to="datechange" is-link>
								</mt-cell>
								<mt-cell title="社保费用一次性清算(转外籍)" to="foreign" is-link>
								</mt-cell>
							</div>
							<div class="fw">
								<div class="title">个人社保账户操作</div>
								<mt-cell title="养老金、医疗保险账户转出(个人)" to="out" is-link>
								</mt-cell>
								<mt-cell title="社保个人账户信息变更(个人)" to="infochange" is-link>
								</mt-cell>
								<mt-cell title="社保卡办理(二次信息采集)" to="card" is-link>
								</mt-cell>
								<mt-cell title="补办社保卡" to="addcard" is-link>
								</mt-cell>
								<mt-cell title="社保费用死亡清算" to="clear" is-link>
								</mt-cell>
								<mt-cell title="社保重复缴费退费" to="refund" is-link>
								</mt-cell>
							</div>
						</mt-tab-container-item>
						<mt-tab-container-item id="tab-container2">
							<div class="fw">
								<div class="title">企业公积金账户操作</div>
								<mt-cell title="公积金信息变更501表盖章" to="fundchange" is-link>
								</mt-cell>
							</div>
							<div class="fw">
								<div class="title">个人公积金账户操作</div>
								<mt-cell title="个人公积金账户信息变更和合并" to="fundperson" is-link>
								</mt-cell>
							</div>
						</mt-tab-container-item>
						<mt-tab-container-item id="tab-container3">
							<div class="fw">
								<div class="title">暂无服务</div>
								<!-- <mt-cell title="公积金信息变更501表盖章" to="/" is-link>
								</mt-cell> -->
							</div>
						</mt-tab-container-item>
						<mt-tab-container-item id="tab-container4">
							<div class="title">人事证明</div>
							<mt-cell title="收入证明" to="income" is-link>
								</mt-cell>
						</mt-tab-container-item>
					</mt-tab-container>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="menu">
					<mt-cell title="2020-10社保订单"></mt-cell>
					<mt-cell title="办理城市" value="北京朝阳直营"></mt-cell>
					<mt-cell title="办理结果" value="未支付"></mt-cell>
					<mt-cell title="应付金额" value="￥ 1300.00"></mt-cell>
					<mt-cell title="2020-10-01 12:32:17">
						<mt-button type="primary" size="small">立即支付</mt-button>
						<mt-button type="default" size="small">取消订单</mt-button>
					</mt-cell>
				</div>
				<div class="menu">
					<mt-cell title="2020-10社保订单"></mt-cell>
					<mt-cell title="办理城市" value="北京朝阳直营"></mt-cell>
					<mt-cell title="办理结果" value="未支付"></mt-cell>
					<mt-cell title="应付金额" value="￥ 1300.00"></mt-cell>
					<mt-cell title="2020-10-01 12:32:17">
						<mt-button type="primary" size="small">立即支付</mt-button>
						<mt-button type="default" size="small">取消订单</mt-button>
					</mt-cell>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	export default {
		name: 'others',
		data() {
			return {
				selected: '1',
				active: 'tab-container1'
			};
		}
	};
</script>

<style scoped>
	.mint-button--small {
		height: 26px;
		font-size: 12px;
		margin-left: 10px;
		padding: 0 10px;
	}

	.mint-navbar {
		background-color: #f9f9f9;
	}

	.menu {
		margin-bottom: 10px;
	}

	.item {
		display: inline-block;
	}

	.nav {
		padding: 10px;
	}

	.link {
		color: inherit;
		padding: 20px;
		display: block;
	}

	.title {
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		background-color: #FFFFFF;
		font-size: 15px;
		border-bottom: 1px solid #F6F6F6;
		color: #2bb1b8;
	}

	.fw {
		margin-bottom: 10px;
	}
</style>
