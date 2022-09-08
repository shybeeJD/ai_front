<template>
    <div id="main">
        <div>
          <img class="imgs" :src='main_pic' alt="">
        </div>
        <div class="letter">
          <a>AI攻防系统</a>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      main_pic: require('@/assets/main.png')
    }
  }
}
</script>
<style scoped>
* {
  font-family: Arial,sans-serif;
  /* "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial, */
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
}
</style>
