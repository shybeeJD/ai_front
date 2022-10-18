<template>
<div>
  <el-col style="width:350px;position: absolute;left: 30%;top: 50%;transform: translate(-50%, -50%);">
    <circle-menu v-bind="{text:'ASR模型'}"></circle-menu>
  </el-col>
  <el-col style=" width:350px;position: absolute;left: 50%;top: 45%;transform: translate(-50%, -50%);">
    <el-row style="height:60px;">
      <h1 style="text-align: center;">语音擦除</h1>
    </el-row>
    <el-row style="height:200px;">
      <fileUploadBox style="position: absolute;left:50%; transform: translate(-50%,0%);"/>
    </el-row>
    <el-row style="height:50px;">
      <i class="el-icon-video-play" style="position: absolute;top: 50%;transform: translate(0%,-50%);"></i>
      <el-button style="position: absolute;top: 50%; right:0%;transform: translate(0%,-50%);">语音识别</el-button>
    </el-row>
    <el-row style="heith:20px">
      <div style="height:20px;">识别结果:</div>
    </el-row>
    <el-row style="height:150px;">
    <ring-button v-bind:text="'开始擦除'" style="position: absolute;left: 50%;transform: translate(-50%,0%);"/>
    </el-row>
    <el-row style="height:50px;">
      <i class="el-icon-video-play" style="position: absolute;top: 50%;transform: translate(0%,-50%);"></i>
      <el-button style="position: absolute;top: 50%; right:0%;transform: translate(0%,-50%);">语音识别</el-button>
    </el-row>
    <el-row style="heith:20px">
      <div style="height:20px;">识别结果:</div>
    </el-row>
  </el-col>
  <el-col style="width:350px;position: absolute;left: 70%;top: 50%;transform: translate(-50%, -50%);">
    <circle-menu v-bind="{text:'擦除模型'}"></circle-menu>
  </el-col>
</div>
</template>

<script>
import circleMenu from '../../button/circleMenu.vue'
import fileUploadBox from '../../file_io/fileUploadBox.vue'
import ringButton from '../../button/ringButton.vue'
export default {
  components: {
    circleMenu,
    fileUploadBox,
    ringButton
  }
}
</script>

<style>
</style>
