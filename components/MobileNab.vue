<template>
  <nav class="nav">
    <div class="nav__menu">
      <button class="nav__btn" v-show="showList == false" @click="showList = !showList">
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7H19" stroke="#ff3a46" stroke-width="2" stroke-linecap="round"/>
          <path d="M1 12H19" stroke="#ff3a46" stroke-width="2" stroke-linecap="round"/>
          <path d="M5 17H19" stroke="#ff3a46" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <transition name="show-list">
        <div class="nav__wrapper" v-if="showList" @click="showList = !showList">
          <ul class="nav__list">
            <li class="nav-item"><nuxt-link class="nav__link" to="/">Главная</nuxt-link></li>
            <li class="nav-item"><a class="nav__link" href="#work">Каталог</a></li>
            <li class="nav-item"><a class="nav__link" href="#testimonial">Отзывы</a></li>
            <li class="nav-item"><a class="nav__link" href="#contact">Контакты</a></li>
            <p class="opt"><a href="assets/docx/price.xlsx" class="">
              <i class="fa fa-archive"></i>
              Цены для оптовиков</a></p>
            <ul class="social" style='border-color: #26b2f3'>
              <li><a class="social-item" href="#"><i class="fa fa-telegram" style='color:#26b2f3; font-size: 55px'></i></a></li>
              <li><a class="social-item" href="#"><i class="fa fa-whatsapp" style='color:#39f362; font-size: 55px;'></i></a></li>
            </ul>
          </ul>
        </div>
      </transition>
    </div>
      <a href="#">
        <img src="@/static/assets/images/logo.png" class="nav__logo" alt="logo">
      </a>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',

  data () {
    return {
      showList: false,
      showSearch: false,
      links: [
        { id: 'home', text: 'Главная', url: '/' },
        { id: 'about', text: 'О нас', url: '/about' },
        { id: 'products', text: 'Каталог', url: '/products' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.social {
  margin-top: 200px;
  display: flex;
  justify-content: center;
}

.social-item {
  margin-right: 30px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 2rem 10px 2rem;
  position: fixed;
  z-index: 50;
  top: 0;
  width: 100%;

  &-item {
    &:not(:last-child) {
      display: block;
      margin-bottom: 20px;
    }
  }

  &__logo {
    max-width: 70px;
    // max-height: 30px;
  }

  &__wrapper {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: -2rem;
    left: 0;
    z-index: 2;
  }

  &__menu {
    width: 100%;
  }

  &__list {
    position: absolute;
    z-index: 70;
    top: 2rem;
    left: 0;
    height: 100vh;
    background: rgb(255, 255, 255);
    width: 60%;
    padding-top: 150px;
    -webkit-box-shadow: 12px -2px 5px -5px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 12px -2px 5px -5px rgba(34, 60, 80, 0.6);
    box-shadow: 12px -2px 5px -5px rgba(34, 60, 80, 0.6);

  }

  &__link {
    margin: 0 0 25px 40px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 25px;
    color: #ff3a46;
  }

  &-search {
    display: flex;
    align-content: center;
    justify-content: space-between;

    &__input {
    border: none;
    padding: 0 2px 0 20px;
    color: #fff;
    font-size: 20px;
    background: rgba(27, 27, 27, 0.573);
    border-radius: 3rem;
    }

    &__ico {
      margin: 6px 4px 1px 4px;
    }
  }

  @media (max-width: 620px) {
    background: rgb(255, 255, 255);
   -webkit-box-shadow: 5px 5px 10px 6px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 5px 5px 10px 6px rgba(34, 60, 80, 0.6);
    box-shadow: 5px 5px 10px 6px rgba(34, 60, 80, 0.6);
  }
}

.show-list-enter-active {
     transition: all .3s ease;
}
.show-list-leave-active {
  transition: all .8s;
}
.show-list-enter, .show-list-leave-to {
  transform: translateX(-150px);
  opacity: 0;
}

.show-search-enter-active {
  transition: all .3s ease;
}

.show-search-leave-active {
  transition: all .8s;
}

.show-search-enter, .show-search-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}
</style>
