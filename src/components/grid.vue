<template>
  <div>
    <h1>{{ msg }}</h1>
    <mt-button size="large" v-on:click="toask">large</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'gird',
  data () {
    return {
      msg: 'Tanmer.com'
    }
  },
  methods: {
    toask: function () {
      Toast('提示信息')
    }
  }
}
</script>

<style>
 .mint-swipe{
   background: gray;
 }
 .mint-swipe-item{
   background-color: blue;
 }
 .is-active{
   background: red;
 }
</style>
