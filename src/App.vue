<template>
  <div id="app">
    <mt-header v-if="visiable" :title="title" :fixed=true style="background: #4e4a97;">
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
  components: {
  },
  name: 'app',
  data () {
    return {
      title: '探码科技',
      items: []
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
    margin: 0;
  }

  .card:first-child {
    margin-top: 0 !important
  }

  .mint-tabbar ~ .mint-tab-container {
    margin-bottom: 50px !important
  }
  .mint-header.is-fixed ~ .container {
    margin-top: 40px !important
  }
  .scrollable {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
