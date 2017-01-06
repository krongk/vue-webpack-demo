// 引入组件！直接使用es6的语法
import index from './views/Index.vue'
import tab from './views/tab.vue'
import welcomeScreen from './views/welcome-screen.vue'
import User from './views/user.vue'
import Order from './views/order.vue'
import Post from './views/post.vue'
import Store from './views/store.vue'
import Product from './views/product.vue'
import Catalog from './views/catalog.vue'
import Search from './views/search.vue'

module.exports = [  // 定义路由映射
  {
    path: '/',
    redirect: '/tab'
  },
  {  // 访问地址
    path: '/index', // 定义路由的名字。方便使用。
    component: index  // 引用的组件名称，对应上面使用`import`导入的组件
    // component:require("components/app.vue")//还可以直接使用这样的方式也是没问题的。不过会没有import集中引入那么直观
  },
  {
    path: '/tab',
    component: tab
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/welcome-screen',
    component: welcomeScreen
  },
  {
    path: '/user/:userId',
    name: 'user',
    component: User
  },
  {
    path: '/store/:storeId',
    name: 'store',
    component: Store
  },
  {
    path: '/catalog/:catalogId',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: Product
  },
  {
    path: '/post/:postId',
    name: 'post',
    component: Post
  },
  {
    path: '/order/:orderId',
    name: 'order',
    component: Order
  }
]
