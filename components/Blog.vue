<template>
  <div class="wrapper">
    <section class="blog container">
    <img class="blog-img" src="@/static/assets/images/Shiitake.jpg" alt="Video">
    <div class="blog-content">
      <h2 class="blog-title">Сказание о мухоморах</h2>
      <p class="blog-text">
        Мухомор – самый знаменитый гриб, лечащий 100 болезней.
        На Руси гриб употребляли, не ведавшие страха воины, шедшие завоевывать новые земли. Настоя гриба они хранили в специальных колбах на поясе и использовали его многократно.
        <span v-if="mobile == true">
        <p v-if="close">
        Естественно использовали его и используют шаманы и ведьмы в составе сложных зелий. Количество применяемых внутрь мухоморов должно исчисляться не поштучно, а граммами. Опытные маги лечат мухоморами онкологические заболевания. Также он может помочь в борьбе с пьянством и наркозависимостью. Исследователи находят следы мухомора в разных уголках мира. К примеру одно из африканских племен специально выращивает мухомор для еды, а мифический индоарийский напиток богов — Сома, явно готовили из мухомора. На Чукотке были найдены наскальные рисунки людей-грибов. Северные шаманы употребляли мухомор в своих церемониях для вхождения в особое состояние сознания под трансовый ритм бубна. Древние знали о свойстве мухомора восстанавливать и преумножать физическую и духовную силу. Их видения позволяли заглядывать в глубины мира.
        На основе компонентов мухомора можно сделать снотворное. Гриб используют в лечении заболеваний щитовидной железы, предстательной железы, сахарном диабете, упадке сил и переутомлении, и это далеко не полный список удивительных свойств мухомора.
        Эффект от мухомора сильно зависит от принятой дозы и индивидуальных особенностей отдельного человека.
        При небольшой дозе человек может испытывать подъем сил, эйфорию и ясность ума. При средней появляются зрительные галлюцинации, но тем не менее человек может адекватно реагировать и отвечать на вопросы. Большая доза является опасным делом, может привести к летальному исходу.
        Перед употреблением мухомора осознайте что вы несете полную ответственность за любые возможные последствия.</p>
       </span>
       <button class="more__btn" v-if="mobile == true" @click="close = !close">Читать дальше</button>
       <span v-else>
        Естественно использовали его и используют шаманы и ведьмы в составе сложных зелий. Количество применяемых внутрь мухоморов должно исчисляться не поштучно, а граммами. Опытные маги лечат мухоморами онкологические заболевания. Также он может помочь в борьбе с пьянством и наркозависимостью. Исследователи находят следы мухомора в разных уголках мира. К примеру одно из африканских племен специально выращивает мухомор для еды, а мифический индоарийский напиток богов — Сома, явно готовили из мухомора. На Чукотке были найдены наскальные рисунки людей-грибов. Северные шаманы употребляли мухомор в своих церемониях для вхождения в особое состояние сознания под трансовый ритм бубна. Древние знали о свойстве мухомора восстанавливать и преумножать физическую и духовную силу. Их видения позволяли заглядывать в глубины мира.
        На основе компонентов мухомора можно сделать снотворное. Гриб используют в лечении заболеваний щитовидной железы, предстательной железы, сахарном диабете, упадке сил и переутомлении, и это далеко не полный список удивительных свойств мухомора.
        Эффект от мухомора сильно зависит от принятой дозы и индивидуальных особенностей отдельного человека.
        При небольшой дозе человек может испытывать подъем сил, эйфорию и ясность ума. При средней появляются зрительные галлюцинации, но тем не менее человек может адекватно реагировать и отвечать на вопросы. Большая доза является опасным делом, может привести к летальному исходу.
        Перед употреблением мухомора осознайте что вы несете полную ответственность за любые возможные последствия.
       </span>
      </p>
    </div>
  </section>
  </div>

  <!--====== VIDEO PART ENDS ======-->
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      mobile: false,
      close: false
    }
  },
  mounted () {
    window.addEventListener('resize', this.onMobile)
    this.onMobile()
  },
  methods: {
    onMobile () {
      this.mobile = window.innerWidth < 1010
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  background-image: url('@/static/assets/images/bg-leter.jpg');
  opacity: 8;
  margin: 180px 0;
}

.more__btn {
  text-decoration: underline;
  font-weight: 700;
  color: rgb(161, 7, 7);
}
.blog-text {
  font-size: 25px;
  opacity: 0.9;
  font-weight: 700;
  line-height: 24px;
  font-style: italic;
}
.blog {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 180px 0;

  @media only screen and (max-width: 1016px) {
    padding: 150px 25px;
    text-align: center;
    }
}

.blog-title {
  font-size: 50px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 50px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 1.2;

  @media only screen and (max-width: 1016px) {
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    padding: 0 25px;
    }
}
.blog-content {
  max-width: 850px;
  margin-left: 20px;
}
.blog-img {
  max-width: 550px;
  width: 100%;
  @media only screen and (max-width: 1016px) {
    display: none;
    }
}
</style>
