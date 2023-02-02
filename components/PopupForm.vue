<template>
  <div class="popup">
    <div class="popup__inner">
      <div class="popup__close">
        <slot></slot>
      </div>
      <img src="@/static/assets/images/popup.jpg" alt="" class="popup__img">
      <form class="popup__form">
        <h4 class="popup__title">Свяжитесь с нами! {{ close }}</h4>
        <p class="popup__subtitle">
          Отправьте нам свою заявку и мы с вами свяжемся!
        </p>
        <input class="popup__input" type="email" required placeholder="email">
        <textarea
         name=""
         id="msg"
         cols="30"
         rows="10"
         class="popup__area"></textarea>
        <button type="" class="main-btn">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: null,
    inputFieldReset: null,
    close: false
  }),
  methods: {
  }
}
</script>

<style lang="scss" scoped>

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
  .popup {
    position: fixed;
    z-index: 5000;
    width: 100%;
    display: flex;
    top: 25%;
    justify-content: center;

    &__close {
      position: absolute;
      right: -1rem;
      z-index: 20;
      top: -1rem;
      opacity: 0.8;
      cursor: pointer;
    }

    &__title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
      color: #ff3a46;
      text-transform: uppercase;
    }

    &__input {
      margin-bottom: 5px;
      height: 40px;
      width: 100%;
      padding: 0 10px;
      border-radius: 4px;
      border-color: #ff3a46;
    }

    &__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &__area {
      width: 100%;
      padding: 5px 10px;
      border-radius: 4px;
      border-color: #ff3a46;
      max-height: 100px;
      margin-bottom: 30px;
    }

    &__subtitle {
      font-weight: 600;
      margin-bottom: 10px;
    }

    &__inner {
      position: relative;
      text-align: center;
      display: flex;
      background: rgb(255, 255, 255);
      align-items: center;
      max-width: 800px;
      padding: 20px;
      border-radius: 14px;
      -webkit-box-shadow: 5px 5px 11px -4px rgba(34, 60, 80, 0.6);
      -moz-box-shadow: 5px 5px 11px -4px rgba(34, 60, 80, 0.6);
      box-shadow: 5px 5px 11px -4px rgba(34, 60, 80, 0.6);
    }

    &__img {
      max-width: 350px;
      margin-right: 40px;

      @media only screen and (max-width: 1016px) {
      display: none;
    }
    }
  }
</style>
