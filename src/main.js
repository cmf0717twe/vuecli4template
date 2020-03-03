import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false//产品构建时是否显示提示信息(开发时选择false)

new Vue({
  router,
  store,
  render: h => h(App)
	/*render函数的箭头函数写法，扩写为
	render: function(createElement){
		return createElement(App)
	}
	普通用法: createElement为函数，三个参数分别为("标签名",{标签的属性},[标签的内容])
	内容可再传createElement函数,属性可不写直接写内容
	h为createElement的简写
	传入组件对象: createElement可直接传入组件(如上所示传入App)
	使用render函数可跳过前两步直接进入第三步
	template -> ast(概念语法树) -> render -> vdom(虚拟DOM) -> UI(真实DOM)
	 */
}).$mount('#app')//Vue().$mount()是更进一步的写法,Vue实例中的el属性在Vue源码中也是传给$mount()
