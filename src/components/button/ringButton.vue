<template>
<div id="ringButton" class="ringButton">{{text}}</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '选择方法'
    }
  }
}
</script>

<style>
.ringButton {
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
}

.ringButton:hover {
  background: rgba(128, 226, 250, 0.2);
}
</style>
