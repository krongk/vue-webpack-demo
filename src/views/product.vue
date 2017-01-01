<template>
  <div class="product">
    Product
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      msg: 'Tanmer.com',
      visible: false,
      value1: true,
      value2: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
