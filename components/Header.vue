<template>
 <div class="wpapper">
   <div class="header container">
      <div class="header-content">
        <h1 class="header-title">ГРИБЫ ПРЯМИКОМ ИЗ АЛТАЯ</h1>
        <h5 class="sub-title">свежего сбора</h5>
        <a class="main-btn" href="#">Связяться с нами</a>
      </div>
      <div class="header-logo"></div>
  </div>
 </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.wpapper {
 height: 100vh;
 background-image: url('@/static/assets/images/mone-bg.jpg');
 background-repeat: no-repeat;
  background-size: cover;
 padding-top: 25px;
 margin-bottom: 400px;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media only screen and (max-width: 1016px) {
    flex-direction: column;
}

  &-content {
    margin-top: 150px;
  }

  &-title {
    font-size: 80px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    margin-bottom: 20px;
    max-width: 800px;

    @media only screen and (max-width: 1016px) {
      font-size: 50px;
    }
  }
}

  .sub-title {
    font-size: 30px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    margin-bottom: 30px;
  }
.header-logo {
  margin-top: 200px;
  width: 100%;
  max-width: 350px;
  height: 350px;
  background-image: url('@/static/assets/images/logo.png');
  background-position: center;
  background-size: contain;

  @media only screen and (max-width: 1016px) {
      display: none;
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

</style>
