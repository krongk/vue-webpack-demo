// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 程序入口
import routes from './routes'

// Element UI
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(Element)

// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// vueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter({
  base: __dirname,
  routes
})

// 开启debug模式
Vue.config.debug = true

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
// router.start(App, '#app')
new Vue({
  components: { App },
  template: '<App/>',
  router
}).$mount('#app')
