<template>
  <div class="title">
    <div class="space"></div>
    <h1>
      <span class="title">{{data.title}}</span>
      <span class="subtitle">{{data.subtitle}}</span>
    </h1>
    <div class="desc" v-html="data.desc" v-if="data.desc"></div>
  </div>
</template>

<script>
export default {
  props:['data']
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/minix.scss";
  .title{
    h1{
      margin-bottom: px(20px);
      .subtitle{
        color: #7F7F88;
      }
    }
    .desc{
      color: #999;
      font-size: px(14px);
      line-height: 22px;
    }
    .space{
      height: px(100px);
      width: 100%;
    }
  }
</style>