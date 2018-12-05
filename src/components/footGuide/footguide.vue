<template>
  <footer class="footer_guide ">
    <div class="guide_item" @click="goto('/shouye')" :class="{on: isCurrent('/shouye')}">
      <span class="item_icon">
        <i class="iconfont icon-1212"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/fenlei')" :class="{on: isCurrent('/fenlei')}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guide_item" @click="goto('/shiwu')" :class="{on: isCurrent('/shiwu')}">
      <span class="item_icon">
        <i class="iconfont icon-saomiaoshibie380"></i>
      </span>
      <span>订单</span>
    </div>
    <div class="guide_item" @click="goto('/gouwuche')" :class="{on: isCurrent('/gouwuche')}">
      <span class="item_icon">
        <i class="iconfont icon-icon22fuzhi"></i>
      </span>
      <span>我的</span>
    </div>
    <div class="guide_item" @click="goto('/geren')" :class="{on: isCurrent('/geren')}">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxin"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      },
      isCurrent(path) {
        // console.log(this.$route.path)
        return this.$route.path === path
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/minxins.styl"
  .footer_guide
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
        color red
      span
        font-size 24px
        margin-top 4px
        margin-bottom 4px
        .iconfont
          font-size 42px
</style>
