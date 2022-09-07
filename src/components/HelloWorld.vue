<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-progress :percentage="75" type="circle"></el-progress>
    <el-row type="flex" justify="center">
      <el-progress :percentage="75" type="circle" :span="6"></el-progress>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
