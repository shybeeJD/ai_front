<template>
<div>
  <el-col style="width:33%;">
    <div style="width:100px;height:100px;background-color:green;
    position:relative;left:50%;transform:translateX(-50%);"></div>
    <!-- <circle-menu
      v-bind="{
        text: 'ASR模型',
        mainCircleRadio: '150',
        direc: 'left',
        completeCircle: '0.5',
        menuButtonId: 'erase-left'
      }"
    >
    </circle-menu> -->
  </el-col>
  <el-col style="width:33%;">
    <div style="width:100px;height:100px;background-color:red;
    position:relative;left:50%;transform:translateX(-50%);"></div>
    <!-- <el-row style="height:60px;">
      <h1 style="text-align: center;">语音擦除</h1>
    </el-row>
    <el-row>
      <fileUploadBox ref="fileUpload"
      v-bind="{uploadCallBack: uploadFileCallBack}"/>
    </el-row>
    <el-row>
      <musicPlayer
      ref="playerBefore"/>
    </el-row>
    <el-row style="height:150px;">
      <ring-button v-bind:text="'开始擦除'"/>
    </el-row> -->
  </el-col>
  <el-col style="width:33%;">
    <!-- <div style="width:100px;height:100px;background-color:black;
    position:relative;left:50%;transform:translateX(-50%);"></div> -->
    <!-- <circle-menu
      v-bind="{
        text: '擦除模型',
        mainCircleRadio: '150',
        direc: 'right',
        completeCircle: '0.5',
        menuButtonId: 'erase-right'
      }"
    >
    </circle-menu> -->
  </el-col>
  <!-- <el-col style="width:350px;">
    <circle-menu v-bind="{text:'ASR模型'}"></circle-menu>
  </el-col>
  <el-col style=" width:350px;">
    <el-row style="height:60px;">
      <h1 style="text-align: center;">语音擦除</h1>
    </el-row>
    <el-row style="height:200px;">
      <fileUploadBox ref="fileUpload"
      v-bind="{uploadCallBack: uploadFileCallBack}"/>
    </el-row>
    <el-row style="height:50px;">
      <i class="el-icon-video-play" style=""></i>
      <el-button style="">语音识别</el-button>
    </el-row>
    <el-row style="heith:20px">
      <div style="height:20px;">识别结果:</div>
    </el-row>
    <el-row style="height:150px;">
    <ring-button v-bind:text="'开始擦除'" style=""/>
    </el-row>
    <el-row style="height:50px;">
      <i class="el-icon-video-play" style=""></i>
      <el-button style="">语音识别</el-button>
    </el-row>
    <el-row style="height:20px">
      <div style="height:20px;">识别结果:</div>
    </el-row>
    <el-row style="height:10px">
      <musicPlayer ref="playerAfter"/>
    </el-row>
  </el-col>
  <el-col style="">
    <circle-menu v-bind="{text:'擦除模型'}"></circle-menu>
  </el-col> -->
</div>
</template>

<script>
import circleMenu from '@/components/button/circleMenu.vue'
import fileUploadBox from '../../file_io/fileUploadBox.vue'
import ringButton from '../../button/ringButton.vue'
import musicPlayer from '../../audio/musicDisplay.vue'
import swiperMenu from '@/components/button/swiperMenu.vue'
export default {
  components: {
    circleMenu,
    fileUploadBox,
    ringButton,
    musicPlayer,
    swiperMenu
  },
  data () {
    return {
      uploadFile: require('@/assets/bensound-dreams.mp3')
    }
  },
  mounted () {

  },
  methods: {
    uploadFileCallBack (state, uploadFile) {
      console.log('state is ' + state + ' In Erase Page')
      this.uploadFile = URL.createObjectURL(uploadFile)
      console.log(this.uploadFile)
      this.$refs.playerBefore.changeSource(this.uploadFile)
    }
  }
}
</script>

<style>
</style>
