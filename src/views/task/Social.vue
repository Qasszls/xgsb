<template>
	<div class="infos">
		<div class="part">
			<mt-cell title="参保人" to="/userinfo" is-link v-model="user" ref="user">
			</mt-cell>
			<mt-cell title="参保地区" to="/userinfo" is-link v-model="unit" ref="unit">
			</mt-cell>
			<mt-field label="身份证号" placeholder="请输入参保人证件号" type="tel" v-model="idcard"></mt-field>
			<!-- 性别 -->
			<div class="sex">
				<div class="title">性别</div>
				<div class="select">
					<select class="sexs" v-model="sex" @change="getSex($event)">
						<option v-for="data in sexList" :value="data.id">{{data.name}}</option>
					</select>
				</div>
			</div>
			<!-- 户籍 -->
			<div class="sex">
				<div class="title">户口类型</div>
				<div class="select">
					<select class="type" v-model="type" @change="getType($event)">
						<option v-for="data in typeList" :value="data.value">{{data.key}}</option>
					</select>
				</div>
			</div>
		</div>
		<div class="part">
			<div class="ispay">
				<div class="tit">缴纳社保</div>
				<div class="choose"><span :class="isshow?'pay':'nopay'" @click="isshow = true">缴纳</span> <span :class="isshow?'nopay':'pay'"
					 @click="handleShebaoShow()">不缴</span></div>
			</div>
			<div v-show="isshow">
				<mt-field label="缴纳基数" v-model="sheBaoJiShuo"></mt-field>
				<div class="sex">
					<div class="title">缴纳月份</div>
					<div class="select">
						<select class="month" v-model="startTime" @change="getStartTime($event)">
							<option v-for="data in startTimeList" :value="data.value">{{data.key}}</option>
						</select>
						<select class="month" v-model="endTime" @change="getEndTime($event)">
							<option v-for="data in endTimeList" :value="data.value">{{data.key}}</option>
						</select>
					</div>
				</div>
				<div class="tips">当前最早可办理12月社保，最早可从2020年6月补缴社保</div>
			</div>
		</div>

		<div class="part">
			<div class="ispay">
				<div class="tit">缴纳公积金</div>
				<div class="choose"><span :class="isshows?'pay':'nopay'" @click="isshows = true">缴纳</span> <span :class="isshows?'nopay':'pay'"
					 @click="handleShows()">不缴</span></div>
			</div>
			<div v-show="isshows">
				<mt-field label="缴纳基数" v-model="gongJiJinJiShuo"></mt-field>
				<div class="sex">
					<div class="title">缴纳月份</div>
					<div class="select">
						<select class="month" v-model="gongjijinStartTime" @change="getGStartTime($event)">
							<option v-for="data in startGTimeList" :value="data.value">{{data.key}}</option>
						</select>
						<select class="month" v-model="gongjijinEndTime" @change="getGEndTime($event)">
							<option v-for="data in endGTimeList" :value="data.value">{{data.key}}</option>
						</select>
					</div>
				</div>
				<div class="tips">当前可办理12月公积金，最早可从2020年6月补缴公积金</div>
			</div>
		</div>

		<div class="part">
			<div class="ispay">
				<div class="tit">缴纳明细</div>
				<div class="choose">每月金额 × 缴纳月数</div>
			</div>
			<div class="detail">
				<div class="cash1" v-show="isshow">
					<div class="items">
						<div class="itemtit">
							<div class="left">社保金额</div>
							<div class="right">￥300.00 × 1</div>
						</div>
						<div class="item">
							<div class="left">养老</div>
							<div class="right">30</div>
						</div>
						<div class="item">
							<div class="left">医疗</div>
							<div class="right">30</div>
						</div>
						<div class="item">
							<div class="left">失业</div>
							<div class="right">30</div>
						</div>
						<div class="item">
							<div class="left">工伤</div>
							<div class="right">30</div>
						</div>
						<div class="item">
							<div class="left">生育</div>
							<div class="right">30</div>
						</div>
						<div class="item">
							<div class="left">大额医疗</div>
							<div class="right">30</div>
						</div>
					</div>
				</div>
				<div class="cash1" v-show="isshows">
					<mt-cell title="公积金金额">￥300 × 1
					</mt-cell>
				</div>
				<div class="cash1">
					<mt-cell title="总计(不包含服务费)">￥300 × 1
					</mt-cell>
				</div>
			</div>
		</div>
		<mt-button type="primary" size="large" class="btn">计算订单金额</mt-button>
	</div>
</template>

<script>
	import axios from 'axios'
	import Cookies from 'vue-cookies'
	import md5 from 'js-md5';
	import router from '../../router.js'
	export default {
		name: 'Social',
		data() {
			return {
				isshow: true,
				isshows: true,
				flex: 1,
				user: '',
				unit: '',
				idcard: '',
				isGongJijin: 1,
				sheBaoJiShuo: '',
				gongJiJinJiShuo: '',
				month: '',
				sex: '1',
				sexList: [{
					'id': 1,
					name: '男'
				}, {
					'id': 2,
					name: '女'
				}],
				type: '',
				typeList: [],
				city_id: '',
				startTime: '',
				startTimeList: [],
				endTime: '',
				endTimeList: [],
				gongjijinStartTime: '',
				startGTimeList: [],
				gongjijinEndTime: '',
				endGTimeList: []
			}
		},
		mounted() {
			//获取登录信息
			let header = {
				'Ukey': Cookies.get('UKey'),
				'OauthExp': Cookies.get('oauth_token'),
				'Authorization': 'Bearer' + Cookies.get('v_key'),
			}
			let data = {
				'oauth_name': 'Wx',
				'openid': Cookies.get('openid'),
				'v_key': md5(Cookies.get('v_key'))
			}
			let city_id = ''
			axios.post("http://api.fashi77.com/api/v1/logon/oauth_login", data, header).then(res => {
				if (header.Ukey === "" || header.Ukey === null) {
					Cookies.set('UKey', res.data.data.data_key, 60 * 60)
				}
				if (res.data.data.data_model === "" || res.data.data.data_model === null) {
					this.$router.push(`/login`)
				} else if (res.data.data.data_list === "" || res.data.data.data_list === null) {
					this.$router.push(`/userinfo`)
				} else {
					this.user = res.data.data.data_list
					// 获取用户信息
					axios({
						url: 'http://api.fashi77.com/api/v1/uinfo/editinfo',
						method: 'get',
						data: data,
						dataType: "json",
						contentType: 'application/json;charset=utf-8',
						headers: {
							'Ukey': Cookies.get('UKey'),
							'OauthExp': header.OauthExp,
							'Authorization': header.Authorization
						}
					}).then(res => {
						this.unit = res.data.data.data_model.cityName + res.data.data.data_model.countyName
						this.city_id = res.data.data.data_model.city_id
						//社保公积金基数
						axios.get('http://api.fashi77.com/api/v1/Basis/GetJishu?cityId=' + this.city_id).then(res => {
							this.sheBaoJiShuo = res.data.data.data_model.sheBaoJiShuo
							this.gongJiJinJiShuo = res.data.data.data_model.gongJiJinJiShuo
						})
						//获取户口类型
						axios.get('http://api.fashi77.com/api/v1/Basis/GetHuKouType')
							.then(res => {
								this.typeList = res.data.data.data_list
								this.type = res.data.data.data_list['0'].value
							})
						console.log(this.typeList)
						//获取缴费月份
						axios.get('http://api.fashi77.com/api/v1/Basis/PayMonthList').then(res => {
							this.startTimeList = res.data.data.data_list
							this.endTimeList = res.data.data.data_key
							this.startTime = res.data.data.data_list['0'].value
							this.endTime = res.data.data.data_key['0'].value
							this.startGTimeList = res.data.data.data_list
							this.endGTimeList = res.data.data.data_key
							this.gongjijinStartTime = res.data.data.data_list['0'].value
							this.gongjijinEndTime = res.data.data.data_key['0'].value
							console.log(res)
						})
                        
						//得到社保公积金缴费详情(页面显示)
						axios({
							url: 'http://api.fashi77.com/api/v1/Basis/PayDetails',
							method: 'post',
							cityId: this.city_id,
							huKouType: this.type,
							startTime: this.startTime,
							endTime: this.endTime,
							gongjijinStartTime: this.gongjijinStartTime,
							gongjijinEndTime: this.gongjijinEndTime,
							isGongJijin: this.isGongJijin,
							sheBaoJiShuo: this.sheBaoJiShuo,
							gongJiJinJiShuo: this.gongJiJinJiShuo,
							dataType: "json",
							contentType: 'application/json;charset=utf-8',
							headers: {
								'Ukey': Cookies.get('UKey'),
								'OauthExp': header.OauthExp,
								'Authorization': header.Authorization
							}
						}).then(res => {
							console.log(res)
						}).catch(err => {
							console.log(err)
						})

					}).catch(err => {
						console.log(err)
					})
				}
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			handleShebaoShow() {
				this.isshow = false
				this.isGongJijin = 10
				console.log(this.isGongJijin)
			},
			handleShows() {
				this.isshows = false
				this.isGongJijin = 5
				console.log(this.isGongJijin)
			},
			getSex(event) {
				this.sex = event.target.value
			},
			getType(event) {
				this.type = event.target.value
			},
			getStartTime(event) {
				this.startTime = event.target.value
			},
			getEndTime(event) {
				this.endTime = event.target.value
			},
			getGStartTime(event) {
				this.gongjijinStartTime = event.target.value
			},
			getGEndTime(event) {
				this.gongjijinEndTime = event.target.value
			}
		}
	}
</script>

<style scoped>
	/deep/.mint-cell-value {
		color: #000000 !important;
	}

	.mint-cell-allow-right::after {
		border: 1px solid #000000;
	}

	.part {
		margin-bottom: 20px;
	}

	.tips {
		background-color: #FFFFFF;
		line-height: 20px;
		font-size: 12px;
		padding-left: 10px;
		color: gray;
	}

	.ispay {
		height: 50px;
		line-height: 50px;
		display: flex;
		background-color: #FFFFFF;
		border-bottom: 1px solid #f6f6f6;
		padding-left: 10px;
		font-size: 14px;
	}

	.choose {
		margin-left: auto;
		padding-right: 10px;
	}

	.pay {
		display: inline-block;
		background-color: #68c26a;
		width: 50px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin-top: 10px;
		color: #fff;
	}

	.nopay {
		display: inline-block;
		width: 50px;
		height: 28px;
		line-height: 28px;
		text-align: center;
		margin-top: 10px;
		border: 1px solid #68c26a;
	}

	.items {
		min-height: 100px;
		background-color: #FFFFFF;
		padding: 0 10px;
	}

	.itemtit {
		height: 30px;
		line-height: 30px;
		display: flex;
		justify-content: space-between;
		font-size: 14px;
	}

	.item {
		height: 30px;
		line-height: 30px;
		display: flex;
		justify-content: space-between;
		color: gray;
		font-size: 13px;
	}

	.sel {
		border: 0;
	}

	.sex {
		display: flex;
		height: 45px;
		line-height: 45px;
		background-color: #FFFFFF;
		font-size: 14px;
		padding-left: 10px;
	}

	.select {
		margin-left: auto;
	}

	.sexs {
		width: 50px;
		border: 0;
		height: 30px;
		line-height: 30px;
		padding: 5px;
		margin-right: 10px;
	}

	.type {
		width: 100px;
		border: 0;
		height: 30px;
		line-height: 30px;
		padding: 5px;
		margin-right: 10px;
	}

	.month {
		border: 0;
		width: 110px;
		height: 30px;
		line-height: 30px;
		padding: 3px;
		font-size: 13px;
	}

	.btn {
		width: 80%;
		margin-left: 10%;
	}
</style>
