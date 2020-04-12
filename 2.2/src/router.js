/**
 * 
 * @authors Zoey Huang (1768771373@qq.com)
 * @date    2020-03-26 14:53:05
 * @version 1.0
 */

import Vue from 'vue'
import Router from 'vue-router'

// 引入页面
import Login from './views/Login'
import Home from './views/Home'
import Strategy from './views/Strategy'
import Supplementary from './views/Supplementary'
import Person from './views/Person'
import Plan from './views/Plan'
import Form from './views/Form';
import Map from './views/Map';
import Bike from './views/Bike';
import Trace from './views/Trace';

// 使用router
Vue.use(Router);

// 输出实例
export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', redirect: '/login' },
		{ path: '/login', name: 'login', component: Login },
		{ path: '/home', name: 'home', component: Home},
		{ path: '/strategy', name: 'strategy', component: Strategy },
		{ path: '/plan', name: 'plan', component: Plan },
		{ path: '/form', name: 'form', component: Form },
		{ path: '/map', name: 'map', component: Map },
		{
			path: '/supplementary', name: 'supplementary', component: Supplementary,
			children: [
				{ path: '/bike', name: 'bike', component: Bike },
				{ path: '/trace', name: 'trace', component: Trace },
			]
		},
		{ path: '/person', name: 'person', component: Person },
	]
})