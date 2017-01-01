<template>
  <div class="card facebook-card">
    <div class="card-header">
      <div class="facebook-avatar"><img src="/static/images/user.png" width="34" height="34"></div>
      <div class="facebook-name">John Doe</div>
      <div class="facebook-date">Monday at 2:15 PM</div>
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <!-- swiper -->
        <swiper :options="swiperCardShop">
          <swiper-slide v-for="slide in swiperSlides">
            <img :src="slide.img" class="img-responsive"/>
          </swiper-slide>
          <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
        </swiper>
      </div>
    </div>
    <div class="card-footer">
      <a href="#" class="link">进入商店</a>
      <a href="#" class="btn "><i class="fa fa-user"></i> 私藏</a>
    </div>
  </div>
</template>

<script>
// import { WAIT_IMG } from '../../util'
export default {
  name: 'card-shop',
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
