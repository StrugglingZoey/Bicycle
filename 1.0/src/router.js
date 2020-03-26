/**
 * 
 * @authors Zoey Huang (1768771373@qq.com)
 * @date    2020-03-26 14:53:05
 * @version 1.0
 */

import Vue from 'vue'
import Router from 'vue-router'

// 引入页面
import Home from './views/Home'
import Strategy from './views/Strategy'
import Supplementary from './views/Supplementary'
import Person from './views/Person'

// 使用router
Vue.use(Router);

// 输出实例
export default new Router({
	mode:'history',
	routes:[
		{path:'/', redirect:'/home'},
		{path:'/home', name:'home', component:Home},
		{path:'/strategy', name:'strategy', component:Strategy},
		{path:'/supplementary', name:'supplementary', component:Supplementary},
		{path:'/person', name:'person', component:Person},
	]
})