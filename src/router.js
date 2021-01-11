import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'vue-cookies'
import Indexs from './views/Index.vue'
import Login from './views/login/Login.vue'
import Social from './views/task/Social.vue'
import Person from './views/person/Person.vue'
import Rule from './views/login/Rule.vue'
import Rights from './views/person/Rights.vue'
import Manage from './views/person/Manage.vue'
import Edit from './views/person/Edit.vue'
import Adress from './views/person/Adress.vue'
import Addadr from './views/person/Addadr.vue'
import Orders from './views/person/Orders.vue'
import Tax from './views/person/Tax.vue'
import Userinfo from './views/person/Userinfo.vue'
import Index from './views/other/Index.vue'
import Card from './views/other/Card.vue'
import Addcard from './views/other/Addcard.vue'
import Clear from './views/other/Clear.vue'
import Foreign from './views/other/Foreign.vue'
import Fundchange from './views/other/Fundchange.vue'
import Fundperson from './views/other/Fundperson.vue'
import Income from './views/other/Income.vue'
import Infochange from './views/other/Infochange.vue'
import Out from './views/other/Out.vue'
import Refund from './views/other/Refund.vue'
import Datechange from './views/other/Datechange.vue'
import Oorders from './views/other/Oorders.vue'
import axios from 'axios'
Vue.use(Cookies)
Vue.use(Router)


const router = new Router({
	mode: 'hash',
	routes: [{
			path: '/indexs',
			name: 'Indexs',
			component: Indexs
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/social',
			name: 'Social',
			component: Social
		},
		{
			path: '/',
			name: 'Social',
			component: Social
		},
		{
			path: '/person',
			name: 'Person',
			component: Person
		},
		{
			path: '/rule',
			name: 'Rule',
			component: Rule
		},
		{
			path: '/rights',
			name: 'Rights',
			component: Rights
		},
		{
			path: '/manage',
			name: 'Manage',
			component: Manage
		},
		{
			path: '/edit',
			name: 'Edit',
			component: Edit
		},
		{
			path: '/adress',
			name: 'Adress',
			component: Adress
		},
		{
			path: '/addadr',
			name: 'Addadr',
			component: Addadr
		},
		{
			path: '/orders',
			name: 'Orders',
			component: Orders
		},
		{
			path: '/tax',
			name: 'Tax',
			component: Tax
		},
		{
			path: '/index',
			name: 'Index',
			component: Index
		},
		{
			path: '/card',
			name: 'Card',
			component: Card
		},
		{
			path: '/addcard',
			name: 'Addcard',
			component: Addcard
		},
		{
			path: '/clear',
			name: 'Clear',
			component: Clear
		},
		{
			path: '/foreign',
			name: 'Foreign',
			component: Foreign
		},
		{
			path: '/fundchange',
			name: 'Fundchange',
			component: Fundchange
		},
		{
			path: '/fundperson',
			name: 'Fundperson',
			component: Fundperson
		},
		{
			path: '/income',
			name: 'Income',
			component: Income
		},
		{
			path: '/infochange',
			name: 'Infochange',
			component: Infochange
		},
		{
			path: '/out',
			name: 'Out',
			component: Out
		},
		{
			path: '/refund',
			name: 'Refund',
			component: Refund
		},
		{
			path: '/datechange',
			name: 'Datechange',
			component: Datechange
		},
		{
			path: '/oorders',
			name: 'Oorders',
			component: Oorders
		},
		{
			path: '/userinfo',
			name: 'Userinfo',
			component: Userinfo
		}
	]
})

router.beforeEach((to, from, next) => {
	const oauth_token = Cookies.get('oauth_token')
	// const v_key = Cookies.get('oauth_token_exp')
	// const openid = Cookies.get('openid')
	if (!oauth_token && false) {
		// if (to.path === '/login') {
		// 	next()
		// } else {
		//获取openid
		window.location.href = "http://m.fashi77.com/towxoauth?link_url='http://localhost:8080/indexs'"
		//获取token
		axios.post('http://m.fashi77.com/token/Produce').then(res => {
			console.log(res)
			Cookies.set('oauth_token', res.data.result.oauth_token, 30 * 24 * 60 * 60)
			Cookies.set('v_key', res.data.result.oauth_token_exp, 30 * 24 * 60 * 60)
		}).catch(err => {
			console.log(err)
		})
		Cookies.set('now_url', to.fullPath)
		// next('/login')
		// }
	} else {
		next()
	}

})
export default router
