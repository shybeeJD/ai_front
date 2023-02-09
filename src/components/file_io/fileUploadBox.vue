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
      <div class="el-icon-upload" style="background:black;"></div>
      <div class="el-upload__text" style="padding-top:10px;">点击或将文件拖拽到这里上传</div>
      <div style="color:rgba(0,0,0,0.45);font-size:10px;">支持扩展名：.wav,……</div>
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

<style lang="less" scoped>
/deep/.el-upload{
  width: 100%;
}
/deep/.el-upload .el-upload-dragger{
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: rgba(229, 229, 229, 0.46);
  opacity: 1;
}
/deep/ .el-upload__text{
  font-size: 20px;
  color: rgba(0, 0, 0, 0.85);
}
</style>
