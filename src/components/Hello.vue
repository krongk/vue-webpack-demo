<template>
  <div class="hello">
    <p>
      <el-button @click="visible = true" type="primary">按钮</el-button>
    </p>
    <el-dialog v-model="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog>

    <el-switch
      v-model="value1"
      on-text=""
      off-text="">
    </el-switch>
    <el-switch
      v-model="value2"
      on-color="#13ce66"
      off-color="#ff4949">
    </el-switch>

  </div>
</template>

<script>
export default {
  name: 'hello',
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
