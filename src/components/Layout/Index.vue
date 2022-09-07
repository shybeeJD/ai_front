<template>
  <div>
    <!-- 外层容器 -->
    <el-container id="container">
      <!-- 顶栏容器 -->
      <el-header id="header" direction="horizontal">
        <!-- 标题图案 -->
        <div class="box"><a id="logo"><strong><span id="ai">AI</span>攻防系统</strong></a></div>
        <!-- 导航菜单 -->
        <el-menu default-active="activeIndex" mode="horizontal">
          <el-submenu index="1">
            <template slot="title">图像攻防</template>
            <el-menu-item index="1-1">图像对抗攻击</el-menu-item>
            <el-menu-item index="1-2">图像对抗样本检测</el-menu-item>
            <el-menu-item index="1-3">图像对抗样本擦除</el-menu-item>
            <el-menu-item index="1-4">图像模型增强</el-menu-item>
            <el-menu-item index="1-5">图像后门攻击</el-menu-item>
            <el-menu-item index="1-6">图像投毒攻击</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">语音攻防</template>
            <el-menu-item index="2-1">图像对抗攻击</el-menu-item>
            <el-menu-item index="2-2">图像对抗样本检测</el-menu-item>
            <el-menu-item index="2-3">图像对抗样本擦除</el-menu-item>
            <el-menu-item index="2-4">图像模型增强</el-menu-item>
            <el-menu-item index="2-5">图像后门攻击</el-menu-item>
            <el-menu-item index="2-6">图像投毒攻击</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">可解释性</template>
            <el-menu-item index="3-1">图像</el-menu-item>
            <el-menu-item index="3-2">语音</el-menu-item>
            <el-menu-item index="3-3">自然语言</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <!-- 主体容器 -->
      <el-main id="main">
      </el-main>
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
    <el-progress :percentage='50' type='line'></el-progress>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      title: 'AI攻防'
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped>
#container{
  height: 1200px;
  border: 1px solid #000;
}
#header{
  height: 200px;
  border: 1px solid rgb(153, 153, 153);
  background: rgb(225, 225, 225);
  padding-bottom: 30px;
}
#main {
  left: 0px;
  top: 100px;
  /* width: 1920px; */
  /* height: 980px; */
  opacity: 1;
  /* background: linear-gradient(180deg, rgba(72, 198, 239, 1) 0%, rgba(111, 134, 214, 1) 100%); */
  box-shadow: 0px 2px 4px 5px rgba(0, 0, 0, 0.25);
}

#logo {
  font-size: 35px;
  color: rgba(11, 109, 222, 1);
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  /* background: #000; */
  letter-spacing: 1px;
  margin: 10px flex;
}
#ai {
  font-size: 36px;
  font-style: italic;
}
</style>
