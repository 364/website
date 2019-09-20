<template>
  <div class="warp">
    <img src="~assets/images/banner/business.jpg" class="banner" />
    <div class="container">
      <Slider :data="data" :active="active" :fixed="fixed" />
      <div v-for="(item,index) in data" :key="index">
        <div :id="index" :ref="'box'+index">
          <Title :data="item" />
          <div v-if="index==data.length-1" class="desc">
            <div>企业供应商及个人供应商均可申请加入我们，但应符合以下入驻标准：</div>
            <ol>
              <li>
                <div>1.供应商类型：</div>
                <ul>
                  <li>• 加工生产型工厂</li>
                  <li>• 有代理或者授权证明的批发商或者经销商</li>
                  <li>• 熟悉跨境电商运作的贸易公司</li>
                  <li>• 交期和产品符合要求的个人卖家</li>
                </ul>
              </li>
              <li>
                <div>2.关于供应商资质方面要求：</div>
                <ul>
                  <li>• 持有完成最近年度年检的《营业执照》，营业范围在消费品领域，且经营活动不超过其《营业执照》核准的经营范围；</li>
                  <li>• 《供应商资料申请表》</li>
                  <li>• 《营业执照》（需完成最近年度年检且经营范围需包含所售产品）</li>
                  <li>• 《税务登记证》（国税、地税均可）</li>
                  <li>• 通过最新年检《组织机构代码》证复印件</li>
                </ul>
              </li>
              <li>
                <div>3.除此以外，您还需要能提供以下服务：</div>
                <ul>
                  <li>• 稳定的供货能力，严格的品控流程，专业的售后服务</li>
                  <li>• 接受少批量多频次采购，且支持上门验货</li>
                  <li>• 交货时间在订单后3天内，供应商有常备库存优先，广东省外可适当调整。</li>
                  <li>• 来货要求：能协助在产品包装上贴SKU标签，配合各海外仓的不同发货要求，每次提供公司要求装箱单及送货单，送货至公司指定仓库</li>
                  <li>• 支付条件：先货后款，月结优先。</li>
                  <li>• 供应商按照公司要求开发票优先。</li>
                </ul>
              </li>
            </ol>
          </div>
          <img :src="url[index]" alt="pic"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "~/components/Title";
import Slider from "~/components/Slider";
import data from "~/api/business.js";

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
    for (let i = 0; i < this.data.length; i++) {
      this.url[i] = require("static/business/" + this.data[i]['img']) 
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
      if (this.$refs.box3[0] && scrollTop > this.$refs.box3[0].offsetTop - 100) {
        this.active = 3;
      }else if (this.$refs.box2[0] && scrollTop > this.$refs.box2[0].offsetTop - 100) {
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
    img{
      margin-top: px(50px);
      width: 100%;
    }
    .desc{
      color: #999;
      font-size: px(14px);
      line-height: 22px;
      li{
        &>div{
          margin:px(15px) 0;
        }
      }
    }
  }
}
</style>