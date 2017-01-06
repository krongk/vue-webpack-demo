<template>
  <div class="user">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-item" :style="{ 'background': `url(${user.bg})`, 'background-size': 'cover'}">
        <div class="profile-media">
          <div class="profile-details">
            <img  :src="user.headshot" class="img-circle profile-image animated rotateIn">
            <p>
              {{ user.name }}
            </p>
            <p>
              <mt-button type="default" size="small"><i class="fa fa-plus"></i> 捧场</mt-button>
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item" :style="{ 'background-image': `url(${user.bg})`}">
        <p>大家好 我是是了访问法 服务发</p><p>大家好 我是是了访问法 服务发</p>
      </swiper-slide>
    </swiper>

    <hr>
    <p class="title-line">他关注的商家</p>
    <card-shop v-for="i in 4"></card-shop>

  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      user: {
        name: '学江',
        headshot: '/static/images/user.png',
        bg: '/static/images/banner-store.jpg'
      },
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-slide{
  height: 200px;
}
.swiper-item .profile-media{
  padding: 20px 0 0 0;
}
</style>
