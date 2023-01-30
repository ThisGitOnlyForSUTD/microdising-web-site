<template>
  <section class="testimonial">
  <div class="container">
    <div class="section-title">
      <h2 class="title">Промокоды и акции</h2>
      <h5 class="sub-title">Для применения напишите нам</h5>
    </div>
    <VueSlickCarousel class="carusel" :dots="true">
      <img src="@/static/assets/images/slide1.jpg" alt="">
      <img src="@/static/assets/images/slide2.jpg" alt="">
      <img src="@/static/assets/images/slide3.jpg" alt="">
    </VueSlickCarousel>
  </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel }
}
</script>

<style scoped>
.section-title  {
  text-align: center;
  padding-top: 50px;
  margin-bottom: 30px;
}

.container {
  max-width: 1200px;
  padding-bottom: 100px;
}
.sub-title {
  color: #ff3a46;
  font-size: 30px;
  font-weight: 600;
}
.title {
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: 600;
  color: #000000;
}

.testimonial {
  margin-bottom: 250px;
  padding: 0 15px;
  background: rgba(217, 221, 215, 0.834);
}
</style>
