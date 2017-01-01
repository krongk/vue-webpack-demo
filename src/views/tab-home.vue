<template>
  <div class="tab-home">
    <mt-swipe :show-indicators="false" :auto="5000">
      <mt-swipe-item :style="{ 'background-image': `url(${img})`}"
        v-for="(img, index) in imgs">

      </mt-swipe-item>
    </mt-swipe>

    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides">
        <img :src="slide.img" class="img-responsive"/>
        <p>{{ slide.name }}</p>
      </swiper-slide>
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    </swiper>


    <mt-cell
      title="这是你的邀请商家"
      label="学江的杂货铺"
      to="/grid"
      is-link>
      <span>进入</span>
    </mt-cell>

    <card-product v-for="i in 5"></card-product>

  </div>
</template>

<script>
export default {
  name: 'tab-home',
  data () {
    return {
      title: 'Tanmer.com',
      imgs: [
        '/static/images/banner-1.jpg',
        '/static/images/banner-2.jpg'
      ],
      swiperOption: {
        autoplay: 0,
        setWrapperSize: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 30
      },
      swiperSlides: [
        {
          name: '私藏',
          img: '/static/images/icon-sicang.png'},
        {
          name: '热门',
          img: '/static/images/icon-remen.png'},
        {
          name: '生活',
          img: '/static/images/icon-shenghuo.png'},
        {
          name: '运动',
          img: '/static/images/icon-yundong.png'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe {
    height: 180px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
  .mint-swipe-item {
    line-height: 40px;
    background-size: cover;
  }
</style>
