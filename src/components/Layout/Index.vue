<template>
  <div>
    <!-- 外层容器 -->
    <el-container style="height: 840px; border: 0px solid #000;">
      <!-- 顶栏容器 -->
      <el-header class="header" style="height: 66px;">
        <!-- 标题图案 -->
        <div class="box">
          <a id="logo">
            <strong><span id="ai">AI</span>攻防系统</strong>
          </a>
        </div>
        <!-- 导航菜单 -->
        <div class="menu">
          <div>
            <el-menu style="background: rgb(225, 225, 225);" default-active="activeIndex" mode="horizontal" text-color="#111" active-text-color="rgba(11, 109, 222, 1)">
            <el-submenu index="1">
              <template slot="title"><a class="navfont">图像攻防</a></template>
              <el-menu-item index="1-1">图像对抗攻击</el-menu-item>
              <el-menu-item index="1-2">图像对抗样本检测</el-menu-item>
              <el-menu-item index="1-3">图像对抗样本擦除</el-menu-item>
              <el-menu-item index="1-4">图像模型增强</el-menu-item>
              <el-menu-item index="1-5">图像后门攻击</el-menu-item>
              <el-menu-item index="1-6">图像投毒攻击</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><a class="navfont">语音攻防</a></template>
              <el-menu-item index="2-1">图像对抗攻击</el-menu-item>
              <el-menu-item index="2-2">图像对抗样本检测</el-menu-item>
              <el-menu-item index="2-3">图像对抗样本擦除</el-menu-item>
              <el-menu-item index="2-4">图像模型增强</el-menu-item>
              <el-menu-item index="2-5">图像后门攻击</el-menu-item>
              <el-menu-item index="2-6">图像投毒攻击</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><a class="navfont">可解释性</a></template>
              <el-menu-item index="3-1">图像</el-menu-item>
              <el-menu-item index="3-2">语音</el-menu-item>
              <el-menu-item index="3-3">自然语言</el-menu-item>
            </el-submenu>
            </el-menu>
          </div>
        </div>
      </el-header>
      <!-- 主体容器 -->
      <el-main id="main">
        <div>
          <img class="imgs" :src='main_pic' alt="">
        </div>
        <div class="letter">
          <a>AI攻防系统</a>
        </div>
      </el-main>
      <!-- 页尾容器 -->
      <div class="copyright-footer">
        <span class="copyright"><strong>AI攻防系统</strong></span>
        <!-- <div style="width:500px; border:1px solid white;"></div> -->
        <br>&copy;2022 NIS&P All Rights Reserved
      </div>
      <!-- <el-footer class="footer" style="height: 60px; background: rgba(56, 76, 99, 1);">
          <div class="copyright-footer"><span class="copyright">AI攻防系统</span><br>&copy;2022 NIS&P All Rights Reserved</div>
      </el-footer> -->
    </el-container>
    <!-- 组件测试 -->
    <el-row>
      <el-col :span="4"><div class="title">{{title}}}</div></el-col>
      <el-col :span="4" offset="3">test</el-col>
    </el-row>
    <el-row>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button type="success">12</el-button>
    </el-row>
    <el-progress :percentage='75' type='circle'></el-progress>
    <el-progress :percentage='50' type='line'></el-progress>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      title: 'AI攻防',
      activeIndex: '2',
      main_pic: require('@/assets/main.png')
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>
* {
  font-family: Arial,sans-serif;
  /* "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial, */
}
.header{
  height: 66px;
  display: flex;
  box-shadow: 0px 2px 3px 4px rgba(0, 0, 0, 0.25);
  background: rgb(225, 225, 225);
  justify-content:space-between;
}
#logo {
  font-size: 35px;
  color: rgba(11, 109, 222, 1);
  letter-spacing: 1px;
  margin: 10px flex;
}
#ai {
  font-size: 36px;
  font-style: italic;
}
.box {
  width: 190px;
  height: 60px;
  line-height: 60px;
  left: 0px;
}
.menu {
  font-size: 30px;
  height: 55px;
  background: rgb(225, 225, 225);
  /* flex-grow:1; */
  /* display: flex; */
  /* justify-content: center; */
}
.navfont {
  font-size: 20px;
}
#main {
  opacity: 1;
  background: linear-gradient(180deg, rgba(72, 198, 239, 1) 0%, rgba(111, 134, 214, 1) 100%);
  box-shadow: 0px 2px 4px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.imgs {
  height: auto;
  justify-content: center;
  align-items: center;
  max-width: 700px;
}
.letter {
  color: #FFF;
  font-size: 80px;
  max-height: 50px;
  width: auto;
  font-family:;
}
.footer{
  display: flex;
  justify-content: center;
  text-align: center;
}
.copyright {
  color: #FFF;
  justify-content: center;
  font-size: 20px;
}
.copyright-footer{
    position: fixed;
    background-color: rgba(56, 76, 99, 1);
    color: #FFF;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 60px;
    line-height: 30px;
}
</style>
