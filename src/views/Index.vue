<template>
  <div id="app">
    <h1>Hello Index!</h1>
    <p>
      {{msg}}
    </p>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false
    }
  }
}
</script>
