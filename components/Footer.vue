<template>
<footer id="contact" class="wrapper">
  <div class="footer container">
    <img src="@/static/assets/images/logo.png" class="footer-img" alt="Logo">
      <div class="widget-contact pt-45">
        <h4 class="title">Свяжитесь с нами</h4>
        <div class="widget-info">
          <p><span class="widget-title">Почта:</span>amanita_muscaria_2020@mail.ru</p>
          <p><span class="widget-title">Телефон:</span>+7 (913)251-81-35</p>
          <p class="opt"><a href="assets/docx/price.xlsx" class="">
            <i class="fa fa-archive"></i>
            Цены для оптовиков</a></p>
          <ul class="social" style='border-color: #26b2f3'>
            <li><a class="social-item" href="#"><i class="fa fa-telegram" style='color:#26b2f3; font-size: 55px'></i></a></li>
            <li><a class="social-item" href="#"><i class="fa fa-whatsapp" style='color:#39f362; font-size: 55px;'></i></a></li>
          </ul>
        </div>
      </div>
  </div>
</footer>
</template>

<style scoped lang="scss">

.opt {
  margin-top: 30px;
}
.widget-title {
  font-weight: 600;
  margin-right: 10px;
  display: block;
  margin-bottom: 10px;
}

.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 30px;
}
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
}

.social {
  margin-top: 20px;
  display: flex;
}

.social-item {
  margin-right: 30px;
}
.wrapper {
  background-image: url('@/static/assets/images/footer-dot.jpg');
  position: relative;
  bottom: -20rem;
  width: 100%;
  padding: 20px;
}
.footer-img {
  max-width: 300px;
  @media only screen and (max-width: 1016px) {
    display: none;
  }
}
</style>
