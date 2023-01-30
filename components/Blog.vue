<template>
  <section class="blog container">
    <img class="blog-img" src="@/static/assets/images/Shiitake.jpg" alt="Video">
    <div class="blog-content">
      <h2 class="blog-title">Инструкция по применению</h2>
      <p class="blog-text">
        Микродозинг мухоморов — это употребление сушеных грибов в сверхмалой, буквально микроскопической дозировке. Идея такой практики возникла из понятия микродозинга психоактивных веществ в целом. Особенность мухомора - он легален и легкодоступен. Эти два фактора привели к тому, что на виртуальных прилавках появилась масса биологически активных добавок из двух видов мухоморов, распространенных в наших широтах. Разбираемся, для чего употребляют мухоморы, есть ли от них положительные эффекты и не опасно ли это?
      </p>
    </div>
  </section>

  <!--====== VIDEO PART ENDS ======-->
</template>

<script>
export default {
  name: 'Video'
}
</script>

<style scoped lang="scss">

.blog-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
.blog {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 180px 0;

  @media only screen and (max-width: 1016px) {
    padding: 150px 25px;
    text-align: center;
    }
}

.blog-title {
  font-size: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 50px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.2;

  @media only screen and (max-width: 1016px) {
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    padding: 0 25px;
    }
}
.blog-content {
  max-width: 750px;
}
.blog-img {
  max-width: 450px;
  width: 100%;
  @media only screen and (max-width: 1016px) {
    display: none;
    }
}
</style>
