<template>
  <div class="card facebook-card">
    <div class="card-content">
      <div class="card-content-inner3">
        <img src="/static/images/banner-product.jpg" width="100%">
        <p style="text-align: left">这是新爆款产品茉莉花小</p>
      </div>
    </div>
    <div class="card-footer">
      <a href="#" class="link">
        <div v-for="i in 6" class="facebook-avatar"><img src="/static/images/user.png" width="34" height="34"></div>
      </a>
      <a href="#" class="link">查看</a>
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
