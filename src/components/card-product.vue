<template>
  <div class="card facebook-card">
    <div class="card-content">
      <router-link to="/product/23" class="card-content-inner2">
        <img :src="require('../../static/images/banner-product.jpg')" width="100%">
        <p style="text-align: left; padding-left: 10px; font-size: 18px;"> 这是新爆款产品茉莉花小</p>
      </router-link>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-80">
          <router-link to="/user/23" v-for="i in 5" class="facebook-avatar"><img :src="require('../../static/images/user.png')" width="30" height="30"></router-link>
          <router-link to="/users" class="facebook-avatar"><img :src="require('../../static/images/icon-more.png')" width="30" height="30"></router-link>
        </div>
        <div class="col-20">
          <router-link to="/product/2"><span style="font-size:24px; color: red; padding-right: 10px;">￥32.5</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { WAIT_IMG } from '../../util'
export default {
  name: 'card-product',
  // props: {
  //   data: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data () {
    return {

    }
  },
  created () {
      // if (this.data.img) {
      //     this.$covImg(this, this.data.img, cloudSrc => {
      //         this.cloudSrc = cloudSrc
      //         this.noImg = false
      //     })
      // }
  }
}
</script>

<style scoped>
/* === F7 Cards === */

</style>
