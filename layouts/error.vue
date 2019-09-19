<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      <h1 class="title">
        404
      </h1>
      <h2 class="subtitle">
        Sorry, the webpage you're visiting does not exist. 
      </h2>
      <div class="links">
        <nuxt-link :to="{name:'index'}" class="button--green">Back Home</nuxt-link>
      </div>
    </h1>
    <h1 v-else>
      <h1 class="title">
        500
      </h1>
      <h2 class="subtitle">
        Sorry, Server Error.
      </h2>
      <div class="links">
        <nuxt-link :to="{name:'index'}" class="button--green">Back Home</nuxt-link>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
    margin: 0;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
    font-size: 12px;
  }
</style>