<template>
  <div class="warpper">
    <div class="container">
      <Header :isTransparent="isTransparent" />
      <video autoplay loop muted>
        <source src="~assets/video/Earth.mp4" type="video/mp4" />Your browser does not support the video tag.
      </video>
      <div class="banner">
        <div class="title">专注外贸B2C</div>
        <div class="subtitle">Leading local brands to the world</div>
      </div>
      <div class="scroll">
        <div>
          <img src="~assets/images/mouse.png" />
        </div>
        <div class="icon_down"></div>
        <div>滚轮向下滚动</div>
      </div>
    </div>
    <div 
      v-for="(item,index) in data" 
      :class="['container','box'+index]" 
      :key="index" 
      :ref="'box'+index">
      <nuxt-link :to="{name:item.link}">
        <div class="n-leftquote"></div>
        <div>{{item.title}}</div>
        <div>{{item.subtitle}}</div>
      </nuxt-link>
      <div>
        <nuxt-link v-for="(cItem,cIndex) in item.detail" :key="cIndex" :to="cItem.link">
          <img :src="url[index+'-'+cIndex]" :alt="cItem.title">
          <div>{{cItem.title}}</div>
          <div>{{cItem.subtitle}}</div>
          <div v-if="cItem.des">{{cItem.des}}</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import data from "~/api/home.js";

export default {
  data() {
    return {
      data,
      url:{},
      isTransparent: true
    };
  },
  
  components: {
    Header
  },
  created(){
    for(let i=0;i<this.data.length;i++){
      for(let j=0;j<this.data[i].detail.length;j++){
        this.url[i+'-'+j] = require('static/home/'+this.data[i].detail[j].url)
      }
    }
    console.log(this.data,this.url)
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 监听（绑定）滚轮滚动事件
  },
  methods:{
    // 滚动事件
    handleScroll(e) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(this.$refs.box0){
        this.isTransparent = scrollTop <= this.$refs.box0[0].offsetTop
      }
    },
  },
  layout: "home",
  transitions: "home"
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/minix.scss";
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  &[class*="box"]{
    background: #fff;
  }
  video {
    position: fixed;
    right: 0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%); //背景灰度设置*/
    z-index: -11;
  }
  .banner {
    position: absolute;
    top: 50%;
    left: 8%;
    color: #fff;
    transform: translateY(-50%);
    font-weight: 500;
    .title {
      font-weight: 700;
      font-size: px(78px);
      word-spacing: 1px;
    }
    .subtitle {
      font-size: px(45px);
      word-spacing: 5px;
    }
  }
  .scroll {
    color: #fff;
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -3em;
    text-align: center;
    animation: blink 2s infinite ease;
    -webkit-animation: blink 2s infinite ease;
    font-size: px(12px);
    .icon_down {
      width: 10px;
      height: 10px;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
      transform: rotate(45deg);
      margin: 0 auto 10px;
    }
  }
  @keyframes blink {
    46% {
      bottom: 20px;
    }
    64% {
      bottom: 12px;
    }
    72% {
      bottom: 20px;
    }
    84% {
      bottom: 16px;
    }
    100% {
      bottom: 20px;
    }
  }
}

</style>
