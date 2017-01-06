<template>
  <div>
    <mt-tab-container v-model="selected" :swipeable=false>
      <mt-tab-container-item id="tab-home">

        <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
          <div class="card facebook-card">
            <div class="card-content">
              <div class="card-content-inner3">
                <img src="/static/images/banner-product.jpg" width="100%">
                <h3 style="text-align: left"> 这是新爆款产品茉莉花小</h3>
                <p style="text-align: left">
                  元旦促销
                  <mt-badge type="primary">包邮</mt-badge>
                  <mt-badge type="error">优惠</mt-badge>
                </p>
              </div>
            </div>
            <div class="card-footer">
              他们购买了：
              <a href="#" class="link">
                <div v-for="i in 6" class="facebook-avatar"><img src="/static/images/user.png" width="34" height="34"></div>
              </a>
            </div>
          </div>

          <mt-cell
            title="产品选项"
            :click="showPopup"
            value="">
          </mt-cell>

          <mt-cell title="该产品单件包邮" label="包含一般贸易税，7天无理由退货" is-link></mt-cell>
        </mt-loadmore>

        <div class="product-detail" v-if="showDetail">
          <h3>产品详情</h3>
          <img src="/static/images/demo-product.jpg" class="img-responsive" />
        </div>

      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected" :fixed=true>
      <mt-tab-item id="tab-home">
        <div class="row" style="margin: 0px 0px 0px 0px;">
          <div class="col-50" style="border-right: solid 1px #ccc;">
            <a style="font-size: 24px; color: red; margin-top:20px;">23.45元</a>
          </div>
          <div class="col-50">
            <mt-button type="danger" @click.native="showPopup" style="height: 26px; margin:0px; padding: 0px 20px; display: block;">立即购买</mt-button>
          </div>
        </div>
      </mt-tab-item>
    </mt-tabbar>
    <mt-popup v-model="popupVisible" position="bottom">
      <div style="display: block; width: 300px; padding: 20px; text-algin: center;">
        <mt-field label="选择尺码" placeholder="请输入邮箱" type="email"></mt-field>
        <mt-field label="选择颜色" placeholder="请输入密码" type="password"></mt-field>
        <mt-field label="其他选项" placeholder=""></mt-field>
        <mt-button type="danger" size="normal" @click.native="pay">进入支付</mt-button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    this.allLoaded = false
    return {
      selected: 'tab-home',
      topStatus: '',
      showDetail: false,
      popupVisible: false,
      rangeValue: 30
    }
  },
  methods: {
    // load more
    handleTopChange (status) {
      console.log('top change')
      this.topStatus = status
    },
    handleBottomChange (status) {
      console.log('bottom change')
      this.topStatus = status
    },
    loadTop (id) {
      console.log('top change - load')
      this.$refs.loadmore.onTopLoaded(id)
    },
    loadBottom () {
      console.log('bottom change - load')
      this.allLoaded = true
      this.$refs.loadmore.onBottomLoaded()
      this.showDetail = true
    },

    // Popup
    showPopup () {
      console.log(353)
      this.popupVisible = true
    },
    pay () {
      this.$router.push({name: 'order', params: { orderId: 123 }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
