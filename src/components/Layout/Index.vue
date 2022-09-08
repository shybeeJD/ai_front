<template>
  <div>
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
import Header from '@/components/Layout/Header'
import MainCover from '@/components/Layout/MainCover'
import Footer from '@/components/Layout/Footer'

export default {
  components: {
    Header,
    MainCover,
    Footer
  }
}
</script>

<style scoped>
</style>
