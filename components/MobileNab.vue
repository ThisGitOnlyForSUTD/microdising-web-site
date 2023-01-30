<template>
  <div class="mobile-header container">
    <section class="mobile-header-nav container">
      <router-link to="/" class="mobile-header__logo">
      </router-link>

      <router-link tag="a" to="/*" class="mobile-header-nav__link">
        </router-link>

        <router-link tag="a" to="/*" class="mobile-header-nav__link">
        </router-link>

        <router-link tag="a" to="/*" class="mobile-header-nav__link">
        </router-link>
    </section>
    <section class="mobile-header__main container">
      <div class="mobile-header__menu">
      <transition name="show-list">
        <div class="mobile-header__wrapper" v-if="showList">
          <ul class="mobile-header__list">
              <h3 class="mobile-header__title">Каталог</h3>
            <router-link
            v-for="link in links"
            :key="link.id + 1"
             class="mobile-header__link"
             tag="li"
             active-class="active"
             :to="link.url"
             exact
             >
              <span>
                {{ link.text }}
              </span>
              <div class="mobile-header__arrow">
              </div>
            </router-link>
          </ul>
        </div>
      </transition>
      </div>
      <form action="/catalog/" class="mobile-header-search">
      <button class="mobile-header-search__btn">
      </button>
      <input type="text" class="mobile-header-search__input" placeholder="Поиск среди товаров">
    </form>
    </section>

    <v-navigation/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showList: false,
      links: [
        { id: '1', text: 'Ноутбуки и аксессуары', url: '/*', img: 'item1' },
        { id: '2', text: 'Смартфоны и аксессуары', url: '/*', img: 'item2' },
        { id: '3', text: 'Телевизоры и аксессуары', url: '/*', img: 'item3' },
        { id: '4', text: 'Фото и видеотехника', url: '/*', img: 'item4' },
        { id: '5', text: 'Планшеты и аксессуары', url: '/*', img: 'item5' },
        { id: '6', text: 'Наушники и аудиотехника', url: '/*', img: 'item6' },
        { id: '7', text: 'Гейминг', url: '/*', img: 'item7' },
        { id: '8', text: 'Умные часы', url: '/*', img: 'item8' },
        { id: '9', text: 'Портативная акустика', url: '/*', img: 'item9' },
        { id: '10', text: 'Сетевое оборудование', url: '/*', img: 'item10' },
        { id: '11', text: 'Офисная техника', url: '/*', img: 'item11' },
        { id: '12', text: 'Умный дом', url: '/*', img: 'item12' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-header {
  width: 100%;
  margin: 0 auto;

  &__logo {
    margin-right: 32px;

    img {
      width: 159px;
    }
  }

  &__main {
    display: flex;
    align-items: center;
  }

  &-search {
      display: flex;
      align-items: center;
      height: 36px;
      width: 100%;
      max-width: 261px;
      border: 2px solid #DDDDDD;
      border-radius: 100px;
      padding: 18px 10px;

      &__btn {
        margin-right: 6px;
      }

      &__input {
        border: none;
        width: 100%;
        font-size: 14px;
      }
    }

  &__arrow {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }

  &__title {
    margin: 48px 0 18px 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  &__img {
    width: 35px;
    height: 35px;
    margin-right: 8px;
  }

  &__close {
    position: absolute;
    top: 18px;
    right: 15px;
    z-index: 3000;
    cursor: pointer;
  }
  &__wrapper {
    width: 100%;
    height: 100vh;
    background: rgb(255, 255, 255);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
  }

  &__menu {
    margin-right: 15px;
  }

  &__list {
    position: absolute;
    z-index: 70;
    top: 0;
    left: 0;
    height: 100%;
    background: rgb(255, 255, 255);
    width: 100%;
    overflow: hidden;
  }

  &-nav {
    margin: 20px 0 23px 0;
    display: flex;
    align-items: center;

    &__link {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
  }

  &__link {
    padding: 8px 0 8px 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    line-height: 19px;
    position: relative;

    span {
      width: 240px;
    }

    &:not(:last-child) {
    border-bottom: 2px solid #E8E8E8;
    }
  }
}
</style>
