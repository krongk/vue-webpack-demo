<template>
  <div class="card facebook-card">
    <div class="card-header">
      <div class="facebook-avatar"><img :src="require('../../static/images/user.png')" width="34" height="34"></div>
      <div class="facebook-name">学江的杂货铺</div>
      <div class="facebook-date">专注海外代购很多年</div>
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <!-- 产品列表 -->
        <swiper :options="swiperCardShop">
          <swiper-slide v-for="slide in swiperSlides">
            <img :src="slide.img" class="img-responsive"/>
          </swiper-slide>
          <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
        </swiper>
      </div>
    </div>
    <div class="card-footer">
      <router-link to="/store/32" class="link">进入商店</router-link>
      <router-link to="#" class="btn "><i class="fa fa-user"></i> 私藏</router-link>
    </div>
  </div>
</template>

<script>
// import { WAIT_IMG } from '../../util'
export default {
  name: 'card-shop',
  data () {
    return {
      swiperCardShop: {
        autoplay: 0,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: false,
        slidesPerView: 4,
        spaceBetween: 5
      },
      swiperSlides: [
        {
          name: '产品1',
          img: require('../../static/images/product-1.jpg')},
        {
          name: '产品二',
          img: require('../../static/images/product-2.jpg')},
        {
          name: '产品3',
          img: require('../../static/images/product-1.jpg')},
        {
          name: '产品4',
          img: require('../../static/images/product-2.jpg')}
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
