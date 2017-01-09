<template>
  <div class="catalog container scrollable">
    <p class="title-line">生活方式 </p>
    <card-product v-for="i in 20"></card-product>
  </div>
</template>

<script>
export default {
  name: 'catalog',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
