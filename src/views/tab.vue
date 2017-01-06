<template>
  <div>
    <mt-tab-container v-model="selected" :swipeable=false>
      <mt-tab-container-item id="tab-home">
        <tab-home></tab-home>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-find">
        <tab-find></tab-find>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-share">
        open plus
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-favorite">
        <tab-favorite></tab-favorite>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-me">
        <tab-me></tab-me>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" :fixed=true>
      <mt-tab-item id="tab-home">
        <i class="fa fa-home fa-2x"></i>
        首页
      </mt-tab-item>
      <mt-tab-item id="tab-find">
        <i class="fa fa-eye fa-2x"></i>
        发现
      </mt-tab-item>
      <mt-tab-item id="tab-share" class="share-plus">
        <router-link to="/">
          <i class="fa fa-plus-circle fa-3x"></i>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="tab-favorite">
        <i class="fa fa-star-half-o fa-2x"></i>
        捧场
      </mt-tab-item>
      <mt-tab-item id="tab-me">
        <i class="fa fa-user fa-2x"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import TabHome from './tab-home.vue'
  import TabFind from './tab-find.vue'
  import TabFavorite from './tab-favorite.vue'
  import TabMe from './tab-me.vue'

  export default {
    name: 'page-tabbar',
    data () {
      return {
        selected: 'tab-home'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    },
    components: {
      TabHome,
      TabFind,
      TabFavorite,
      TabMe
    }
  }
</script>

<style scoped>
  .mint-tabbar.is-fixed{
    z-index: 1000;
  }

  .mint-tab-item{
    font-size: 16px;
    text-align: center;
  }
  .mint-tab-item i{
    display: block;
  }
  .share-plus i{
    position: absolute;
    font-size: 6em;
    top: -10px;
  }
  /*白色背景，透明度0.6*/
  .mint-tabbar > .mint-tab-item.is-selected{
    color: red;
    background: rgb(255, 255, 255);
    background: rgba(255, 255, 255, 0.6);
    background: transparent\9;
    zoom: 1;
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99ffffff, endColorstr=#99ffffff);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99ffffff, endColorstr=#99ffffff)";
  }

</style>
