<template>
  <div id="app">
    <mt-header v-if="visiable" :title="title" :fixed=false style="background: #4e4a97;">
      <router-link slot="left" class="page-back" :to="'/tab'">
        <mt-button icon="fa fa-back">返回</mt-button>
      </router-link>
      <mt-button icon="search" slot="right" v-on:click="showSearch"></mt-button>
    </mt-header>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: '探码科技'
    }
  },
  methods: {
    showSearch () {
      this.$router.push('/search')
    }
  },
  computed: {
    visiable () {
      return ['/', '/tab', '/search', '/welcome-screen'].indexOf(this.$route.path) < 0
    }
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-bottom: 40px;
  }

</style>
