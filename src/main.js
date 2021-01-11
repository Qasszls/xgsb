import Vue from 'vue'
import App from './App.vue'
import MintUi from 'mint-ui'
import router from './router.js'
import 'mint-ui/lib/style.css'
import moment from 'moment'; //导入模块
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.prototype.$moment = moment;//赋值使用
Vue.use(MintUi)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
