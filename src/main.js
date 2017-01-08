// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 程序入口
import routes from './routes'
// import 'font-awesome/scss/font-awesome.scss'
import 'font-awesome-webpack'

// Element UI
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(Element)

// https://github.com/surmon-china/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// F7 css
// import 'framework7/dist/css/framework7.ios.min.css'
// import 'framework7/dist/css/framework7.ios.colors.css'

// register root components style from F7
Vue.component('grid', require('components/_grid'))
Vue.component('card', require('components/_card'))
Vue.component('list', require('components/_list'))
Vue.component('card-product', require('components/card-product')) // 产品
Vue.component('card-shop', require('components/card-shop')) // 商家
Vue.component('card-favorite', require('components/card-favorite')) // 分享文章

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

function start () {
  new Vue({
    components: { App },
    template: '<App/>',
    router
  }).$mount('#app')
}

if ('ontouchstart' in window) {
  document.addEventListener('deviceready', function () {
    start()
  })
} else {
  start()
}

