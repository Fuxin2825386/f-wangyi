<template>
  <div id="login">
    <div class="m-topBar" style="height: 43px;">
      <div class="bd">
        <div class="row">
          <a class="u-icon u-icon-home" href="/page"></a>
          <a href="/">
            <i class="logo u-icon u-icon-logo"></i></a>
          <div class="right">
            <a class="search" href="/search">
              <i class="u-icon u-icon-search1"></i>
            </a>
            <a class="cart" href="/cart">
              <i class="u-icon u-icon-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="m-loginTypes" style="height: 624px;">
      <div class="cont" >
        <div class="logoWrap" >
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" ></div>
        <div class="btnWrap" >
          <div class="w-button w-button-xl w-button-block" >
            <i class="u-icon u-icon-loginPhone" ></i>
            <span >手机号码登录</span>
          </div>
          <div class="w-button w-button-xl w-button-block w-button-ghostRed">
            <i class="u-icon u-icon-loginMail" ></i>
            <span>邮箱帐号登录</span></div>
          <div class="btn" ><span  @click="zc('/logo')">手机号快捷注册</span>
            <i class="u-icon u-icon-arrow-right3" ></i></div>
        </div>
      </div>
      <div class="thirdWrap" style="margin-bottom: 0.5rem" >
        <div class="itemWrap" ><span class="item" >
          <i class="icon icon-weixin" ></i>
          <span class="name" >微信</span>
        </span>
        </div>
        <div class="itemWrap" ><span class="item">
          <i class="icon icon-qq" ></i><span class="name">QQ</span></span>
        </div>
        <div class="itemWrap" >
          <span class="item" >
            <i class="icon icon-weibo" ></i>
            <span class="name" >微博</span></span>
        </div>
      </div >
    </div>
  </div>


</template>

<script>

  export default {
    components: {},
    methods:{
      zc(path){
        this.$router.replace(path)
      }
  }
  }
</script>

<style scoped>
  .m-topBar{
    position: relative;
  }
  .m-topBar .bd {
    height: 1.16rem;
    background-color: #fafafa;
    position: relative;
  }
  .m-topBar .bd .row{
    z-index: 1;
    box-sizing: border-box;
    width: 10rem;
    margin: auto;
    overflow: hidden;
    position: relative;
    padding: 0 .21333rem 0 .32rem;
    height: 1.17333rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .u-icon-home{
    width: .64rem;
    height: .58667rem;
    background-position: 0 -.98667rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
  }
  .m-topBar .bd .row .logo{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .u-icon-logo{
    width: 2.29333rem;
    height: .72rem;
    background-position: 0 -1.70667rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
  }
  .m-topBar .bd .row .right{
    margin-left: auto;
    margin-right: .06667rem;
  }
  .m-topBar .bd .row .search{
    margin-right: .26667rem;
  }
  .m-topBar .bd .row .search .u-icon-search1{
    position: relative;
    bottom: 0;
  }
  .u-icon-search1{
    width: .85333rem;
    height: .85333rem;
    background-position: 0 -4.74667rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
  }
  .m-topBar .bd .row .cart .u-icon{
    position: relative;
  }
  .u-icon-cart{
    width: .85333rem;
    height: .85333rem;
    background-position: 0 0;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
    background-repeat: no-repeat;
    background-size: 2.29333rem 5.6rem;
  }
  .m-topBar.search:after{
    content: '';
    left: 0;
  }
  .m-loginTypes{
    position: relative;
    height: 100%;
    background: #F2F5F4;
  }
  .m-loginTypes .logoWrap{
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 2.13333rem;

  }
  .m-loginTypes .logoWrap img{
    width: 3.57333rem;
    height: 1.2rem;
  }
  .m-loginTypes .btnWrap{
    padding: 0 .53333rem;
    margin-bottom: 2.73333rem
  }
  .m-loginTypes .btnWrap .w-button{
    margin-bottom: .42667rem;
  }
  .w-button{
    display: block;
    width: 100%;
    vertical-align: middle;
    font-size: .37333rem;
    text-align: center;
    color: #fff;
    border: 1px solid #b4282d;
    background-color: #b4282d;
    overflow: hidden;
    border-radius: 2px;
  }
  .m-loginTypes .btnWrap .u-icon{
    margin-right: .21333rem;
    position: relative;
    top: -.02667rem;
  }
  .u-icon-loginPhone{
    background-position: 0 -.66667rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
    background-repeat: no-repeat;
    background-size: .53333rem 3.86667rem;
    width: .53333rem;
    height: .53333rem;
  }
  .w-button-block{
    display: block;
    width: 100%;
  }
  .w-button-xl{
    height: 1.25333rem;
    line-height: 1.25333rem;
  }
  .w-button-ghostRed{
    border-color: #b4282d;
    color: #b4282d;
    background-color: transparent;
  }
  .u-icon-loginMail{
    background-position: 0 0;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png);
    background-repeat: no-repeat;
    background-size: .53333rem 3.86667rem;
    width: .53333rem;
    height: .53333rem;
  }
  .m-loginTypes .btnWrap .btn{
    color: #333;
    font-size: .37333rem;
    text-align: center;
    width: 100%;
  }
  .m-loginTypes .u-icon-arrow-right3{
    margin-left: .05333rem;
  }
  .u-icon-arrow-right3{
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
  }
  .m-loginTypes .thirdWrap{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 1.06667rem;
    height: .53333rem;
    text-align: center;
  }
  .m-loginTypes .thirdWrap .itemWrap{
    height: .53333rem;
    border-right: 1px solid #979797;
    display: inline-block;
    text-align: center;
    padding: 0 .53333rem;
  }
  .m-loginTypes .thirdWrap .item{
    height: .53333rem;
    position: relative;
    top: -.13333rem;
  }
  .m-loginTypes .thirdWrap .item .icon-weixin {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFW…jfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=) no-repeat;
    background-size: 98%;
  }
  .m-loginTypes .thirdWrap .item .icon{
    position: relative;
    top: .13333rem;
    display: inline-block;
    width: .53333rem;
    height: .53333rem;
  }
  .m-loginTypes .thirdWrap .item .name{
    font-size: .37333rem;
    line-height: .53333rem;
    height: .53333rem;
    color: #7F7F7F;
    margin-left: .06667rem;
  }
  .m-loginTypes .thirdWrap .itemWrap:last-child{
    border-right: none;
  }
</style>

