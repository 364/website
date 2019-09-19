<template>
  <div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  created(){
    console.log(this.$route.path)
  },
  components: {
    Footer
  },
}
</script>

<style>
</style>
