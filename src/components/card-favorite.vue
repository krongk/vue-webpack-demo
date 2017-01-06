<template>
  <div class="card">
    <div class="card-header">热门私友捧场:</div>

    <div class="card-content">
      <div class="list-block media-list">
        <ul>
          <li class="item-content" v-for="i in 5">
            <div class="item-media">
              <img src="/static/images/product-1.jpg" width="114">
            </div>
            <div class="item-inner">
              <div class="item-title-row">
                <router-link to="/post/23" style="font-size: 18px; text-align: left; margin: 0px;">来自南美的咖啡豆，真心美味！</router-link>
              </div>
              <br/>
              <div style="float: left;">
                <img src="/static/images/user.png" width="34" height="34">
                小可
              </div>
              <div style="float: right;">
                <router-link to="/post/23">
                 <mt-button size="small">+ 查看</mt-button>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="card-footer">
      <span>January 20, 2015</span>
      <span>5 comments</span>
    </div>
  </div>

</template>

<script>
// import { WAIT_IMG } from '../../util'
export default {
  name: 'card-favorite',
  // props: {
  //   data: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data () {
    return {
      swiperCardShop: {
        autoplay: 0,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 5
      },
      swiperSlides: [
        {
          name: '私藏',
          img: '/static/images/product-1.jpg'},
        {
          name: '热门',
          img: '/static/images/product-2.jpg'},
        {
          name: '生活',
          img: '/static/images/product-1.jpg'},
        {
          name: '运动',
          img: '/static/images/product-2.jpg'}
      ]
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

<style>
/* === F7 Cards === */
</style>
