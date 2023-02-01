<template>
 <div class="wrapper" style="background-image: url(assets/images/video-bg.jpg)">
  <section class="desc container">
    <img src="@/static/assets/images/de-1200.jpg" class="desc-image" alt="">
    <div class="desc-content">
      <h2 class="video-title">Алтайский горный и боровой мухомор:</h2>
      <p class="video-text">
        Мухомор — красивый гриб с оригинальным окрасом. Правильное использование грибов может избавить человека от многих недугов.
        При строго рассчитанной дозировке мухомор рекомендуется при таких проблемах, как:
        <br/>
        Депрессия и стресс;
        <br/>
        Мужское бессилие;
        <br/>
        Избавление от вредных привычек;
        <br/>
        Бессонница.
        <br/>
        И это далеко не полный список, при котором может помочь этот гриб.
        После сбора мы перебираем грибы, проверяем на червивость, очищаем их от грунта, лесного листа и отправляем в сушку. Средняя температура в сушильной камере 40-50 градусов. При таком режиме гриб сушится не менее 20-ти часов.  После сушки гриб остывает и поступает на склад в полиэтиленовых пищевых пакетах.
        Такой метод способствует максимально сохранить целебные вещества на срок до 1 года. Мы не храним мухоморы более 1 года - каждый грибной сезон, у нас новый урожай!
        Качество нашего гриба можно посмотреть на фото. А также о положительных свойствах имеются отзывы покупателей, которые вы можете посмотреть ниже или в <strong><a class="video-link" href="https://aliexpress.ru/store/1102419501">нашем магазине на сайте Aliexpress.</a></strong>
        Грибы наши, и полностью соответствуют заявленному.
      </p>
    </div>
  </section>
 </div>
</template>

<script>
export default {
  name: 'Video'
}
</script>

<style scoped lang="scss">
.desc{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}

.video-link {
  color: #064fe0;
  text-decoration: underline;
}
.video-text {
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  line-height: 24px;
}
.video-title {
  font-size: 50px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;

}

.desc-image {
  width: 100%;
  max-width: 350px;
  height: 350px;
  /* background-image: url('@/static/assets/images/de-1200.jp'); */
  /* background-size: contain; */

  @media only screen and (max-width: 1016px) {
    display: none;
    }
}

.desc-content {
  padding: 20px 0;
  max-width: 850px;
}
</style>
