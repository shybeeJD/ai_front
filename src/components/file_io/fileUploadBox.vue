<template>
<div>
  <el-upload
    id="fileUploadBox"
    class="upload-demo"
    drag
    action="C:\\Users\\xiaoyue\\Documents\\lab_project"
    :show-file-list="false"
    :auto-upload="true"
    :before-upload='testBeforeUpload'
    :on-error="handleResult"
    :on-progress="handleProgress"
    multiple>
    <div :style="{'visibility': fileState == 0 ? 'visible' : 'collapse'}">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </div>
    <el-progress class="center" type="circle"
      :percentage="percentage"
      :style="{'visibility': fileState == 1 ? 'visible' : 'collapse'}" >
    </el-progress>
  </el-upload>
</div>
</template>

<script>
export default {
  data () {
    return {
      fileState: 0, // 0: waiting for upload; 1: uploading; 2: upload success;
      percentage: 0
    }
  },
  methods: {
    handleResult (err, file, fileList) {
      // TODO: 错误处理
      return err
    },
    handleProgress (event, file, fileList) {
      // TODO: 检查这个函数什么时候会被调用 && 改变进度条 （mock能不能实现这个功能呢？）
      console.log('In progress')
    },
    testBeforeUpload (file) {
      console.log(file)
    }
  }
}
</script>

<style>
.center{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
