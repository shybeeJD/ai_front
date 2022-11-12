<template>
<div>
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-color:black;width:600px;height:300px"></div>
            <div class="swiper-slide" style="background-color:green;width:600px;height:300px"></div>
            <div class="swiper-slide" style="background-color:red;width:600px;height:300px"></div>
            <div class="swiper-slide" style="background-color:orange;width:600px;height:300px"></div>
            <div class="swiper-slide" style="background-color:pink;width:600px;height:300px"></div>
            <div class="swiper-slide" style="background-color:blue;width:600px;height:300px"></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: '',
  data () {
    return {}
  },
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      Swiper('.swiper-container', {
        loop: true,
        // 分页器
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../../../node_modules/swiper/dist/css/swiper.css";
/* .swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
} */
</style>
