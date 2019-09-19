<template>
  <div class="warpper">
    <div v-if="!isTransparent" class="spaces"></div>
    <header :class="['flex','flex-warp','flex-center','flex-between',{'fixed':!isTransparent}]">
      <div class="logo flex flex-center">
        <img v-if="isTransparent" src="~assets/images/logo-white.png" alt="logo" />
        <img v-else src="~assets/images/logo.png" alt="logo" />
        深圳市喜鹊科技有限公司
      </div>
      <ul class="menu" @mouseleave="active=''">
        <li v-for="item in data" :key="item.id" :class="active==item.url?'active':''">
          <div @mouseenter="active=item.url">
            <nuxt-link :to="{name:item.url}">{{item.title}}</nuxt-link>
          </div>
          <ul v-if="item.children">
            <li v-for="cItem in item.children" :key="cItem.id">
              <nuxt-link :to="cItem.url">{{cItem.title}}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import menu from "~/api/menu.js";

export default {
  props: ["isTransparent"],
  data() {
    return {
      active: "",
      data: menu
    };
  },
  created(){
    console.log(this.$route)
  },
  methods: {}
};
</script>

<style lang="scss">
@import "~assets/css/minix.scss";
.warpper {
  header{
    box-sizing: border-box;
    padding: px(15px) px(50px);
    font-size: px(14px);
    font-weight: 600;
    color: #fff;
    // background: rgba(255,255,255,0.05);
    &.fixed{
      position: fixed;
      top:0;
      left: 0;
      width: 100%;
      border-bottom:1px solid #f1f1f1;
      background: #fff; 
      color: #333;
      z-index: 999;
      a{
        color: #333;
      }
      .menu{
        ul{
          background: #222;
        }
      }
    }
    .logo {
      font-size: px(16px);
      img {
        padding: 0 px(10px) 0 2.084vw;
        display: block;
        height: px(42px);
      }
    }
    a {
      color: #fff;
    }
    .menu {
      & > li {
        &.active {
          & > div {
            border-bottom: 2px solid #fff;
          }
          ul {
            transition: all 0.3s;
            opacity: 1;
            display: block;
          }
        }
        display: inline-block;
        position: relative;
        padding: 0 2.084vw;
        & > div {
          margin-bottom: px(-10px);
          padding-bottom: px(10px);
          border-bottom: 2px solid transparent;
        }
        ul {
          margin-top:px(10px); 
          padding: px(10px) 0;
          left: 0;
          position: absolute;
          font-size: px(14px);
          text-align: center;
          width: 100%;
          opacity: 0;
          display: none;
          border-radius: px(5px);
          li {
            padding: px(10px) 0;
            font-weight: 400;
            a {
              color: rgba(255, 255, 255, 0.8);
              &:hover{
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
  .spaces{
    height: px(102px);
  }
}
@media screen and (max-width: 640px) {
  .warpper {
    header {
      & > div,
      & > ul {
        margin: px(30px);
      }
      .menu {
      & > li.active {
          ul {
            display: none;
          }
        }
      }
    }
    .spaces{
      height: px(250px);
    }
  }
}
</style>