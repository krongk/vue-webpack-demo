<template>
  <div class="tab-home ">
    <mt-swipe :show-indicators="false" :auto="5000">
      <mt-swipe-item :style="{ 'background-image': `url(${img})`}"
        v-for="(img, index) in imgs">
      </mt-swipe-item>
    </mt-swipe>

    <!-- swiper -->
    <swiper v-if="true" :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides">
        <router-link to="/catalog/23">
          <img :src="slide.img" class="img-responsive"/>
          <p>{{ slide.name }}</p>
        </router-link>
      </swiper-slide>
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    </swiper>

    <mt-cell
      title="学江的杂货铺"
      label="我是你的邀请商家"
      to="/store/23"
      is-link>
      <span>进入</span>
    </mt-cell>

    <p class="title-line">热门推荐</p>
    <card-product v-for="i in 5"></card-product>

  </div>
</template>

<script>
export default {
  name: 'tab-home',
  data () {
    return {
      title: '学江的杂货铺',
      imgs: [
        require('../../static/images/banner-1.jpg'),
        require('../../static/images/banner-2.jpg')
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
          img: require('../../static/images/icon-sicang.png')},
        {
          name: '热门',
          img: require('../../static/images/icon-remen.png')},
        {
          name: '生活',
          img: require('../../static/images/icon-shenghuo.png')},
        {
          name: '运动',
          img: require('../../static/images/icon-yundong.png')}
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
