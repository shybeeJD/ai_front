<template>
  <div id="app">
    <!-- 外层容器 -->
    <el-container style="height: 840px; border: 0px solid #000;">
      <!-- 顶栏容器 -->
      <el-header style="height: 66px;">
        <Header></Header>
      </el-header>
      <!-- 主体容器 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- 页尾容器 -->
      <Footer></Footer>
    </el-container>

  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue'
import Main from '@/components/Layout/MainCover.vue'
import Footer from '@/components/Layout/Footer.vue'
export default {
  components: {
    Header,
    Main,
    Footer
  }
}
</script>
<style scoped>
</style>
