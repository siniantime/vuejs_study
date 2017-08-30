//全局变量实现
/*
Vue.component('my-header',{
	template:'<p>this is my header</p>'
})
*/
var myHeaderChild = {
	template: '<p>i am my header child</p>'
}

var myHeader = {
	template: '<p><my-header-child></my-header-child>this {{}} is my header</p>',
	components:{
		'my-header-child':myHeaderChild
	}
}
new Vue({
	el:'#app',
	data:{
		word:'hello world2'
	},
	components:{
		'my-header':myHeader
	}
})