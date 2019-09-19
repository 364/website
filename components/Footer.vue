<template>
  <footer>
    <transition name="footer-slogan">
      <div class="slogan flex flex-center"  v-if="$route.path === '/'">
        未来不断在改变，我们不停在进步。
      </div>
    </transition>
    <div class="flex flex-between flex-warp">
      <div class="detail flex" >
        <div v-for="item in data" :key="item.id">
          <nuxt-link tag="span" :to="{name:item.url}">{{item.title}}</nuxt-link>
          <ul>
            <li v-for="cItem in item.children" :key="cItem.id">
              <nuxt-link :to="cItem.url">{{cItem.title}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="code">扫一扫</div>
    </div>
    <div class="copyright">Copyright &copy; 2017-2019. 深圳市喜鹊信息科技有限公司</div>
  </footer>
</template>

<script>
import menu  from '~/api/menu.js'

export default {
  data(){
    return{
      data:[]
    }
  },
  created(){
    let data = [].concat(menu)
    data.shift()
    this.data = data
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/css/minix.scss";
  footer{
    background: #001123;
    color: #fff;
    width: 100%;
    & > div{
      &:not(:last-child){
        border-bottom:1px solid rgba(255,255,255,0.1)
      }
      box-sizing: border-box;
      padding:px(50px) px(100px);
    }
    .slogan{
      font-size: px(24px);
      letter-spacing: 0;
      font-weight: 600;
      height: px(200px);
      background: url('~assets/images/line.png') center;
      background-size: 100%;
    }
    
    .detail{
      flex:8;
      font-size: px(12px);
      &>div{
        width: 20%;
        span{
          font-size: px(14px);
          margin-bottom: px(18px);
          display: block;
          cursor: pointer;
        }
        li{
          padding: px(8px) 0;
          a{
            color: #fff;
            opacity: 0.5;
          }
        }
      }
    }
    .code{
      flex:3;
      text-align: right;
      color: #fff;
      opacity: 0.5;
    }
    .copyright{
      padding: px(20px) px(50px);
      opacity: 0.5;      
      font-size: px(12px);
    }
  }
  .footer-slogan-enter,.footer-slogan-leave-to{
    opacity: 0;
  }
  .footer-slogan-enter-active,
  .footer-slogan-leave-active{
    transition: all 0.3s;
  }
  @media screen and (max-width: 640px) {
    footer {
      .detail,
      .code{
        width: 100%;
        flex:auto;
        text-align: left;
      }
      .copyright{
        padding-top: px(50px);
        padding-bottom: px(50px);
      }
    }
  }
</style>