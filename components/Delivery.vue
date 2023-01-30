<template>
  <section class="wrapper">
    <div class="delivery container">
      <h5 class="delivery-title">Доставка и оплата</h5>
      <div class="delivery-form">
        <ul class="delivery-item">
          <strong class="delivery-subtitle">Доставка:</strong>
          <li class="delivery-text">- Почтой России.</li>
          <li class="delivery-text">- Транспортной компанией (по договоренности).</li>
        </ul>
        <ul class="delivery-item">
          <Strong class="delivery-subtitle">Оплата заказа:</Strong>
          <li class="delivery-text">- На карту банка (ВТБ, Сбербанк, Тинькофф), СПБ подключен.</li>
          <li class="delivery-text">- Оплата после получения.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contract'
}
</script>

<style scoped lang="scss">
.delivery {
  padding: 125px;
  @media only screen and (max-width: 1016px) {
    padding: 50px 10px;
  }
}
.wrapper {
  background-image: url('@/static/assets/images/mone-bg.jpg');
}
.delivery-text {
  color: rgb(0, 0, 0);
  font-size: 22px;
}

.delivery-subtitle {
  font-size: 35px;
  padding-bottom: 20px;
  display: block;
}
.delivery-title {
  text-align: center;
  padding: 40px 0;
  font-size: 40px;
  font-weight: 600;
  color: #ff3a46;
  @media only screen and (max-width: 1016px) {
    font-size: 30px;
  }
}

.delivery-item {
  font-weight: 500;
  max-width: 600px;
  @media only screen and (max-width: 1016px) {
    margin-bottom: 50px;
  }
}
.delivery-form {
  display: flex;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  padding: 150px 50px;
  border-radius: 16px;
  -webkit-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
  @media only screen and (max-width: 1016px) {
    flex-direction: column;
    text-align: center;
    padding: 50px 0;
  }
}
</style>
