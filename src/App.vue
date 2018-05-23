<template>
  <div id="app">
    <v-app>
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
    </v-app>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import Footer from './views/Footer.vue'

export default {
  components: {
  Navbar,
  Footer,
}
}
</script>

<style lang="stylus">
@import './styl/foo.styl'
</style>
