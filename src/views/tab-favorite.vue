<template>
  <div class="tab-favorite">
    <div class="card">
      <div class="card-content">
        <img :src="require('../../static/images/banner-favorite.jpg')" width="100%">
      </div>
      <div class="card-footer">
        <span>本周捧场值最高店铺</span>
      </div>
      <div class="card-footer">
        <a href="#" class="link">
          <div v-for="i in 6" class="facebook-avatar"><img :src="require('../../static/images/user.png')" width="34" height="34"></div>
        </a>
      </div>
    </div>
    <card-favorite></card-favorite>
  </div>
</template>

<script>
export default {
  name: 'tab-favorite',
  data () {
    return {
      msg: 'Tanmer.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
