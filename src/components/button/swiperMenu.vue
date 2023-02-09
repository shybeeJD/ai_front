<template>
<div>
  <div class="swiper-container">
        <div class="swiper-wrapper">
            <model-card class="swiper-slide" style="width:300px;height:150px;"
              v-bind="{modelName:'Model CV', discription:'discription\n  这个模型可以用来搞CV\n ......'}">
            </model-card>
            <model-card class="swiper-slide" style="width:300px;height:150px;"
              v-bind="{modelName:'Model NLP', discription:'discription\n  这个模型可以用来搞NLP\n ......'}">
            </model-card>
            <model-card class="swiper-slide" style="width:300px;height:150px;"></model-card>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import modelCard from '@/components/card/modelCard.vue'
export default {
  components: {
    modelCard
  },
  data () {
    return {
      myID: 0
    }
  },
  mounted () {
    this.initSwiper()
    console.log('ID is' + this.myID.toString())
    this.myID += 1
  },
  methods: {
    initSwiper () {
      console.log('HERE')
      Swiper('.swiper-container', {
        loop: false,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        slideToClickedSlide: true
      })
    }
  }
}
</script>

<style scoped>
/* @import "../../../node_modules/swiper/dist/css/swiper.css"; */
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
