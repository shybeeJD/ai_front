<template>
  <el-upload
    id="fileUploadBox"
    class="upload-demo"
    drag
    action=""
    :show-file-list="false"
    :auto-upload="true"
    :before-upload='testBeforeUpload'
    :on-error="handleResult"
    :on-progress="handleProgress"
    :http-request="upload"
    multiple>
    <div :style="{'visibility': fileState == 0 ? 'visible' : 'collapse'}">
      <div class="el-icon-upload"></div>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </div>
    <!-- <el-progress class="center" type="circle"
      :percentage="percentage"
      :style="{'visibility': fileState == 1 ? 'visible' : 'collapse'}" >
    </el-progress> -->
  </el-upload>
</template>

<script>
export default {
  props: {
    uploadCallBack: {
      type: Function,
      default: () => { console.log("Call Back dosen't init") }
    }
  },
  data () {
    return {
      fileState: 0, // 0: waiting for upload; 1: uploading; 2: upload success;
      percentage: 0,
      myFile: 0
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
      this.myFile = file
    },
    upload () {
      var xmlhttp = new XMLHttpRequest()
      var xmlhttpUrl = 'http://localhost:9999/upload'
      xmlhttp.open('post', xmlhttpUrl, true)
      // xmlhttp.setRequestHeader('Content-Type', 'multipart/form-data;')
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) { // 成功
          var list = JSON.parse(xmlhttp.responseText)
          console.log(list)
        } else {
          console.log(xmlhttp.statusText)
        }
      }
      const formData = new FormData()
      formData.append('file', this.myFile)
      formData.append('file_name', this.myFile.name)
      formData.append('file_type', this.myFile.type)
      xmlhttp.send(formData)
      this.uploadCallBack('1', this.myFile)
    },
    getFile () {
      return this.myFile
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
.el-upload { /* vue库中的样式 */
  position: relative;
  /* left: 50%;
  transform: translate(-50%,0%); */
}
</style>
