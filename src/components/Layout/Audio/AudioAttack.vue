<template>
<div>
  <div style="font-family:黑体;font-size:40px;
    text-align:center;
    vertical-align:center;
    width:414px;
    height:100px;
    line-height:100px;
    position:relative;left:50%;transform:translateX(-50%);
    font-weight:bold;"
  >语音对抗攻击</div>
  <div style="width:1920px;height:300px;position:relative;left:50%;transform:translateX(-50%);">
    <el-col style="width:800px;margin-left:60px;margin-right:100px;">
      <div>Model Selection</div>
      <swiper-menu></swiper-menu>
    </el-col>
    <el-col style="width:800px;margin-left:100px;margin-right:60px;">
      <div>Model Selection</div>
      <swiper-menu></swiper-menu>
    </el-col>
  </div>
  <div style="width:1920px;height:300px;position:relative;left:50%;transform:translateX(-50%);margin-top:100px;">
    <el-col style="width:800px;">
      <file-upload-box style="margin-left:250px;"></file-upload-box>
      <music-player style="margin-left:250px;"></music-player>
    </el-col>
  </div>
</div>
</template>

<script>

import swiperMenu from '@/components/button/swiperMenu.vue'
import fileUploadBox from '@/components/file_io/fileUploadBox.vue'
import musicPlayer from '../../audio/musicDisplay.vue'

export default {
  components: {
    swiperMenu,
    fileUploadBox,
    musicPlayer
  }
}
</script>
