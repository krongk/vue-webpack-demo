<template>
  <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '外卖'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      }
    }
  }
</script>
