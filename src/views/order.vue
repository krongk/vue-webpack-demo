<template>
  <div class="order" style="background-color: #fff;">

    <mt-cell
      title="配送地址"
      to="#"
      is-link
      value="添加">
    </mt-cell>

    <div class="card">
      <div class="card-header">
        澳洲蜜罐蜂蜜1桶
      </div>
      <div class="card-content">
        <div class="card-content-inner">
          <h1 class="red">345.00元</h1>
          <mt-button type="danger">确认支付</mt-button>
        </div>
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


  </div>
</template>

<script>
export default {
  name: 'order',
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
