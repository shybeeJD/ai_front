<template>
  <div class="box">
    <div class="picture"></div>
    <div class="title">{{ modelName }}</div>
    <div class="description">{{ discription }}</div>
  </div>
</template>

<script>
export default {
  props: {
    modelName: {
      type: String,
      default: 'My Model'
    },
    discription: {
      type: String,
      default: 'discription\n  有些模型可以用来预测NLP\n  有些模型可以用来搞CV\n  而这个模型什么也干不了\n ......'
    }
  }
}
</script>

<style scoped>
.box {
  background-color: #ffffff;
  border-radius: 10%;
  border: 1px solid;
  border-color: rgb(128, 226, 250);
}

.picture {
  position: relative;
  left: 5%;
  top: 50%;
  width: 25%;
  height: 65%;
  background-size: 100% 100%;
  background-image: url("../button/yellowbox.png");
  transform: translateY(-50%);
}

.title {
  position: relative;
  left: 50%;
  top: -50%;
  width: 30%;
  height: 20%;
  transform: translateY(-50%);
  line-height: 250%;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
}

.description {
  position: relative;
  left: 35%;
  top: -25%;
  width: 60%;
  height: 65%;
  transform: translateY(-50%);
  white-space: pre;
  font-family: 仿宋;
  font-size: 10px;
}
</style>
