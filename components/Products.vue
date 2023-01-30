<template>
  <section id="work" class="work-area">
    <div class="products container">
        <h2 class="products-title">Каталог</h2>
      <div class="list">
        <div class="development" v-for="product in products" :key="product.id">
          <div class="">
            <div class="work-image">
              <img :src="product.imgs" alt="Work">
            </div>
            <div class="work-content">
              <h4 class="work-title">{{ product.title }}<a href="#"></a></h4>
              <span class="old-price" style="text-decoration: line-through;">{{ product.price[0].oldPrice }}₽</span>
              <span class="price">{{ product.price[0].price}}₽</span>
            </div>
            <a href="#" @click.prevent="OpenProduct(product.id)" class="main-btn">Подобронее</a>
          </div> <!-- single work -->
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
    }
  },

  computed: {
    products () {
      return this.$store.getters.SHOW_PRODUCTS
    }
  },

  methods: {
    OpenProduct (product) {
      this.$router.push({
        name: 'products-id',
        params: {
          id: product
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">

.price {
  margin-left: 10px;
}
.work-title {
  margin-bottom: 20px;
  text-transform: uppercase;
}
.work-area {
  padding: 120px 0;
}
.list {
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1401px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1016px) {
    margin-bottom: 50px;
    flex-direction: column;
    }
}
.development {
  max-width: 360px;
  border-radius: 10px;
  text-align: center;
  -webkit-box-shadow: 0px -1px 12px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px -1px 12px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px -1px 12px -5px rgba(34, 60, 80, 0.6);
  padding: 10px 10px 40px 10px;
  cursor: pointer;
  @media only screen and (max-width: 1401px) {
    margin: 0 10px;
  }

  @media only screen and (max-width: 1016px) {
    margin-bottom: 50px;
    }
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
.development:hover {
  -webkit-box-shadow: 0px 5px 19px -5px rgba(34, 60, 80, 0.91);
  -moz-box-shadow: 0px 5px 19px -5px rgba(34, 60, 80, 0.91);
  box-shadow: 0px 5px 19px -5px rgba(34, 60, 80, 0.91);
}
.justify-content-center {
  display: flex;
  justify-content: center;
  text-align: center;
}
.work-image {
  max-height: 350px;
  overflow: hidden;
  margin-bottom: 15px;
}

.products-title {
  text-align: center;
  margin-bottom: 150px;
  font-size: 50px;
  font-weight: 600;
  color: #0a0c19;
}

.work-content {
  border: none;
  margin-bottom: 30px;
}

.work-content span {
  font-size: 20px;
}

.main-btn {
  margin-bottom: 5px;
}
</style>
