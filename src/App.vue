<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{msg}}</h2>
    <!-- <hello></hello> -->
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/index">Go to Index</router-link>
      <router-link to="/hello">Go to Hello</router-link>
      <router-link to="/grid">Go to Hello</router-link>
    </p>
    <hr/>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      msg: '探码科技'
    }
  },
  components: {
    Hello
  }
}
</script>

<style>
@import './assets/css/style.css';

[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
