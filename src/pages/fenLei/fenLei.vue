<template>
  <div class="layout" v-if="fl[clearIndex]">
    <div class="headers">
      <div class="header">
        <div class="line">
          <div class="ipt">
            <i class="icon"></i>
            <span class="placeholder">搜索商品, 共19914款好物</span>
          </div>
        </div>
      </div>
    </div>


    <!--左边-->
    <div class="m-cateNavVertWrap" style="left:0; ">
      <ul id="j-cateNav" class="m-cateNavVert">
        <li class="item" :class="{active:clearIndex===index}" v-for="(fls,index) in fl" :key="fls.id" @click="dj(index)">
          <a class="txt">{{fls.name}}</a>
        <li/>
      </ul>
    </div>



    <div class="huaDong">
      <div>
        <!--右边-->
        <div class="m-subCateList" v-if="fl[clearIndex].type === 1">
          <div class="banner" :style="`background-image:url(${fl[clearIndex].bannerUrl});`">
            <div class="cnt"></div>
          </div>
          <div class="cateList">
            <ul class="list">
              <li class="cateItem" v-for="(fls,index) in fl[clearIndex].subCateList" :key="fls.id"><a>
                <div class="cateImgWrapper">
                  <img :src="fls.bannerUrl" alt="" class="cateImg">
                </div>
                <div class="name">{{fls.name}}</div>
              </a></li>
            </ul>
          </div>
        </div>
        <!--右边第二个模板-->
        <div class="m-subCateList" v-if="fl[clearIndex].type === 0">
          <div class="banner"
               :style="`background-image:url(${fl[clearIndex].wapBannerUrl})`">
            <div class="cnt"></div>
          </div>
          <div class="cateList"  v-for="(fls,index) in fl[clearIndex].subCateList" :key="fls.id">
            <div class="hd">{{fls.name}}</div>
            <ul class="list">
              <li class="cateItem" v-for="(flss,index) in fls.categoryList" :key="flss.id"><a>
                <div class="cateImgWrapper">
                  <img :src="flss.wapBannerUrl"
                       alt="" class="cateImg"></div>
                <div class="name">{{flss.name}}</div>
              </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>



  </div>

</template>

<script>
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        clearIndex: 0,
        actives:false
      }
    },
    mounted() {

      this.$store.dispatch("getFl")


    },
    computed: {
      ...mapState(["fl"]),

    },
    methods: {
      dj(index) {
        this.clearIndex = index;
      }
    },
    components: {},
    watch: {

      fl() {

        this.$nextTick(() => {
          new BScroll('.m-cateNavVertWrap', {
            click: true
          })

          new BScroll('.huaDong', {
            click: true
          })

        })
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*@import "../../common/stylus/mixins.styl"*/
  .layout {
    width 100%
  }

  .headers {
    height 87px

  }

  .header {
    width: 100%
    height 87px
    border-bottom 1px solid #d9d9d9
    background-color white
    position fixed
    z-index: 10;
  }

  .line {
    z-index: 5;
    width: 100%;
    height 87px

  }

  .ipt {
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: .74667rem;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
    width: 90%
    margin 0.2rem auto
    box-sizing: border-box

  }

  .ipt .icon {
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
    margin-right: .13333rem;
  }

  .ipt .placeholder {
    color: #666;
  }

  .m-cateNavVertWrap {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 2.16rem;
    background-color: #fff;
    z-index 1
  }

  .m-cateNavVertWrap:after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, .15);
    top: 0;
    bottom: 0;
    width: 2px;
    -webkit-transform-origin: 100% 50% 0;
    transform-origin: 100% 50% 0;
    right: 0;
  }

  .isOpenAppClosed .m-cateNavVertWrap {
    top: 1.17333rem;
  }

  .m-cateNavVert {
    padding: 65px 0;
  }

  .m-cateNavVert .item.active {
    position: relative;
  }

  .m-cateNavVert .item {
    width: 100%;
    height: .66667rem;
    text-align: center;
    border: none;
    margin-top 45px
  }

  .m-cateNavVert .item.active:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: .08rem;
    background-color: #ab2b2b;
  }

  .m-cateNavVert .item.active .txt {
    color: #ab2b2b;
  }

  .m-cateNavVert .item .txt {
    display: block;
    color: #333;
    font-size: .37333rem;
    line-height: .66667rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .m-subCateList {
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
  }

  .m-subCateList .banner {
    position: relative;
    width: 100%;
    height: 2.56rem;
    display: table;
    margin-bottom: .42667rem;
    background: center no-repeat #f4f4f4;
    background-size: cover;
    border-radius: 4px;
  }

  .m-subCateList .banner .cnt {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    color: #fff;
  }

  .m-subCateList .cateList:last-child {
    margin-bottom: 0;
  }

  .m-subCateList .cateItem {
    display: inline-block;
    margin-right: 25px;
    font-size: 0;
    width: 1.92rem;
    vertical-align: top;
  }

  .m-subCateList .cateItem .cateImgWrapper {
    width: 1.92rem;
    height: 1.92rem;
    background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/water-d839a69b0d.png) center no-repeat;
  }

  .m-subCateList .cateItem .name {
    height: .96rem;
    font-size: .32rem;
    text-align: center;
    line-height: .48rem;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .m-subCateList .cateItem .cateImg {
    display: block;
    width: 100%;
    background: #fff;
    height: 100%;
  }

  /*第二种模板*/

  .m-subCateList {
    margin-left: 2.16rem;
    padding: .4rem .4rem .28rem;
  }

  .m-subCateList .banner {
    position: relative;
    width: 100%;
    height: 2.56rem;
    display: table;
    margin-bottom: .42667rem;
    background: center no-repeat #f4f4f4;
    background-size: cover;
    border-radius: 4px;
  }

  .m-subCateList .banner .cnt {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: .37333rem;
    color: #fff;
  }

  .m-subCateList .cateList {
    margin-bottom: .16rem;
  }

  .m-subCateList .hd {
    white-space: nowrap;
    max-width: 7.04rem;
    padding-bottom: .10667rem;
    margin-bottom: .32rem;
    text-align: left;
    font-size: .37333rem;
    font-weight: 700;
    border-bottom: 1px solid #d9d9d9;
  }

  .m-subCateList .cateItem {
    display: inline-block;
    margin-right: 25px;
    font-size: 0;
    width: 1.92rem;
    vertical-align: top;
  }

  .m-subCateList .hd {
    white-space: nowrap;
    max-width: 7.04rem;
    padding-bottom: .10667rem;
    margin-bottom: .32rem;
    text-align: left;
    font-size: .37333rem;
    font-weight: 700;
    border-bottom: 1px solid #d9d9d9;
  }

  .m-subCateList .cateItem {
    display: inline-block;
    margin-right: 25px;
    font-size: 0;
    width: 1.92rem;
    vertical-align: top;
  }

  .m-subCateList .cateItem .cateImgWrapper {
    width: 1.92rem;
    height: 1.92rem;
    background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/water-d839a69b0d.png) center no-repeat;
  }

  .m-subCateList .cateItem .name {
    height: .96rem;
    font-size: .32rem;
    text-align: center;
    line-height: .48rem;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .m-subCateList .cateItem .cateImg {
    display: block;
    width: 100%;
    background: #fff;
    height: 100%;
  }

  .m-subCateList .cateList {
    margin-bottom: .16rem;
  }

  .m-subCateList .hd {
    white-space: nowrap;
    max-width: 7.04rem;
    padding-bottom: .10667rem;
    margin-bottom: .32rem;
    text-align: left;
    font-size: .37333rem;
    font-weight: 700;
    border-bottom: 1px solid #d9d9d9;
  }

  .m-subCateList .cateItem {
    display: inline-block;
    margin-right: 25px;
    font-size: 0;
    width: 1.92rem;
    vertical-align: top;
  }

  .m-subCateList .cateItem .name {
    height: .96rem;
    font-size: .32rem;
    text-align: center;
    line-height: .48rem;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .m-subCateList .cateItem .cateImg {
    display: block;
    width: 100%;
    background: #fff;
    height: 100%;
  }

  .m-subCateList .cateList:last-child {
    margin-bottom: 0;
  }

  .m-subCateList .hd {
    white-space: nowrap;
    max-width: 7.04rem;
    padding-bottom: .10667rem;
    margin-bottom: .32rem;
    text-align: left;
    font-size: .37333rem;
    font-weight: 700;
    border-bottom: 1px solid #d9d9d9;
  }

  .m-subCateList .cateItem {
    display: inline-block;
    margin-right: 25px;
    font-size: 0;
    width: 1.92rem;
    vertical-align: top;
  }

  .m-subCateList .cateItem .cateImgWrapper {
    width: 1.92rem;
    height: 1.92rem;
    background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/water-d839a69b0d.png) center no-repeat;
  }

  .m-subCateList .cateItem .cateImg {
    display: block;
    width: 100%;
    background: #fff;
    height: 100%;
  }

  .m-subCateList .cateItem .name {
    height: .96rem;
    font-size: .32rem;
    text-align: center;
    line-height: .48rem;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }



  .huaDong{
    position:fixed;
  }


</style>
