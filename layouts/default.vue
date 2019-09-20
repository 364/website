<template>
  <div class="contianer">
    <div class="header"><Header/></div>
    <nuxt />
    <div class="footer"><Footer/></div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
}
</script>

<style lang="scss">
</style>
