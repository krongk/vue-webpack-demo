<template>
  <div class="post" style="background-color: #fff;">

    <mt-cell
      title="关联产品： 是否是老地方酸辣粉酸辣粉"
      to="/product/3"
      is-link
      value="查看">
    </mt-cell>

    <img src="/static/images/banner-product.jpg" class="img-responsive"/>

    <div class="card">
      <div class="card-content">
        <div class="card-content-inner">
          <h1 class="red">我在澳洲所见到的燕窝。</h1>
          <hr/>
          <img src="/static/images/demo-post.jpg" class="img-responsive"/>

        </div>
      </div>
      <div class="card-footer">
        <span>捧场店铺：2</span>
        <span>推荐会员：32</span>
        <span>分享文章：5</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'post',
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
