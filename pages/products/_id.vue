<template>
<div class="wrapper">
  <div class="product container">
    <img class="product-img" :src="product.imgs" alt="grib">
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
          <button class="main-btn" @click="open = !open">Заказать</button>
      </div>
    </div>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      open: false,
      product: {},
      selected: 100
    }
  },

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

.popup {
  display: flex;
  background: rgb(255, 255, 255);
  position: absolute;
  z-index: 5000;
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin: 0 auto;
  top: 0;
  left: 35%;
  padding: 20px;
  border: 5px solid rgb(5, 135, 7);
  border-radius: 10px;
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.popup__link {
  background: rgb(5, 135, 7);;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

.popup__link-link {
  color: #fff;
}

.fa {
  margin-left: 20px;
}

.popup-img {
  width: 350px;
}
</style>
