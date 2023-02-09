<template>
  <div id="app">
    <!-- 外层容器 -->
    <el-container style="border: 0px solid #000;">
      <!-- 顶栏容器 -->
      <el-header style="height:66px;">
        <Header></Header>
      </el-header>

      <!-- 主体容器 -->
      <el-main style="height:1080px;">
        <router-view></router-view>
      </el-main>

      <!-- 页尾容器 -->
      <Footer></Footer>
    </el-container>

  </div>
</template>

<script>

import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped>
</style>
