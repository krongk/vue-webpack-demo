<template>
  <div class="tab-find">
    <div class="card">
      <div class="card-content">
        <img :src="require('../../static/images/banner-find.jpg')" width="100%">
      </div>
      <div class="card-footer">
        <span>热门商家</span>
        <a href="#" class="link">推荐</a>
        <a href="#" class="link">最新</a>
      </div>
    </div>
    <card-shop v-for="i in 5"></card-shop>
  </div>
</template>

<script>
export default {
  name: 'tab-find',
  data () {
    return {
      msg: 'Tanmer.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-find {
  
}
</style>
