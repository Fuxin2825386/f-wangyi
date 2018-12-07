<template>
  <div>
    <div class="head" >
      <div class="psc-m-topbar">
        <div class="psc-row">
          <div class="psc-m-hamburger">
            <span href="" class="psc-u-nav-link">
              <i class="psc-icon psc-icon-house"></i>
            </span>
          </div>
          <div class="m-head-tab">
            <span href="" data-yxstat="{}" class="item active">发现</span>
            <span href=""
               class="item">甄选家</span>
          </div><!---->
          <div class="psc-m-right">
            <span href="" class="psc-u-nav-link psc-u-link-cart">
              <span class="psc-icon psc-icon-cart">
              <span class="psc-cart-num J_psc_cart_num" style="display: none;">
              </span>
              </span>
            </span>
            <span href="" class="psc-u-nav-link psc-u-link-search">
              <span class="psc-icon psc-icon-search"></span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="m-main-tab">
      <ul class="u-scroll-wrapper flexbox">
        <span href="" class="item active">推荐</span>
        <span href="" class="item">达人</span>
        <span href="" class="item">上新</span>
        <span href="" class="item">晒单</span>
        <span href="" class="item">HOME</span>
      </ul>
    </div>



  <div class="gd">
    <div>
      <div class="m-main-content">
        <div data-tid="5507" class="m-tpls m-tpls-picker">
          <a href="" class="u-flexbox">
            <div class="info">
              <div class="u-name">
          <span class="ava"><img src="https://yanxuan.nosdn.127.net/8b35ae5eb8c014f5a8af7a4dd6eb8736.png?imageView&amp;quality=65&amp;thumbnail=56y56"
                                 alt="" width="100%" height="100%">
          </span>
                <span>选妹</span>
              </div>
              <div class="title">全国大降温！这些好物让你温暖不止一点点</div>
              <div class="desc">高能预警！第一波寒潮要来了！据说全国八成地区将在这周末进入速冻状态，吓得选妹赶紧...</div>
              <div class="u-rcount">
                <i class="ico">
                </i><span>2450人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img src="https://yanxuan.nosdn.127.net/cfb757f7a433ca31fcd772476060ddbb.jpg?imageView&amp;quality=65&amp;thumbnail=272y272"
                   alt="" width="100%" height="100%">
            </div>
          </a>
        </div>
        <div class="m-tpls m-tpls-banner">
          <a href="">
            <div class="u-pic">
              <img
                src="https://yanxuan.nosdn.127.net/b7db4d98e47a94adda8b4d61bc5f4af0.jpg?imageView&quality=65&thumbnail=690y376"
                alt="">
            </div>
          </a>
        </div>

        <div class="m-tpls m-tpls-picker">
          <a href="" class="u-flexbox">
            <div class="info">
              <div class="u-name">
              <span class="ava">
                <img
                  src="https://yanxuan.nosdn.127.net/6311ec4540ebe620ddcd49b10e08a8f6.png?imageView&quality=65&thumbnail=56y56"
                  alt="">
              </span>
                <span>服装组：小服</span>
              </div>
              <div class="title">双11忘买羽绒服？没关系，还有双12！</div>
              <div class="desc">双12时髦保暖羽绒服低至6折</div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>21.8k人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img
                src="https://yanxuan.nosdn.127.net/affbdf2116ad47ae5fc904b02ab145f6.jpg?imageView&quality=65&thumbnail=272y272"
                alt="">
            </div>
          </a>
        </div>
        <div class="m-tpls m-tpls-picker">
          <a href="" class="u-flexbox">
            <div class="info">
              <div class="u-name">
              <span class="ava">
                <img
                  src="https://yanxuan.nosdn.127.net/6311ec4540ebe620ddcd49b10e08a8f6.png?imageView&quality=65&thumbnail=56y56"
                  alt="">
              </span>
                <span>服装组：小服</span>
              </div>
              <div class="title">双11忘买羽绒服？没关系，还有双12！</div>
              <div class="desc">双12时髦保暖羽绒服低至6折</div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>21.8k人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img
                src="https://yanxuan.nosdn.127.net/affbdf2116ad47ae5fc904b02ab145f6.jpg?imageView&quality=65&thumbnail=272y272"
                alt="">
            </div>
          </a>
        </div>

      </div>

    </div>
    </div>


  </div>


</template>

<script>

  import BScroll from "better-scroll"
  import {mapState} from "vuex"
  export default {
    name: "shiWu",
    mounted(){
      new BScroll('.gd', {
        click: true
      })


      this.$store.dispatch("getSw")
    },
    computed:{
      ...mapState(["sw"])
    },
    components: {},
    watch:{

    }

  }
</script>

<style>
  .head{
    position: fixed ;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
  }
  .m-tpls-picker{
    position: relative;
  }
  .u-flexbox{
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  a{
    color: inherit;
  }
  .m-tpls-picker .info{
    width: 4rem;
  }
  .u-name{
    font-size: .28rem;
    color: #333;
    line-height: .36rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .u-name .ava{
    width: .56rem;
    height: .56rem;
    overflow: hidden;
    border-radius: 50%;
    box-sizing: border-box;
    border: .01rem solid #d9d9d9;
    margin-right: .12rem;
  }
  .u-name span{
    display: inline-block;
    vertical-align: middle;
  }
  .m-tpls-picker .title{
    width: 100%;
    font-size: .36rem;
    color: #333;
    line-height: .44rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-top: .32rem;
    font-family: PingFangSC-Regular;
  }
  .m-tpls-picker .desc{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .28rem;
    line-height: .4rem;
    padding-top: .08rem;
    color: #7f7f7f;
  }
  .m-tpls-picker .u-rcount{
    position: absolute;
    left: .3rem;
    bottom: .26rem;
  }
  .u-rcount{
    font-size: .22rem;
    color: #999;
    line-height: .32rem;
    margin-top: .18rem;
  }
  .u-rcount .ico{
    display: inline-block;
    width: .28rem;
    height: .2rem;
    vertical-align: middle;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR…UMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==) no-repeat 0/100%;
    margin-right: .08rem;
  }
  .u-rcount span{
    display: inline-block;
    vertical-align: middle;
  }
  .m-tpls-picker .u-pic{
    width: 2.72rem;
    height: 2.72rem;
    position: relative;
    overflow: hidden;
    border-radius: .08rem;
  }
  .u-pic{
    background: #f0f0f0;
  }
  .u-pic img{
    display: block;
  }

  .psc-m-topbar {
    position: relative;
    height: 1.1rem;
    background-color: #fafafa;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: .01rem solid #d9d9d9;
  }

  .psc-m-topbar .psc-row {
    z-index: 1;
    max-width: 768px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: auto;
    overflow: hidden;
    padding: 0 .26rem 0 .24rem;
    position: relative;
  }

  .psc-m-hamburger {
    display: block;
    float: left;
  }

  .psc-m-topbar .psc-row .psc-u-nav-link {
    display: block;
    height: 1rem;
  }

  .psc-row a {
    text-decoration: none;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
  }
  .m-main-tab .item.active{
    color: #B4282D;
    border-bottom: .01rem solid #B4282D;
  }
  .psc-m-topbar .psc-row .psc-icon {
    display: block;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
  }

  .psc-m-topbar .psc-icon-house {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=);
    background-size: .56rem .56rem;
    width: .56rem;
    height: 1.2rem;
  }

  .psc-row i {
    font-style: normal;
  }

  .m-head-tab {
    position: absolute;
    width: 3.2rem;
    height: 100%;
    line-height: 1rem;
    text-align: center;
    left: 50%;
    top: 0;
    margin-left: -1.6rem;
    font-size: .28rem;
    color: #7F7F7F;
    z-index: 1;
  }

  .m-head-tab .item.active {
    font-size: .4rem;
    color: #b4282d;
    font-weight: bold;
  }

  .m-head-tab .item {
    padding: 0 .16rem;
    vertical-align: middle;
  }

  .psc-m-right {
    display: block;
    float: right;
    height: 1rem;
    margin-right: .02rem;
  }

  .psc-m-topbar .psc-row .psc-u-link-cart {
    float: right;
  }

  .psc-m-topbar .psc-row .psc-u-nav-link {
    display: block;
    height: 1rem;
  }

  .psc-m-topbar .psc-row .psc-icon {
    display: block;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
  }

  .psc-m-topbar .psc-icon-cart {
    background-size: .46rem .46rem;
    width: .49rem;
    height: 1rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAk1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM1idyXAAAAMHRSTlMAYbmIKS7ss/BPwREDeAjlt52EIc3HQTs3JRv53djTjn5XFQ2+p6JH9K+XZDJzb12hgxUyAAABlElEQVRIx82V23KCMBCGV8AYAgLlrChaz4ce/vd/utopKks10YvO9LvaMN+E7OZnoP9FCGDgPKzv63SC1KPHWWQ40hMcMXtG32JTHHtGkkbvV1EEM1mje5n8eLf1xLYANRzwSkamu3P1gdhoFyI9ly4GgUn/rNbnsi/DkUkfXk/gZchN+gt6l/pwqg2sUFzqd9gG20+R0LXXaKnXk4kYXxZ9Yeo1l9k1tkuFQq/3sAlafZvuNcbc51PVsmH7ubD0vVooWysnlNpegxROe6lQ6vRR2Jqjude8Uh5PkK0P2EtArNf92rqP6LzcCScSGuYBj5CC69xn5BNnDZeeYA7bf0J3qxXXjYHO+/dIfu+U4T5VvOgeRqC2UkCsB20UIL7HvvKYPQ4xW9Byjqnf+SzqnKioMQv4LUdNdmZsFynKn69zN2IRa8ZewmKXjdVPEeHtth5xXd3Uh82um85hhCzoxJuQCftBTXAYkxdDsMf+qfct0XYKm2dsu8NU1cAnMZYDSKUELI845R6AlVMHbygAOVzQn/MFg0s1dXIHznQAAAAASUVORK5CYII=);

  }

  .psc-m-topbar .psc-row .psc-cart-num {
    position: absolute;
    top: .22rem;
    right: -.12rem;
    width: .28rem;
    height: .28rem;
    border-radius: .28rem;
    background-color: #b4282d;
    text-align: center;
    line-height: .28rem;
    font-size: .18rem;
    color: #fff;
  }

  .psc-m-topbar .psc-row .psc-u-link-search {
    float: right;
    margin-right: .3rem;
  }

  .psc-m-topbar .psc-row .psc-icon {
    display: block;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
  }

  .psc-m-topbar .psc-icon-search {
    background-size: .46rem .46rem;
    width: .62rem;
    height: 1rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAKlBMVEUAAAA0NDQ0NDQ0NDQ0NDQ0NDQzMzMUFBQ0NDROTk4zMzMzMzMzMzM2NDTc2xHNAAAADXRSTlMAbezXT6YsFM0O+L+FggY9rwAAAP5JREFUOMtjIBOwiTat0ghMQBeeaHsXBC5Logoz6l4KTGcoE9W9JIBiSO9tBzCDZe8NZKOcLgOFIRK2KghhlrWRcPbUWw5wttcdJL1nl8BN1z2AJM5zCWYDx1UUt8U2QBmylijiky9CaE5dBxRxlksTIH66jeb3vRC/MV9BE/c1AFO5CmjiTNcg1gagibNCLI4VQBNnhLi7NwE9Km6AKd0CNHH2S2BqLUbc3cIljsscXPbicicuf+EKB1zhhiuc8cYLZjzij3fMdII9XV3Bng7vXi7Amm4Vbc2xp/NisAbMfMEO0YCZj8AaMPMdTAMmQGhAAPwabmAXZ+9mIBUAAIJuXNa9gIYoAAAAAElFTkSuQmCC);

  }

  .homepage > a {
    display: block;
    height: 1rem;
  }

  .homepage > a i {
    display: block;
    background-size: .46rem .46rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAcNAP9uD9Bfrx5B8v6LSdTgr37N/Uxb14Gtm5r6aVjWhgVTkUgTYpp0pCSlNj4QAAATNJREFUSMfd0+tugyAYBmAUREXtwbNW7Vptu+29//tbsolkahSTbVn6/oM8An4fkKeLL4Kjvn5zgbTT1S8ccYTS08J2A2TUKyF8DX3cAXubkC6F+76qPRPI5XfOda0kAZg09h4wFvWBIbir4Q04L2iDI/FGNXq1J0xtfqKT7TI6q+kJaCZLtRHMYq4kCfjcjz0sWI/J7D0AO5C5FCaidjR3ZaqJ01OOV8qhTjiNXYPn30uyW7ywZ6gG0AyobbKYCth/Ea8EFwZZjgHeH6CCe8M6b1zsPhtd+4YGN/y4koNFrsSf8zZGn+CgwTNYfXiiwU3I++1av8qFBo8VZxqcDZw5m7izjXM93m3hEbwtPEEhebip7qH4ma5eIEyZ0JGvXDjmEIGL4jTFkDAfFmFQSSn5d/kA8eoi0xqdj94AAAAASUVORK5CYII=);
    width: .46rem;
    background-repeat: no-repeat;
    background-position: center;
    height: 1rem;

  }

  .m-main-content {
    padding-top: 160px;
    overflow: scroll;

  }

  .m-tpls {
    width: 100%;
    background: #fff;
    margin-top: 0.1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: .36rem .4rem;
  }

  .u-flexbox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  a {
    color: inherit;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .m-tpls-picker .info {
    width: 58%;
  }

  .u-name {
    font-size: 0.4rem;
    color: #333;
    line-height: .36rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .u-name .ava {
    width: .56rem;
    height: .56rem;
    overflow: hidden;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: .01rem solid #d9d9d9;
    margin-right: .12rem;
  }

  .u-name span {
    display: inline-block;
    vertical-align: middle;
  }

  .m-tpls-picker .title {
    width: 100%;
    font-size: .46rem;
    color: #333;
    line-height: .65rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-top: .45rem;
    font-family: PingFangSC-Regular;
  }

  .m-tpls-picker .desc {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .4rem;
    line-height: .4rem;
    padding-top: .32rem;
    color: #7f7f7f;
  }

  .u-rcount {
    font-size: .4rem;
    color: #999;
    line-height: .4rem;
    margin-top: .18rem;
  }

  .m-tpls-picker .u-rcount {
    position: absolute;
    left: .3rem;
    bottom: .5rem;
  }

  .u-rcount .ico {
    display: inline-block;
    width: .28rem;
    height: .2rem;
    vertical-align: middle;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==) no-repeat 0/100%;
    margin-right: .08rem;
  }

  .m-tpls-picker .u-pic {
    width: 40%;
    height: 4rem;
    position: relative;
    overflow: hidden;
    border-radius: .08rem;
  }

  .u-pic {
    background: #f0f0f0;
    border-radius: .08rem;
  }

  .m-main-tab {
    width: 100%;
    height: .95rem;
    background: #fafafa;
    border-bottom: .01rem solid #d9d9d9;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    position: fixed;
    top: 1.1rem;
    left: 0;
    z-index: 20;
  }

  .u-pic img {
    display: block;
    border: 0 none;
    width: 100%;
    height: 100%;
  }

  .m-main-tab .u-scroll-wrapper {
    width: 100%;
    height: .8rem;
    padding-bottom: .2rem;
    white-space: nowrap;
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .m-main-tab .u-scroll-wrapper.flexbox {

    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 0;
  }

  .m-main-tab .item {
    display: inline-block;
    height: .95rem;
    line-height: .72rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.4rem;
    color: #7F7F7F;
    padding: 0 .08rem;
    margin: 0 .2rem;
    vertical-align: middle;
  }

  .m-main-tab .item.active {
    color: #B4282D;
    border-bottom: .04rem solid #B4282D;
  }

  .m-head-tab {
    position: absolute;
    width: 3.2rem;
    height: 100%;
    line-height: 1.1rem;
    text-align: center;
    left: 50%;
    top: 0;
    margin-left: -1.6rem;
    font-size: .4rem;
    color: #7F7F7F;
    z-index: 1;
  }

  .m-head-tab .item {
    padding: 0 .16rem;
    vertical-align: middle;
    color: #7F7F7F;
  }

  .m-head-tab .item.active {
    font-size: .6rem;
    color: #b4282d;
    font-weight: bold;
  }
  .gd{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width:750px;
    background-color: #fff;
    z-index :1
  }

</style>
