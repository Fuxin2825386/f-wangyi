
<template>
  <div class="g-row m-index">
    <!--导航-->
    <div class="m-indexHd">
      <div class="line">
        <a href="javascript:;" class="logo"></a>
        <div class="m-topSearchIpt ipt">
          <i class="icon"></i>
          <span class="placeholder">搜索商品, 共19914款好物</span>
        </div>
        <div class="loginBtn">登录</div>
      </div>
      <div class="tabWrap">
        <div class="m-tabs   scroll">
          <header>
            <div class="inner pic-wrapper" style="position:relative;height:100%;width:100%;overflow:hidden;">
              <div class="list">
                <div class="tab active">
                    <span class="txt">
                      推荐
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      居家
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      鞋包配饰
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      服装
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      电器
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      洗护
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      饮食
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      餐厨
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      婴童
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      文体
                    </span>
                </div>
                <div class="tab ">
                    <span class="txt">
                      特色区
                    </span>
                </div>

              </div>
            </div>
          </header>
        </div>
        <div class="toggleWrap">
          <div class="linear"></div>
          <div class="toggle">
            <div class="icon"></div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    <!--轮播图-->
    <div class="slideWarp" >
      <div class="m-slide m-indexSlide">
        <div class="slide-con">
          <div class="swiper-container">
            <div class="swiper-wrapper" v-if="lbt.length>0">
              <div class="swiper-slide" v-for="(lbts,index) in lbt" :key="lbts.id">
                <img :src= "lbts.picUrl"  >
              </div>

            </div>
            <div class="swiper-pagination">
            </div>

          </div>
        </div>

      </div>
    </div>


    <!--品牌列表-->
    <div class="m-indexServicePolicy newUser active">
      <ul class="g-grow">
        <li class="item" v-for="(zys,index) in zy" :key="zys.index">
          <a href="javascript:;">
            <i class="u-icon u-icon-servicePolicy-index"
               :style="`background-image:url(${zys.icon})`"></i>
            <span class="text">{{zys.desc}}</span>
          </a>
        </li>
      </ul>
    </div>


    <!--双十二活动-->
    <div class="m-kingKongModule">
      <div class="m-carousel">
        <ul>
          <li v-for="(good,index) in goods.kingKongList" :key="index">
            <img  :src="good.picUrl" alt="">
            <span>{{good.text}}</span>
          </li>
        </ul>
      </div>


      <div class="m-indexBigPromotionModule">
        <div>
          <a href="javascript:;" class="promItem" style="width:100%;height:100%;">
            <img :src="event[0]" style="width: 100%; height:100%;">
          </a>
        </div>
        <div>
          <div class="m-lazyload img m-lazyload-loaded">
            <img :src="event[1]" style="width: 187px;height: 196px;float:left;">
            <img :src="event[2]" style="width: 187px;height: 98px;float:right;">
            <img :src="event[3]" alt="" style="width: 187px;height: 98px;">
          </div>
        </div>
        <div>
          <img :src="event[4]" style="width: 187px;height: 98px;float:left;">
          <img :src="event[5]" style="width: 187px;height: 98px;float:left;">
        </div>
      </div>


    </div>

    <!--新人专享-->
    <div class="m-freshmanModule m-indexFloor">
      <div class="moduleTitle">
        <span>新人专享礼</span>
      </div>
      <div class="content">
        <a href="javascript:;" class="left">
          <div class="name">新人专享礼包</div>
          <div class="imgWrap">
            <div class="m-lazyload img m-lazyload-loaded">
              <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
            </div>
            <div class="animate"></div>
          </div>
        </a>
        <div class="right">
          <div class="module1" v-for="(xrs,index) in xr" :key="xrs.id">
            <a href="javascript:;" class="m-activityItem" style="background-size:100% 100%;">
              <div class="picWrap">
                <div class="m-lazyload pic m-lazyload-loaded">
                  <img :src="xrs.picUrl" alt="">
                </div>
                <div class="discount">
                  <div class="line1"></div>
                  <div class="line2"></div>
                </div>
              </div>
              <div class="cnt">
                <div class="title">{{xrs.title}}</div>www
                <div class="subTitle">{{xrs.subTitle}}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>




  </div>

</template>


<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from "vuex"
  export default {
    components: {},
    // 必须在列表数据显示之后创建才能正常形成轮播
    mounted() {
      this.$store.dispatch("getLbt")
      this.$store.dispatch("getZy")
      this.$store.dispatch("getGoods")
      this.$store.dispatch("getEvent")
      this.$store.dispatch("getEvent")
      this.$store.dispatch("getXr")

    },
    computed:{
      ...mapState(["lbt","zy","goods","event","xr"])
    },

    //页面加载之后加载
    watch:{

      lbt(){

        this.$nextTick(()=>{

          new Swiper('.swiper-container', {
            loop: true,// 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: true //自动播放
          })
          new BScroll('.pic-wrapper', {
            click: true,
            scrollX: true,  //水平滑动
          })

        })
      }
    }
  }
</script>






<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/minxins.styl"

  .m-indexHd {
    background-color #fff
    border-bottom 1px solid #d9d9d9
  }

  .m-indexHd .line {
    position relative
    z-index 2
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    background #fff
    padding .21333rem .4rem
  }

  .m-indexHd .line .logo {
    width 1.84rem
    height .53333rem
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
    display inline-block
    margin-right .26667rem
    background-size cover
    background-position center
  }

  .m-indexHd .line > .ipt {
    -webkit-box-flex 1
    -webkit-flex-grow 1
    flex-grow 1
  }

  .m-topSearchIpt {
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    -webkit-box-pack center
    justify-content center
    height .74667rem
    font-size .37333rem
    background-color #ededed
    border-radius .10667rem
  }

  .m-topSearchIpt .icon {
    display inline-block
    vertical-align middle
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
    background-repeat no-repeat
    background-size 100% 100%
    width .37333rem
    height .37333rem
    margin-right .13333rem
  }

  .m-topSearchIpt .placeholder {
    color #666
  }

  .m-indexHd .line .loginBtn {
    width .98667rem
    height .53333rem
    line-height .53333rem
    text-align center
    color #b4282d
    border 0.03rem solid #b4282d
    border-radius .10667rem
    margin-left .21333rem
  }

  .m-indexHd .tabWrap {
    position relative
    z-index 2
    background #fff
    margin-top -.01333rem
  }

  .m-indexHd .tabWrap .m-tabs {
    padding-right 1.33333rem ////
    box-sizing: border-box //ie盒子

  }

  .m-indexHd .tabWrap .toggleWrap {
    display flex
    flex-grow 0
    -webkit-box-align center
    align-items center
    -webkit-box-pack center
    justify-content center
    position absolute
    top 0
    right 0
  }

  .m-indexHd .tabWrap .toggleWrap .linear {
    width .8rem
    height .8rem
    background-image linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%)
  }

  .m-indexHd .tabWrap .toggleWrap .toggle {
    width 1.33333rem
    height .8rem
    text-align center
    background #fff
  }

  .m-indexHd .tabWrap .toggleWrap .toggle .icon {
    margin-top .2rem
    display inline-block
    vertical-align middle
    background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png)
    background-repeat no-repeat
    background-size 100% 100%
    width .4rem
    height .4rem
  }

  .m-tabs {
    width 100%
  }

  .m-tabs > header {
    display flex
    flex-flow row nowrap
    background-color #fff
    position relative
  }

  .m-tabs.scroll > header .inner {
    display flex
    flex-flow row nowrap
  }

  .m-tabs.scroll > header .list {
    display flex
    flex-flow row nowrap
    flex-shrink 0
    padding 0 .4rem
    background #fff
    overflow hidden /* transition-timing-function cubic-bezier(0.1, 0.57, 0.1, 1)
    transition-duration 0ms
    transform translate(-58px, 0px) translateZ(0px)*/
  }

  .m-tabs > header .tab.active {
    color #b4282d
  }

  .m-tabs > header .tab.active .txt:after {
    content ' '
    position absolute
    left 0
    bottom 0
    width 100%
    height .05333rem
    background-color #b4282d
  }

  .m-tabs.scroll > header .tab {
    flex-shrink 0
    position relative
  }

  .m-tabs > header .tab {
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    -webkit-box-pack center
    justify-content center
    z-index 1
    text-align cente
  }

  .m-tabs > header .tab.active .txt {
    position relative
    color #b4282d
  }

  .m-tabs > header .tab .txt {
    display inline-block
    padding 0 .21333rem
    line-height .8rem
    font-size .37333rem
    text-align center
  }

  .slideWarp {
    height 4.93333rem
  }

  .m-indexSlide.m-slide {
    padding-top 4.93333rem !important
  }

  .m-slide {
    position relative
    width 100%
    overflow hidden
  }

  .m-slide .slide-con {
    position absolute
    left 0
    top 0
  }

  .m-slide .slide-con, .m-slide .swiper-container {
    height 100%
    width 100%
  }

  .swiper-container {
    margin-left auto
    margin-right auto
    position relative
    overflow hidden
    z-index 1
  }

  .swiper-wrapper {
    z-index 1
    display flex
    box-sizing content-box
    width 100%
    height 100%
    position relative
  }

  .swiper-slide {
    width 750px
    flex-shrink 0
    height 100%
  }

  .m-indexSlide.m-slide .swiper-container .swiper-slide, .slideWarp {
    position relative
  }

  .m-indexSlide.m-slide .swiper-container .swiper-slide > img {
    width 100%
    height auto
    position absolute
    left 0
    top 50%
    transform translateY(-50%) //////
  }

  .m-slide .swiper-container-horizontal > .swiper-pagination {
    bottom .4rem
    width 100%
  }

  .swiper-pagination {
    position: absolute;
    z-index: 20;
    bottom: 10px;
    width: 100%;
  }

  .m-indexServicePolicy.active {
    background #FFEDDB
  }

  .m-indexServicePolicy .g-grow {
    width 100%
    height .96rem
    padding 0 .4rem ///////
    display flex
    flex-flow row nowrap
    -webkit-box-align center
    align-items center
    zoom 1
    box-sizing: border-box //ie盒子

  }

  .m-indexServicePolicy .item {
    -webkit-box-flex 1
    flex 1
    float left
  }

  .m-indexServicePolicy .item a {
    display inline-block
    vertical-align middle
    height .42667rem
  }

  .u-icon-servicePolicy-index {
    display inline-block
    vertical-align middle
    background-repeat no-repeat
    background-size 100% 100%
    width .42667rem
    height .42667rem
  }

  .m-indexServicePolicy.active .text {
    color #B4282D
  }

  .m-indexServicePolicy .text {
    font-size .32rem
    margin-left .10667rem
    line-height .42667rem
    display inline-block
    vertical-align middle
  }

  .m-kingKongModule {
    width: 100%
    position relative
    clearFix()
  }

  .m-kingKongModule .m-carousel {
    position relative
    background #FFEDDB
    clearFix()

  }

  .m-kingKongModule .m-carousel ul {
    width: 100%;
    padding-bottom .69333rem
    float left
    box-sizing: border-box
  }

  .m-kingKongModule .m-carousel ul li {
    display block
    width 1.46667rem
    height 2.08rem
    float left
    margin .13333rem .26667rem 0
  }

  .m-kingKongModule .m-carousel ul li {
    float: left;
    text-align: center;
    line-height 1.5
  }

  .m-kingKongModule .m-carousel ul li img {
    width: 110px;
    height: 110px;
  }

  .m-indexBigPromotionModule {
    clearFix()
  }

  .m-indexFloor {
    background-color #fff
    margin-bottom .26667rem
  }

  .m-freshmanModule {
    background #fff
    padding-bottom .4rem
    clearFix()
  }

  .m-freshmanModule .moduleTitle {
    height 1.2rem
    width 100%
    line-height 1.2rem
    text-align center
    font-family PingFangSC-Regular
    font-size .42667rem
  }

  .m-freshmanModule .moduleTitle .txt {
    display: inline-block;
    position: relative;
  }

  .m-freshmanModule .moduleTitle .txt::after, .m-freshmanModule .moduleTitle .txt::before {
    content ''
    position absolute
    top .6rem
    width .32rem
    height .04rem
    background #333
    clearFix()

  }

  .m-freshmanModule .moduleTitle .txt::after, .m-freshmanModule .moduleTitle .txt::before {
    content: '';
    position: absolute;
    top: .6rem;
    width: .32rem;
    height: .04rem;
    background: #333;
  }
  .m-freshmanModule .content{
    padding-left: .4rem;
    overflow: hidden;
  }

  .m-freshmanModule .left {
    display: block;
    width: 4.57333rem;
    height: 5.78667rem;
    background: #F9E9CF;
    border-radius: .05333rem;
    margin-right: .05333rem;
    float: left;
    color: #333;
  }

  .m-freshmanModule .left .name {
    font-family: PingFangSC-Medium;
    font-size: .42667rem;
    padding: .4rem 0 0 .4rem;
  }

  .m-freshmanModule .left .imgWrap {
    margin: .66667rem auto;
    width: 3.04rem;
    height: 3.05333rem;
    position: relative;
  }

  .m-freshmanModule .left .imgWrap .img {
    width: 3.04rem;
    height: 3.05333rem;
  }

  .m-freshmanModule .left .imgWrap .img img {
    height: 100%;
  }

  .m-freshmanModule .right {
    float: left;
  }

  .m-freshmanModule .right .module1 {
    background: #FBE2D3;
    border-radius: 4px;
    width: 4.57333rem;
    height: 2.86667rem;
    margin-bottom: .05333rem;
  }

  .m-freshmanModule .m-activityItem {
    height: 2.86667rem;
  }

  .m-activityItem {
    display: block;
    color: #333;
    width: 4.57333rem;
    float: left;
    border-radius: .05333rem;
    margin: 0 .05333rem .05333rem 0;
    font-size: .32rem;
    padding: .26667rem 0 0 .4rem;
  }

  .m-freshmanModule .right .module1 .picWrap, .m-freshmanModule .right .module2 .picWrap {
    top: .26667rem;
    width: 2.66667rem;
    height: 2.66667rem;
  }

  .m-activityItem .picWrap, .m-activityItem .picWrap .pic {
    width: 2.66667rem;
    height: 2.66667rem;
  }

  .m-lazyload > img {
    width: 100%;
    height: auto;
  }


  .m-activityItem .picWrap .discount .line1 {
    font-size: .32rem;
  }

  .m-activityItem .picWrap .discount .line2 {
    font-size: .26667rem;
    margin-top: -.09333rem;
    text-decoration: line-through;
  }

  .m-activityItem, .m-activityItem .cnt {
    position: relative;
  }

  .m-activityItem .title {
    font-family: PingFangSC-Medium;
    font-size: .42667rem;
  }

  .m-activityItem .subTitle {
    color: #7F7F7F;
  }

  .m-freshmanModule .right .module2 {
    background: #FFECC2;
    border-radius: 4px;
    width: 4.57333rem;
    height: 2.86667rem;
  }

  .m-freshmanModule .m-activityItem {
    height: 2.86667rem;
  }

  .m-activityItem {
    display: block;
    color: #333;
    width: 4.57333rem;
    float: left;
    border-radius: .05333rem;
    margin: 0 .05333rem .05333rem 0;
    font-size: .32rem;
    padding: .26667rem 0 0 .4rem;
  }

  .m-activityItem .picWrap {
    position: absolute;
    right: 0;
  }

  .m-lazyload > img {
    width: 100%;
    height: auto;
  }


  .m-activityItem .picWrap .discount .line1 {
    font-size: .32rem;
  }

  .m-activityItem .picWrap .discount .line2 {
    font-size: .26667rem;
    margin-top: -.09333rem;
    text-decoration: line-through;
  }

  .m-activityItem, .m-activityItem .cnt {
    position: relative;
  }

  .m-activityItem .title {
    font-family: PingFangSC-Medium;
    font-size: .42667rem;
  }

  .m-activityItem .subTitle {
    color: #7F7F7F;
  }

  .m-activityItem .tag {
    position: relative;
    display: inline-block;
    padding: 0 .13333rem;
    height: .42667rem;
    background: #CBB693;
    border-radius: .05333rem;
    color: #fff;
    font-size: .29333rem;
    line-height: .42667rem;
    text-align: center;
  }


</style>
