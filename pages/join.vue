<template>
  <div class="warp">
    <img src="~assets/images/banner/join.jpg" class="banner" />
    <div class="container">
      <Slider :data="data" :active="active" :fixed="fixed" />
      <div v-for="(item,index) in data" :key="index">
        <div :id="index" :ref="'box'+index">
          <Title :data="item" />
          <div v-if="index==2">
            <div v-for="(item,index) in 12" :key="index" class="box">
              <div class="box1" v-if="[0,5,8].includes(index)">
                <div class="center">
                  <div>{{data[2]['content'][index][0]}}</div>
                  <h3>{{data[2]['content'][index][1]}}</h3>
                  <div>{{data[2]['content'][index][2]}}</div>
                </div>
              </div>
              <div class="box2" v-else-if="[1,3,4,6,9,11].includes(index)">
                <img :src="url[index]" alt="pic" />
              </div>
              <div class="box3" v-else>
                <div class="center">
                  <div>{{data[2]['content'][index][0]}}</div>
                  <h3>{{data[2]['content'][index][1]}}</h3>
                  <div>{{data[2]['content'][index][2]}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "~/components/Title";
import Slider from "~/components/Slider";
import data from "~/api/about.js";

export default {
  data() {
    return {
      data,
      active: 0,
      url: {},
      fixed: false
    };
  },
  created() {
    let len = this.data.length - 1;
    for (let i = 0; i < this.data[len]["content"].length; i++) {
      if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(this.data[len]["content"][i])) {
        this.url[i] = require("static/about/" +
          this.data[len]["content"][i][0]);
      }
    }
  },
  components: {
    Title,
    Slider
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
      this.fixed = scrollTop > 300;
      if (this.$refs.box2[0] && scrollTop > this.$refs.box2[0].offsetTop - 100) {
        this.active = 2;
      } else if (
        this.$refs.box1[0] &&
        scrollTop > this.$refs.box1[0].offsetTop - 100
      ) {
        this.active = 1;
      } else {
        this.active = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/minix.scss";
.warp {
  .banner {
    width: 100%;
  }
  .container {
    width: 1000px;
    margin: 0 auto px(100px);
  }
  .box {
    display: inline-block;
    & > div {
      width: px(200px);
      height: px(200px);
      display: inline-block;
      margin-right: px(10px);
      margin-bottom: px(10px);
      text-align: center;
      overflow: hidden;
      font-size: px(12px);
      h3 {
        font-weight: 400;
        font-size: px(18px);
      }
      .center {
        height: 60%;
        margin-top: 20%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
      }
    }
    .box1 {
      background: #f4912a;
      color: #fff;
      &:hover {
        background: #fff;
        border: 2px solid #f4912a;
        color: #001123;
      }
    }
    .box2 {
      img {
        transition: all 0.6s;
        width: 100%;
        &:hover {
          transform: scale(1.4);
        }
      }
    }
    .box3 {
      border: 2px solid #f4912a;
      color: #001123;
      &:hover {
        background: #f4912a;
        color: #fff;
      }
    }
  }
}
</style>