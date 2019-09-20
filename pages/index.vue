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
      :ref="'box'+index"
    >
      <nuxt-link
        :to="{name:item.link}"
        :class="['flex','caption',{'active':!isTransparent}]"
        tag="div"
      >
        <div class="quotes">
          <img src="~assets/images/lq.png" alt="quotes" />
        </div>
        <div>
          <div class="title">{{item.title}}</div>
          <div class="subtitle">{{item.subtitle}}</div>
        </div>
      </nuxt-link>
      <div class="flex flex-end flex-between flex-warp detail">
        <nuxt-link v-for="(cItem,cIndex) in item.detail" :key="cIndex" :to="cItem.link" tag="div">
          <img :src="url[index+'-'+cIndex]" :alt="cItem.title" />
          <div class="title">
            <h2>{{cItem.title}}</h2>
            <h4>{{cItem.subtitle}}</h4>
          </div>
          <div class="des" v-if="cItem.des">{{cItem.des}}</div>
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
      url: {},
      isTransparent: true
    };
  },

  components: {
    Header
  },
  created() {
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i].detail.length; j++) {
        this.url[i + "-" + j] = require("static/home/" +
          this.data[i].detail[j].url);
      }
    }
    console.log(this.data, this.url);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 监听（绑定）滚轮滚动事件
  },
  methods: {
    // 滚动事件
    handleScroll(e) {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.$refs.box0[0]) {
        this.isTransparent = scrollTop <= this.$refs.box0[0].offsetTop;
      }
    }
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
  &[class*="box"] {
    background: #fff;
    color: #333;
    padding: px(100px);
    .caption {
      margin-bottom: px(33px);
      .quotes {
        margin-right: px(33px);
      }
      .title {
        font-weight: bold;
        font-size: px(55px);
        margin-bottom: px(22px);
      }
      .subtitle {
        font-weight: bold;
        font-size: px(26px);
      }
    }
  }
  &.box0 {
    .caption {
      margin-top: px(150px);
    }
    .detail {
      margin-top: px(-100px);
      box-sizing: border-box;
      & > div {
        flex: 1;
        max-width: 480px;
        .title {
          position: relative;
          margin: px(40px) 0 px(20px);
          &::after {
            content: "";
            position: absolute;
            width: px(28px);
            height: px(24px);
            background: url("~assets/images/rq.png");
            right: 0;
            top: 0;
            background-size: 100%;
          }
        }
        .des {
          font-size: px(12px);
          color: #999;
        }
      }
    }
  }
  &.box1 {
    .detail {
      & > div {
        position: relative;
        color: #fff;
        img {
          height: 100%;
          width: px(380px);
          border-radius: 50%;
        }
        .title {
          position: absolute;
          top: 50%;
          left: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
        }
        &:nth-child(odd) {
          align-self: flex-start;
        }
        &:nth-child(even) {
          margin-top: px(200px);
        }
      }
    }
  }
  &.box2 {
    .detail {
      & > div {
        position: relative;
        .title {
          position: absolute;
          color: #fff;
          left: px(20px);
          bottom: px(30px);
          :first-child {
            margin-bottom: px(10px);
          }
        }
      }
    }
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
.spaces {
  height: px(102px);
}
@media screen and (max-width: 1200px) {
  .container{
    &.box0 {
      .detail {
        margin-top: px(10px);
      }
    }
    &[class*="box"]{
      .detail{
        &>div{
          margin-bottom: px(20px);
        }
      }
    }
  }
}
</style>
