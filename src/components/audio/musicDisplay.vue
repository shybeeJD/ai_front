<template>
  <div style="height:100px;width:355px;">
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
      <button @click="startSR">语音识别</button>
    </el-col>
    <div>识别结果:</div>
    <!-- https://www.npmjs.com/package/vue-typed-js -->
    <vue-typed-js id="typedJS" v-if="isReloadData"
      :strings="resultSR"
      :shuffle="true"
      :typeSpeed="20"
      :fadeOutClass="'fadeOutClass'"
      :startDelay="500"
      :showCursor="false"
      :contentType="'null'"
    ><p class="typing"></p></vue-typed-js>
  </div>
</template>

<script>
import {formatNumber2MinuteString} from '@/utils/timeTools'
import { VueTypedJs } from 'vue-typed-js'
export default {
  components: {
    VueTypedJs
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
      iconClass: 'el-icon-video-play',
      isReloadData: true,
      resultSR: ['']
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
    },
    startSR () {
      this.resultSR = ['语音识别是一个多学科交叉的领域，它与声学、语音学、语言学、数字信号处理理论、信息论、计算机科学等众多学科紧密相连。由于语音信号的多样性和复杂性，语音识别系统只能在一定的限制条件下获得满意的性能，或者说只能应用于某些特定的场合。语音识别系统的性能大致取决于以下4类因素：1. 识别词汇表的大小和语音的复杂性；2. 语音信号的质量；3. 单个说话人还是多说话人；4. 硬件。']
      this.reload()
    },
    reload () {
      this.isReloadData = false
      this.$nextTick(() => {
        this.isReloadData = true
      })
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
