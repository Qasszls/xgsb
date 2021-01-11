<template>
	<div>123</div>
</template>

<script>
	import Cookies from 'vue-cookies'
	export default {
		name: 'Index',
		mounted() {
			let openid = this.$route.query.openid
			Cookies.set('openid', openid, 24 * 60 * 60)
			this.$router.push(`/`)
		}
		}
</script>

<style>
</style>
