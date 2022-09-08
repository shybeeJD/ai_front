<template>
    <div class="header">
        <!-- 标题图案 -->
        <div class="box">
          <a id="logo">
            <strong><router-link to="/MainCover"><span id="ai">AI</span>攻防系统</router-link></strong>
          </a>
        </div>
        <!-- 导航菜单 -->
        <div class="menu">
          <div>
            <el-menu style="background: rgb(225, 225, 225);" default-active="$route.path" mode="horizontal" text-color="#111" active-text-color="rgba(11, 109, 222, 1)" router="true">
            <el-submenu index="1">
              <template slot="title"><router-link to="/Image">图像攻防</router-link></template>
              <el-menu-item index="/ImageAttack">图像对抗攻击</el-menu-item>
              <el-menu-item index="/ImageDetect">图像对抗样本检测</el-menu-item>
              <el-menu-item index="/ImageErase">图像对抗样本擦除</el-menu-item>
              <el-menu-item index="/ImageEnhancement">图像模型增强</el-menu-item>
              <el-menu-item index="/ImageBackdoor">图像后门攻击</el-menu-item>
              <el-menu-item index="/ImagePoison">图像投毒攻击</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><router-link to="/Audio">语音攻防</router-link></template>
              <el-menu-item index="/AudioAttack">语音对抗攻击</el-menu-item>
              <el-menu-item index="/AudioDetect">语音对抗样本检测</el-menu-item>
              <el-menu-item index="/AudioErase">语音对抗样本擦除</el-menu-item>
              <el-menu-item index="/AudioEnhancement">语音模型增强</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><router-link to="/Interpretability">可解释性</router-link></template>
              <el-menu-item index="3-1">图像</el-menu-item>
              <el-menu-item index="3-2">语音</el-menu-item>
              <el-menu-item index="3-3">自然语言</el-menu-item>
            </el-submenu>
            </el-menu>
          </div>
        </div>
    </div>
</template>

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
a{
text-decoration: none;
color: #303133;
}
a:hover {
    border-bottom: 2px solid #409EFF;
    color:#409EFF;
}
</style>
