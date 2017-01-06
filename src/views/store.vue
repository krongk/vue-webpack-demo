<template>
  <div class="store">
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
              <mt-button type="default" size="small"><i class="fa fa-plus"></i> 分享</mt-button>
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-item" :style="{ 'background-image': `url(${user.bg})`}">
        <p>大家好 我是是了访问法 服务发</p><p>大家好 我是是了访问法 服务发</p>
      </swiper-slide>
    </swiper>

    <hr>
    <p class="title-line">热门推荐</p>
    <card-product v-for="i in 2"></card-product>

    <p class="title-line">更多商品</p>
    <div class="row" v-for="i in 2">
      <router-link to="/product/23" class="col-50" style="border-right: solid 1px #ccc;">
        <img src="/static/images/product-1.jpg" class="img-responsive"/>
        <p>马来西亚浓缩金丝燕窝asdaf 江苏分类是</p>
        <span class="red">￥129.2元</span>
      </router-link>
      <router-link to="/product/24" class="col-50">
        <img src="/static/images/product-1.jpg" class="img-responsive"/>
        <p>马来西亚浓缩金丝燕窝</p>
        <span class="red">￥123元</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'store',
  data () {
    return {
      user: {
        name: '学江的杂货铺',
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
