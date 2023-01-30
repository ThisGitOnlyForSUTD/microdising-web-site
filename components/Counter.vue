<template>
<section id="counter" class="wpapper container">
  <div class="counter container">
    <div class="counter-item">
      <span class="">100%</span>
      <p>Гарантии качества</p>
      <i class="fa fa-shield" aria-hidden="true" style="font-size:70px;color: #34935c;"></i>
    </div>
    <div class="counter-item">
      <span class="">100%</span>
      <p> натуральный продукт</p>
      <i class="fa fa-pagelines" aria-hidden="true" style="font-size:70px;color: #34935c;"></i>
    </div>
    <div class="counter-item">
      <span class="">100%</span>
      <p>Пользы</p>
      <i class="fa fa-smile-o" aria-hidden="true" style="font-size:70px;color: #34935c;"></i>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Counter'
}
</script>

<style scoped lang="scss">

.counter {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 150px 0;

  @media only screen and (max-width: 1016px) {
    flex-direction: column;
  }

  &-item {
    text-align: center;
    @media only screen and (max-width: 1016px) {
    margin-bottom: 50px;
    }

    span {
      color: #ff3a46;
      font-size: 55px;
      font-weight: 600;
    }

    p {
      font-size: 18px;
      font-weight: 600;
      color: #63688e;
    }
    }
  }
</style>
