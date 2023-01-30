<template>
  <div>
    <mobile-nab v-if="mobile == true"/>
    <Navbar v-else/>
    <nuxt />
    <Footer/>
  </div>
</template>

<style>

</style>
<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import MobileNab from '~/components/MobileNab.vue'
export default {
  data () {
    return {
      mobile: false
    }
  },
  components: {
    Navbar,
    Footer,
    MobileNab
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
