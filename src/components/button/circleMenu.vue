<template>
<div style="transform:translate(105px, 0);">
  <yCircleMenu
    id="circleMenu"
    style="padding-right:140px;padding-bottom:92px;"
    ref="menu"
    :columns='columns'
    :circleOr='circleOr'
    :direc='direc'
    :itemO='itemO'
    :completeCircle='completeCircle'
    :duration='duration'
    :delay='delay'
    :isClose='isClose == 0 ? false : true'
    :offset='offset'>
    <div slot="button" class="mainCircle" :id="menuButtonId"
    v-bind:style="setMainCircleStyle()"
    >{{text}}</div>
  </yCircleMenu>
</div>
</template>

<script>
import yCircleMenu from 'y-circle-menu'
import 'y-circle-menu/dist/yCircleMenu.min.css'
import {testOut1, testOut} from './test.js'
export default {
  components: {
    yCircleMenu
  },

  props: {
    columns: {
      type: Array,
      default () {
        return [{
          render (h) {
            return h('Button', {
              props: {

              },
              class: 'salveCircle',
              on: {
                click: () => testOut1('1231234')
              }
            })
          }
        }, {
          render (h) {
            return h('Button', {
              props: {

              },
              class: 'salveCircle',
              on: {
                click: () => testOut1('1231234')
              }
            })
          }
        }, {
          render (h) {
            return h('Button', {
              props: {

              },
              class: 'salveCircle',
              on: {
                click: () => testOut1('1231234')
              }
            })
          }
        }, {
          render (h) {
            return h('Button', {
              props: {

              },
              class: 'salveCircle',
              on: {
                click: () => testOut1('1231234')
              }
            })
          }
        }, {
          render (h) {
            return h('Button', {
              props: {

              },
              class: 'salveCircle',
              on: {
                click: () => testOut1('1231234')
              }
            })
          }
        }]
      }
    },
    mainCircleRadio: {
      type: String,
      default: '100'
    },
    text: {
      type: String,
      default: ''
    },
    direc: { // 排布区域
      type: String,
      default: 'left'
    },
    completeCircle: { // 圆度
      type: String,
      default: '1.0'
    },
    menuButtonId: {
      type: String,
      default: ' '
    }
  },

  data () {
    return {
      isClose: false, // 自动收起
      circleOr: 0, // 半径
      itemO: 'o', // 原点位置
      duration: 0.5, // item执行时间
      delay: 0.1, // 每个item出现的延迟
      offset: { x: 30, y: 30 } // 生成圆的整体偏移
    }
  },
  methods: {
    testButton123 () {
      testOut()
      console.log('HERE')
    },
    test2 () {
      this.testButton123()
    },
    my_render () {
      console.log(this.columns)
      var tmpF = this.testButton123
      this.columns = [{
        render (h) {
          return h('el-button', {
            props: {
              type: 'success',
              circle: true,
              onclick: 'testButton()'
            }

          })
        }
      }, {
        render (h) {
          return h('el-button', {
            props: {
              type: 'success'
            },
            click: 'testButton123()'
          })
        }
      }, {
        render (h) {
          return h('Button', {
            props: {

            },
            class: 'salveCircle',
            on: {
              click: () => tmpF()
            }
          })
        }
      }]
      console.log(this.columns)
      this.$forceUpdate()
    },
    setMainCircleStyle () {
      return {
        'width': this.mainCircleRadio + 'px',
        'height': this.mainCircleRadio + 'px',
        'line-height': this.mainCircleRadio + 'px',
        'border': Math.floor(parseInt(this.mainCircleRadio) / 6.5).toString() + 'px' + ' solid',
        'border-color': 'rgb(128, 226, 250)',
        'font-size': Math.floor(parseInt(this.mainCircleRadio) / 4).toString() + 'px'
      }
    }
  },
  mounted () {
    document.getElementById(this.menuButtonId).click()
  }
}
</script>

<style>
.salveCircle {
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 50%;
  border: 10px solid;
  border-color: rgb(128, 226, 250);
}

.mainCircle {
  width: 65px;
  height: 65px;
  background-color: #ffffff;
  border-radius: 50%;
  border: 10px solid;
  border-color: rgb(128, 226, 250);
  padding: 20px;
  line-height: 65px;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.mainCircle:hover {
  background: rgba(128, 226, 250, 0.2);
}
</style>
