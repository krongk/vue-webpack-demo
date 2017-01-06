<template>
  <div class="tab-me" style="background-color: #fff;">
    <div class="list-block media-list" style="margin: 0px;">
      <ul>
        <li class="item-content">
          <div class="item-media">
            <img src="/static/images/user.png" width="64">
          </div>
          <div class="item-inner">
            <div class="item-title-row">
              <h3 style="text-align: left; margin: 0px;">学江</h3>
            </div>
            <div class="item-subtitle">这是描述，这是描述部分</div>
            <div style="float: right;"> &gt; </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="card">
      <div class="card-content">
        <div class="card-content-inner">
          <h1 class="red">345.00元</h1>
          我的账号累计收益</div>
      </div>
      <div class="card-footer">
        <span>捧场店铺：2</span>
        <span>推荐会员：32</span>
        <span>分享文章：5</span>
      </div>
    </div>

    <div class="row" style="height: 60px; margin: 40px 0px 0px 0px;">
      <div class="col-50" style="border-right: solid 1px #ccc;">
        <i class="fa fa-cart fa-3x"></i> 购物车
      </div>
      <div class="col-50">
        <i class="fa fa-cart fa-3x"></i> 我的订单
      </div>
    </div>

    <div class="">
      <img src="/static/images/me-share.png" class="img-responsive">
    </div>

    <mt-cell title="标题文字" to="/tab" is-link  value=""></mt-cell>
    <mt-cell title="标题文字" to="/tab" is-link  value=""></mt-cell>
    <mt-cell title="标题文字" to="/tab" is-link  value=""></mt-cell>

  </div>
</template>

<script>
export default {
  name: 'tab-me',
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
