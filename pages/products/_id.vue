<template>
<div class="wrapper">
  <div class="product container">
    <div class="product-img">
      <VueSlickCarousel class="carusel swiper" :dots="true">
        <div v-for="slider in product.imgs" :key="slider+1" alt="" :src="slider">
          <img class="product-img" :src="require(`~/assets/products/${slider}.png`)" alt="">
        </div>
      </VueSlickCarousel>
    </div>
    <div class="product-card">
      <div class="product-text">
        <h2 class="">{{ product.title }}</h2>
          <p>
            {{ product.about }}
            <br>
            {{ product.description }}
          </p>
          <div class="prodict__btns">
            <select class="prodict__selection"   v-model="selected">
              <option v-for="item in product.price" :key="item+1"> {{ item.count }}</option>
          </select>
          <p class="prodict__old">
             Цена:
             <strike class="old">{{ selectedProduct.oldPrice }} </strike> ₽
             <br>
              <strong class="price">{{ selectedProduct.price }} ₽</strong>
          </p>
          </div>
          <button class="main-btn" @click="isPopupOpen = !isPopupOpen">Заказать</button>
      </div>
    </div>
    <popup-form v-if="isPopupOpen">
      <i class="fa fa-times" @click="isPopupOpen = !isPopupOpen" aria-hidden="true"></i>
    </popup-form>
</div>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapGetters } from 'vuex'
import PopupForm from '~/components/PopupForm.vue'
export default {
  data () {
    return {
      isPopupOpen: false,
      product: {},
      selected: 100
    }
  },

  methods: {
    openPopup () {
      this.isPopupOpen = true
    }
  },

  components: { VueSlickCarousel, PopupForm },

  computed: {
    ...mapGetters(['SHOW_PRODUCTS']),
    productId () {
      return +this.$route.params.id
    },
    selectedProduct () {
      this.product?.price?.find(e => (
        e.count === this.selected
      ))
      return this.price = this.product?.price?.find(e => e.count === +this.selected)
    }
  },

  created () {
    if (!this.productId) {
      return
    }
    this.$store.commit('select', this.productId)
    this.product = this.$store.getters['SELCETED_PRODUCT']
  }
}
</script>

<style scoped lang="scss">
.price {
  display: block;
  margin-top: 10px;
  font-size: 30px;
}

.product-text {
  max-width: 700px;
}
.main-btn {
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
.product-card {
}
.prodict__btns {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: start;
}

@media only screen and (max-width: 1016px) {
  .prodict__btns {
    flex-direction: column;
}
}

.prodict__selection {
  // width: 100%;
  height: 30px;
  max-width: 200px;
  margin-right: 20px;
}
.main-btn {
  margin-top: 30px;
}

.product-img {
  max-width: 450px;
  margin-right: 20px;
}

@media only screen and (max-width: 1016px) {
  .product-img  {
    margin-right: 0;
    margin-bottom: 40px;
    max-width: 350px;
  }
}
.product {
  display: block;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  padding: 50px;
  border-radius: 12px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.33);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.33);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.33);
}

@media only screen and (max-width: 1016px) {
  .product  {
    flex-direction: column;
  @media only screen and (max-width: 1016px) {
    text-align: center;  
  }
  }
}
.wrapper {
  background-image: url('../../static/assets/images/product-bg.png');
  width: 100%;
  height: 100vh;
  padding-top: 100px;
}
.social {
  display: flex;
  align-items: center;
}

p {
  color: black;
}

.video-area {
  position: relative;
}

.fa {
  margin-left: 20px;
}
</style>
