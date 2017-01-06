<template>
  <div class="search">
    <p class="title-line">分类搜索 </p>
    <div class="row" style="">
      <router-link to="/catalog/23" v-for="i in 8" class="col-33" style="border-right: solid 1px #ccc;">
        <i class="fa fa-th fa-2x"></i>
        <p>购物车</p>
      </router-link>
    </div>

    <p class="title-line">按名称搜索 </p>
    <mt-search v-model="value">
      <mt-cell
        v-for="item in result"
        :title="item.title"
        :value="item.value">
      </mt-cell>
    </mt-search>


  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      value: '',
      result: [
        {title: 'title1', value: 'value1'},
        {title: 'title1=2', value: 'value2'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
