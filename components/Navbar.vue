<template>
<div class="wrapper container">
  <nav class="navbar">
    <h4 class="navbar-logo" style="color:#000;"><i class="fa fa-phone" style="color:#000;" aria-hidden="true"></i> +7 (913)251-81-35</h4>
    <ul class="navbar-nav">
      <li class="nav-item active"><nuxt-link class="page-scroll" to="/">Главная</nuxt-link></li>
      <li class="nav-item"><a class="page-scroll" href="#work">Каталог</a></li>
      <li class="nav-item"><a class="page-scroll" href="#testimonial">Отзывы</a></li>
      <li class="nav-item"><a class="page-scroll" href="#contact">Контакты</a></li>
    </ul>
    <a class="nav-btn" href="https://aliexpress.ru/store/1102419501">Мы на Aliexpress</a>
    <p class="opt"><a style="color:#000;" href="assets/docx/price.pdf" class="">
            <i class="fa fa-archive"></i>
        Цены для оптовиков</a></p>
</nav>
</div>
</template>

<style lang="scss" scoped>
.navbar-logo {
  color: #ff3a46;
  font-weight: 500;
  text-decoration: underline;
  @media only screen and (max-width: 1010px) {
      display: none;
    }
}
.wrapper {
  width: 100%;
  margin: 0 auto;
}
.navbar{
  background: rgba(231, 231, 231, 0.083);
  padding: 5px 0;
  position: absolute;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &-nav {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    width: 100%;
    @media only screen and (max-width: 1010px) {
      display: none;
    }
  }

  .nav-btn {
      border: 1px solid #ff3a46;
      background: #ff3a46;
      color: #fff;
      border-radius: 50px;
      cursor: pointer;
      text-transform: uppercase;
      padding: 15px 40px;
      font-weight: 700;
      -webkit-box-shadow: 5px 5px 16px -5px rgba(34, 60, 80, 0.78);
      -moz-box-shadow: 5px 5px 16px -5px rgba(34, 60, 80, 0.78);
      box-shadow: 5px 5px 16px -5px rgba(34, 60, 80, 0.78);

      &:hover {
        color: #ff3a46;
        background: rgb(255, 255, 255);
        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
        -moz-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
        box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset;
      }
    }

    .page-scroll {
      text-transform: uppercase;
      color: #ff3a46;
      font-weight:500;

      &:hover {
        text-decoration: underline;
      }
    }
}
</style>
