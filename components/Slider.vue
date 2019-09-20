<template>
  <div :class="['slider',{'fixed':fixed}]">
    <ul>
      <li 
        v-for="(item,index) in data" 
        :key="item.title" 
        :class="[{'active':active==index}]"
      >
        <a :href="'#'+index">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['data','active','fixed'],
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/minix.scss";
  .slider{
    position: fixed;
    left: px(100px);
    margin-top: px(130px);
    &.fixed{
      top:15%;
    }
    &::before{
      content: " ";
      display: block;
      position: absolute;
      right: px(-32px);
      top: 0;
      height: 99%;
      width: 1px;
      background: #DDDFE6;
      z-index: -1;
    }
    li{
      font-size: px(13px);
      font-weight: bold;
      padding: px(45px) 0 0;
      &:first-child{
        padding: 0;
      }
      &:after{
        content: " ";
        display: inline-block;
        margin-left: 20px;
        height: 14px;
        width: 14px;
        border-radius: 50%;
        background: #DDDFE6;
        position: absolute;
        right: px(-38px);
        z-index: 2;
      }
      a{
        color:#333;
      }
      &.active{
        a{
          color: orange;
        }
        &:after{
          background: orange;
        }
      }
    }
  }
  @media screen and (max-width:1600px){
    .slider{
      display: none;
    }
  }
</style>