<template>
  <div>
    <Header/>
    <Features/>
    <Counter/>
    <Products/>
    <Description/>
    <Teatimonial/>
    <Blog/>
    <Delivery/>
  </div>
</template>

<script>


import Header from "../components/Header.vue"
import Features from "../components/Features";
import Counter from "../components/Counter";
import Products from "../components/Products";
import Description from "../components/Description";
import Teatimonial from "../components/Teatimonial";
import Blog from "../components/Blog";
import Delivery from "../components/Delivery";
export default {
  components: {
    Header,
    Delivery,
    Blog,
    Teatimonial,
    Description,
    Products,
    Counter,
    Features
  }
}

</script>

<style>

</style>
