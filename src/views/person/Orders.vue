<template>
	<div class="orders">
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">待付订单</mt-tab-item>
			<mt-tab-item id="2">已付订单</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<div class="menu">
					<mt-cell title="2020-10社保订单"></mt-cell>
					<mt-cell title="办理城市" value="北京朝阳直营"></mt-cell>
					<mt-cell title="应付金额" value="￥ 1300.00"></mt-cell>
					<mt-cell title="2020-10-01 12:32:17">
						<mt-button type="primary" size="small">立即支付</mt-button>
						<mt-button type="default" size="small">取消订单</mt-button>
					</mt-cell>
				</div>
				<div class="menu">
					<mt-cell title="2020-10社保订单"></mt-cell>
					<mt-cell title="办理城市" value="北京朝阳直营"></mt-cell>
					<mt-cell title="应付金额" value="￥ 1300.00"></mt-cell>
					<mt-cell title="2020-10-01 12:32:17">
						<mt-button type="primary" size="small">立即支付</mt-button>
						<mt-button type="default" size="small">取消订单</mt-button>
					</mt-cell>
				</div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="menu">
					<mt-cell title="2020-10社保订单"></mt-cell>
					<mt-cell title="办理城市" value="北京朝阳直营"></mt-cell>
					<mt-cell title="应付金额" value="￥ 1300.00"></mt-cell>
					<mt-cell title="2020-10-01 12:32:17">
						<mt-button type="primary" size="small">查看订单</mt-button>
					</mt-cell>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	export default {
		name: 'orders',
		data() {
			return {
				selected: '1'
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
</style>
