<template>
  <section class="testimonial" id="testimonial">
    <div class="container">
      <h2 class="title">Отзывы наших клиентов</h2>
      <a href="https://aliexpress.ru/store/1102419501" class="sub-title">Проверьте в нашем магазине на Alibaba.com</a>
    </div>
    <div class="swiper">
      <VueSlickCarousel class="carusel swiper" :dots="true">
      <img src="@/static/assets/images/comments/silder1.jpg" alt="">
      <img src="@/static/assets/images/comments/silder2.jpg" alt="">
      <img src="@/static/assets/images/comments/silder3.jpg" alt="">
    </VueSlickCarousel>
    </div>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel }
}
</script>

<style scoped lang="scss">
.testimonial {
  margin-top: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.swiper {
  margin-top: 50px;
  max-width: 800px;

  @media (max-width: 765px) {
    max-width: 500px;
  }
  @media (max-width: 457px) {
    max-width: 350px;
  }
}

.title {
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 600;
  color: #0a0c19;
}

.sub-title {
  color: #ff3a46;
  font-size: 30px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
}
</style>
