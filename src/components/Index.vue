<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <!-- 使用指令 v-link 进行导航。 -->
      <a v-link="{ name: 'hello' }">v-link查看hello</a>
      <a v-link="{ name: 'index' }">回去主页</a>
    </p>
    <!-- 路由外链 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false
    }
  }
}
</script>
