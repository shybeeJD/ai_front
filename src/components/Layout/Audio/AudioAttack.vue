<template>
<div class="audio-attack">
  <el-col style="width:0px;position:relative;left:15%;transform:translateX(-50%);">
    <div style="height:50px;"></div>
    <!-- <div>Model Selection</div> -->
    <swiper-menu style="width:300px;height:150px;"></swiper-menu>
    <div style="height:10px;"></div>
    <swiper-menu style="width:300px;height:150px;"></swiper-menu>
  </el-col>

  <el-col style="width:0px;position:relative;left:50%;transform:translateX(-50%);">
    <div style="font-family:黑体;font-size:40px;
      text-align:center;
      vertical-align:center;
      width:414px;
      height:100px;
      line-height:100px;
      position:relative;left:50%;transform:translateX(-50%);
      font-weight: 900;
      color: rgba(0, 0, 0, 1);
      font-style: italic;"
    >语音对抗攻击</div>
    <file-upload-box style="width:320px;position:relative;left:50%;transform:translateX(-50%);">
    </file-upload-box>
    <music-player style="margin-top:25px;width:400px;position:relative;left:50%;transform:translateX(-50%);"></music-player>
    <!-- <div style="position:relative;left:50%;transform:translateX(-50%);">
      <el-col style="">
      </el-col>
    </div> -->
  </el-col>

  <el-col style="width:0px;position:relative;left:75%;transform:translateX(-50%);">
    <div style="height:120px;"></div>
    <ring-button style="position:relative;left:50%;transform:translateX(-50%);"></ring-button>
    <music-player style="position:relative;left:50%;transform:translateX(-50%);"></music-player>
  </el-col>
  <!-- <div style="width:1920px;height:300px;position:relative;left:50%;transform:translateX(-50%);">
    <el-col style="width:800px;margin-left:60px;margin-right:100px;">
      <div>Model Selection</div>
      <swiper-menu></swiper-menu>
    </el-col>
    <el-col style="width:800px;margin-left:100px;margin-right:60px;">
      <div>Model Selection</div>
      <swiper-menu></swiper-menu>
    </el-col>
  </div> -->
</div>
</template>

<script>

import swiperMenu from '@/components/button/swiperMenu.vue'
import fileUploadBox from '@/components/file_io/fileUploadBox.vue'
import musicPlayer from '../../audio/musicDisplay.vue'
import ringButton from '@/components/button/ringButton.vue'

export default {
  components: {
    swiperMenu,
    fileUploadBox,
    musicPlayer,
    ringButton
  }
}
</script>

<style scoped>
.audio-attack {
  background-image: linear-gradient(rgba(161, 196, 253, 1),rgba(194, 233, 251, 1));
  height: 100%;
}
</style>
