// 引入组件！直接使用es6的语法
import index from './components/Index.vue'
import hello from './components/Hello.vue'
import grid from './components/grid.vue'

module.exports = [  // 定义路由映射
  {  // 访问地址
    path: '/index', // 定义路由的名字。方便使用。
    component: index  // 引用的组件名称，对应上面使用`import`导入的组件
    // component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观
  },
  {
    path: '/hello',
    component: hello
  },
  {
    path: '/grid',
    component: grid
  }
]
