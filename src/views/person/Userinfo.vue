<template>
	<div id="info">
		<div class="adr">请完善参保人基本信息</div>
		<mt-field label="真实姓名" placeholder="请输入真实姓名" ref="relyname" v-model="relyname"></mt-field>
		<div class="area">
			<div class="title">参保地区</div>
			<div class="select">
				<select class="city" v-model="city_id" @change="getCity($event)">
					<option v-for="data in cityList" :value="data.value">{{data.key}}</option>
				</select>
				<select class="unit" v-model="county_id" @change="getCounty($event)">
					<option v-for="data in unitList" :value="data.value">{{data.key}}</option>
				</select>
			</div>
		</div>
		<div class="btn">
			<mt-button type="primary" size="large" @click="submit()">提交</mt-button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import router from '../../router.js'
	import Cookies from 'vue-cookies'
	export default {
		name: 'Userinfo',
		data() {
			return {
				relyname: '',
				cityList: [],
				unitList: [],
				city_id: '',
				county_id: ''
			}
		},
		mounted() {
			axios.get('http://api.fashi77.com/api/v1/Basis/GetArea?parentId=0')
				.then(res => {
					this.cityList = res.data.data.data_list
					this.city_id = res.data.data.data_list['0'].value
				})
			axios.get('http://api.fashi77.com/api/v1/Basis/GetArea?parentId=1')
				.then(res => {
					this.unitList = res.data.data.data_list
					this.county_id = res.data.data.data_list['0'].value
				})
		},
		methods: {
			getCity(event) {
				this.city_id = event.target.value
			},
			getCounty(event) {
				this.county_id = event.target.value
			},
			submit() {
				let Ukey = Cookies.get('UKey')
				let OauthExp = Cookies.get('oauth_token')
				let Authorization = 'Bearer' + Cookies.get('v_key')
				let data = {
					'relyname': this.$refs.relyname.value,
					'city_id': this.city_id,
					'county_id': this.county_id
				}
				axios({
					url: 'http://api.fashi77.com/api/v1/uinfo/editacount',
					method: 'post',
					data: data,
					dataType: "json",
					contentType: 'application/json;charset=utf-8',
					headers: {
						'Ukey': Ukey,
						'OauthExp': OauthExp,
						'Authorization': Authorization
					}
				}).then(res => {
					if (res.data.code === 1) {
						this.$router.push(`/`)
					}
				}).catch(err => {
					console.log(err)
				})
			},
		}
	}
</script>

<style scoped>
	.btn {
		margin-top: 10px;
	}

	.mint-button--large {
		background-color: #009688;
	}

	.adr {
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 15px;
		margin-bottom: 10px;
		color: #009688;
	}

	.area {
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

	.city {
		width: 80px;
		border: 0;
		height: 30px;
		line-height: 30px;
		padding: 5px;
	}

	.unit {
		border: 0;
		width: 100px;
		margin-left: 20px;
		height: 30px;
		line-height: 30px;
		padding: 5px;
		margin-right: 10px;
	}
</style>
