<template>
  <div style="height:40px;">
    <el-col style="width:15px;">
      <div :class="iconClass"
        @click="playAndPause"
        style="line-height:40px;"
      ></div>
    </el-col>
    <el-col style="width:90px;">
      <div style="align:center;text-align:center;line-height:40px;">
        {{ currentTimeFormat }}/{{ totalTimeFormat }}
      </div>
    </el-col>
      <audio ref="music">
        <source :src="musicSource"/>
      </audio>
    <el-col style="width:150px;">
      <el-slider v-model="musicCurrecntTime" :show-tooltip="false" @input="sliderChange"></el-slider>
    </el-col>
    <el-col style="width:100px;position:relative;line-height:40px;">
      <button>语音识别</button>
    </el-col>
  </div>
</template>

<script>
import {formatNumber2MinuteString} from '@/utils/timeTools'
export default {
  components: {
  },
  props: {

  },
  data () {
    return {
      musicCurrecntTime: 0,
      totalTime: 0,
      currentTimeFormat: '0:00',
      totalTimeFormat: '0:00',
      musicSource: ' ', // require('@/assets/test.mp3'),
      iconClass: 'el-icon-video-play'
    }
  },
  methods: {
    playMusic () {
      let musicBox = this.$refs.music
      musicBox.load()
      musicBox.play()
    },
    changeSource (newSource) {
      this.musicSource = newSource
      this.$forceUpdate()
      let musicBox = this.$refs.music
      musicBox.load()
      this.currentTimeFormat = formatNumber2MinuteString(musicBox.currentTime)
      this.totalTimeFormat = formatNumber2MinuteString(musicBox.duration)
      this.musicCurrecntTime = Math.floor(musicBox.currentTime / musicBox.duration * 100)
      this.$forceUpdate()
    },
    changeMusicTime () {
      let musicBox = this.$refs.music
      this.currentTimeFormat = formatNumber2MinuteString(musicBox.currentTime)
      this.totalTimeFormat = formatNumber2MinuteString(musicBox.duration)
      this.musicCurrecntTime = Math.floor(musicBox.currentTime / musicBox.duration * 100)
      this.$forceUpdate()
    },
    sliderChange (value) {
      let musicBox = this.$refs.music
      if (musicBox.duration) {
        musicBox.currentTime = (value + 0.001) / 100 * musicBox.duration
      }
    },
    playAndPause () {
      if (this.iconClass === 'el-icon-video-play') {
        this.iconClass = 'el-icon-video-pause'
        let musicBox = this.$refs.music
        musicBox.play()
      } else if (this.iconClass === 'el-icon-video-pause') {
        this.iconClass = 'el-icon-video-play'
        let musicBox = this.$refs.music
        musicBox.pause()
      }
    }
  },
  mounted () {
    let musicBox = this.$refs.music

    musicBox.ondurationchange = function () {
    }
    // 当前数据可用是触发
    musicBox.oncanplay = this.changeMusicTime

    // 时长改变
    musicBox.ontimeupdate = this.changeMusicTime
    // 音频播放完毕
    musicBox.onended = function () {
    }
    // 音频播放完毕
    musicBox.onerror = function () {
    }
  }
}
</script>

<style>
.el-slider__button{
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background:  rgb(0, 179, 255);
}
</style>
