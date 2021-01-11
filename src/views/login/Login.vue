<template>
	<div class="login">
		<div class="title">使用验证码登录</div>
		<div class="tit">未注册用户使用手机号验证通过后将自动注册</div>
		<div class="item">手机号码</div>
		<input name="phonenum" v-model="phonenum" class="ins" placeholder="请输入手机号" ref="phonenum" />
		<div class="item">验证码</div>
		<div class="line">
			<input name="code" v-model="code" id="code" class="in" placeholder="请输入验证码" ref="code" />
			<div class="login-code" @click="changeimgcode">
				<img :src="imgcode" width="100%" />
			</div>
		</div>
		<div class="btn">
			<mt-button type="primary" size="large" @click="login">登录/注册</mt-button>
		</div>
		<div class="agree">
			用户注册代表同意
			<router-link to="/rule" class="read">《用户注册协议》</router-link>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import Cookies from 'vue-cookies'
	import router from '../../router.js'
	import SIdentify from '../../components/sidentify.vue'
	import moment from 'moment'
	import {
		Toast
	} from 'mint-ui';
	export default {
		name: 'login',
		components: {
			SIdentify
		},
		data() {
			return {
				phonenum: '',
				code: "",
				imgcode: "",
				msg: ""
			}
		},
		mounted() {
			//获取图片验证码
			let imgs = "http://api.fashi77.com/api/v1/imgvery/gain?t=" + this.$moment().unix('HH:MM:SS') + "&v=" + Cookies.get(
				'v_key')
			this.imgcode = imgs

		},
		methods: {
			changeimgcode() {
				let imgurl = "http://api.fashi77.com/api/v1/imgvery/gain?t=" + this.$moment().unix('HH:MM:SS') + "&v=" + Cookies.get(
					'v_key')
				this.imgcode = imgurl
			},

			login() {
				let phonenum = this.$refs.phonenum.value
				let imgcodes = this.$refs.code.value
				if (!/^1[34578]\d{9}$/.test(this.phonenum)) {
					Toast({
						message: '请填写正确的手机号码',
						duration: 2000
					});
					return false
				}
				let Ukey = Cookies.get('UKey')
				let OauthExp = Cookies.get('oauth_token')
				let Authorization = 'Bearer' + Cookies.get('v_key')
				let img_key = Cookies.get('v_key')
				let data = {
					'phonenum': phonenum,
					'imgcode': imgcodes,
					'img_key': img_key
				}

				//完善手机号码
				axios({
					url: 'http://api.fashi77.com/api/v1/uinfo/editmobilenum',
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
					} else {
						this.msg = res.data.msg
						if (this.msg) {
							Toast({
								message: this.msg,
								duration: 2000
							});
						}
					}
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>

<style scoped>
	.login {
		background-color: #FFFFFF;
		padding: 20px;
		min-height: 650px;
	}

	.title {
		font-size: 22px;
		font-weight: 600;
		height: 40px;
		line-height: 40px;
	}

	.tit {
		font-size: 14px;
	}

	.item {
		margin-top: 30px;
		height: 40px;
		line-height: 40px;
	}

	.mint-field-core {
		text-align: left;
	}

	.ins {
		border: 0;
		border-bottom: 1px solid #F5F5F5;
		width: 100%;
		height: 50px;
	}

	.in {
		border: 0;
		border-bottom: 1px solid #F5F5F5;
		width: 70%;
	}

	.line {
		height: 50px;
		display: flex;
		line-height: 50px;
	}

	.btn {
		margin-top: 20px;
		margin-left: 5%;
	}

	.mint-button--large {
		width: 90%;
		background-color: #009688;
		font-size: 15px;
	}

	.agree {
		margin-top: 100px;
		opacity: 0.8;
		text-align: center;
		font-size: 12px;
	}

	.read {
		color: #009E94;
	}

	.code {
		width: 124px;
		height: 31px;
		border: 1px solid rgba(186, 186, 186, 1);
	}

	.login-code {
		text-align: center;
		width: 30%;
		color: #009688;
		letter-spacing: 2px;
		border-bottom: 1px solid #F5F5F5;
		cursor: pointer;
	}
</style>
