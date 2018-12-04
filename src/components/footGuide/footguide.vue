<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;"
       class="guide_item"
       :class="{on:$route.path === '/shouye'}" @click="goTo('/shouye')">
      <span class="item_icon">
        <i class="iconfont"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;"
       class="guide_item"
       :class="{on:$route.path === '/fenlei'}" @click="goTo('/fenlei')">
      <span class="item_icon">
        <i class="iconfont "></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;"
       class="guide_item"
       :class="{on:$route.path === '/shiwu'}" @click="goTo('/shiwu')">
      <span class="item_icon">
        <i class="iconfont"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;"
       class="guide_item"
       :class="{on:$route.path === '/gouwuche'}" @click="goTo('/gouwuche')">
      <span class="item_icon">
        <i class="iconfont"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;"
       class="guide_item"
       :class="{on:$route.path === '/geren'}" @click="goTo('/geren')">
      <span class="item_icon">
        <i class="iconfont"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: 'FootGuide',
    methods:{
      goTo(path){
        //编程式路由导航
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../common/stylus/minxins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 10px
      color #999999
      &.on
        color #02a774
      span
        font-size 24px
        margin-top 4px
        margin-bottom 8px

        .iconfont
          font-size 42px
          display block
          width 
          background url("./imges/tabBar-sd723b5d859-721c8f6b53.png")  0 -200px



</style>
