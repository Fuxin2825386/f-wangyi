<template>
  <div>
    <div class="head">
      <div class="psc-m-topbar">
        <div class="psc-row">
          <div class="psc-m-hamburger">
            <a href="#" class="psc-u-nav-link">
              <i class="psc-icon psc-icon-house"></i>
            </a>
          </div>
          <div class="m-head-tab">
            <a href="#" data-yxstat="{}" class="item active">发现</a>
            <a href="#"
               data-yxstat="{&quot;event_name&quot;:&quot;view_recognition_top_expert&quot;,&quot;event_action&quot;:&quot;view&quot;,&quot;page_name&quot;:&quot;recognition&quot;}"
               class="item">甄选家</a>
          </div>

          <div class="psc-m-right">
            <a href="/cart" class="psc-u-nav-link psc-u-link-cart">
              <i class="psc-icon psc-icon-cart">
              <span class="psc-cart-num J_psc_cart_num" style="display: none;">
              </span>
              </i>
            </a>
            <a href="/search" class="psc-u-nav-link psc-u-link-search">
              <i class="psc-icon psc-icon-search"></i>
            </a>
          </div>


        </div>
      </div>
    </div>

    <div class="m-main-tab">
      <ul class="u-scroll-wrapper flexbox">
        <a
          :href="`/#/shiwu?tab=${tab.tabId}`" class="item"
          v-for="(tab,index) in dr" :key="index"
          :class="{active:currintIndex == tab.tabId}"
        >{{tab.tabName}}</a>
      </ul>
    </div>


    <div class="m-main-content" v-for="(sws,index) in arr" :key="index">
      <div class="m-tpls m-tpls-banner">
        <a href="">
          <div class="u-pic">
            <img :src="sws.picUrl">
          </div>
        </a>
      </div>


      <div v-for="(swa,index) in arr" :key="index">  <!--v-for 优先级比v-if高 -->

        <!--推荐-->
        <div class="m-tpls m-tpls-picker" v-if="swa.type === 1">
          <a href="" class="u-flexbox">
            <div class="info">
              <div class="u-name">
              <span class="ava">
                <img :src="swa.avatar" alt="">
              </span>
                <span>{{swa.nickname}}</span>
              </div>
              <div class="title">{{swa.title}}</div>
              <div class="desc">{{swa.subTitle}}</div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>{{swa.readCount}}</span>
              </div>
            </div>
            <div class="u-pic">
              <img :src="swa.picUrl"
                   alt="">
            </div>
          </a>
        </div>
        <!--达人-->
        <div class="m-tpls m-tpls-rec" v-if="swa.type=== 0 || swa.type === 2">
          <a href="" class="recs">
            <div class="info">
              <div class="u-name">
              <span class="ava">
                <img :src="swa.avatar" alt="">
              </span>
                <span>{{swa.nickname}}</span>
              </div>
              <div class="title">{{swa.title}}</div>
              <div class="u-rcount">
                <i class="ico"></i>
                <span>{{swa.readCount}}人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img :src="swa.picUrl" alt="">
            </div>
          </a>
        </div>
        <!--上新-->
        <div data-tid="5492" class="m-tpls m-tpls-new" v-if="swa.type === 7 ">
          <a href="">
            <div class="title">{{swa.title}}</div>
            <div class="content">{{swa.subTitle}}</div>
          </a>
          <ul class="m-gplist" v-if="swa.itemList">
            <li v-for="(swaa,index) in swa.itemList" v-if="swaa!=null" :key="index">
              <img
                :src="swaa.itemUrl"
                alt="" width="100%" height="100%"></li>
          </ul>
          <div class="u-rcount">
            <i class="ico"></i>
            <span>{{swa.countPrice}}</span>
          </div>
        </div>
        <!--晒单-->



      </div>


    </div>

  </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        arr: [],
      }
    },
    name: "shuWu",
    components: {},
    mounted() {
      this.$store.dispatch('getSw')
      this.$store.dispatch('getDr')
    },
    computed: {
      ...mapState(['sw', "dr", "drs", "sx"]),


      currintIndex() {
        let flag = 9
        let path = this.$route.fullPath
        path = path.split("=")[1]
        if (!path) {
          return 9
        }
        return flag = path
      }


    },
    watch: {


      drs() {
        this.drs.result.map((item) => {
          return this.arr.push(item)
        })
        return this.arr = this.arr.flat(Infinity)
      },

      sw() {

        this.sw.map((item) => {
          item.topics.map((item) => {
            return this.arr.push(item)
          })
        })
        return this.arr = this.arr.flat(Infinity)
      },

      sx() {
        this.sx.result.map((item) => {
          return this.arr.push(item)
        })
        return this.arr = this.arr.flat(Infinity)
      },


      currintIndex() {
        if (this.currintIndex == 9) {

          this.arr = [];
          this.$store.dispatch("getSw")
        } else if (this.currintIndex == 4) {

          this.arr = [];
          this.$store.dispatch("getDrs")
        } else if (this.currintIndex == 5) {

          this.arr = [];
          this.$store.dispatch("getSx")
        }
      }


    }
  }


</script>

<style>
  .head {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
  }

  .m-tpls-picker {
    position: relative;
  }

  .u-flexbox {
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  a {
    color: inherit;
  }

  .m-tpls-picker .info {
    width: 4rem;
  }

  .u-name {
    font-size: .28rem;
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

  .m-tpls-picker .desc {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .28rem;
    line-height: .4rem;
    padding-top: .08rem;
    color: #7f7f7f;
  }

  .m-tpls-picker .u-rcount {
    position: absolute;
    left: .3rem;
    bottom: .26rem;
  }

  .u-rcount {
    font-size: .22rem;
    color: #999;
    line-height: .32rem;
    margin-top: .18rem;
  }

  .u-rcount .ico {
    display: inline-block;
    width: .28rem;
    height: .2rem;
    vertical-align: middle;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR…UMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==) no-repeat 0/100%;
    margin-right: .08rem;
  }

  .u-rcount span {
    display: inline-block;
    vertical-align: middle;
  }

  .m-tpls-picker .u-pic {
    width: 2.72rem;
    height: 2.72rem;
    position: relative;
    overflow: hidden;
    border-radius: .08rem;
  }

  .u-pic {
    background: #f0f0f0;
  }

  .u-pic img {
    display: block;
  }

  .m-tpls-banner {
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

  .m-main-content {
    margin-top: 2.1rem;
  }

  .psc-row a {
    text-decoration: none;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
  }

  .m-main-tab .item.active {
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

  .m-tpls {
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: .36rem .3rem;
  }

  a {
    color: inherit;
  }

  .m-tpls-new .title {
    width: 100%;
    color: #333;
    font-size: .36rem;
    line-height: .54rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: PingFangSC-Regular;
  }

  .m-tpls-new .content {
    font-size: .28rem;
    color: #7F7F7F;
    line-height: .4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    padding-top: .08rem;
  }

  .m-tpls-new .m-gplist {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: .24rem 0;
  }

  .m-tpls-new .m-gplist li {
    width: 160px;
    height: 160px;
    border-radius: .04rem;
    overflow: hidden;
    background: #f4f4f4;
    margin-bottom: 20px;
  }

  .u-rcount .ico {
    display: inline-block;
    width: .28rem;
    height: .2rem;
    vertical-align: middle;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR…UMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==) no-repeat 0/100%;
    margin-right: .08rem;
  }

  .u-rcount span {
    display: inline-block;
    vertical-align: middle;
  }

  .m-wrapper[data-v-26c33bf4] {
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
    padding-top: .37333rem;
    margin-bottom: .26667rem;
    padding-bottom: .53333rem;
  }

  .weex-ct {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    -webkit-flex-basis: auto;
    flex-basis: auto;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    -webkit-align-content: flex-start;
    align-content: flex-start;
    border: 0 solid black;
    margin: 0;
    padding: 0;
    min-width: 0;
  }

  .m-titleWrapper[data-v-26c33bf4] {
    margin-bottom: .32rem;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .m-titleWrapper[data-v-26c33bf4] {
    margin-bottom: .32rem;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .m-partTlt[data-v-26c33bf4] {
    color: #7f7f7f;
    font-size: .37333rem;
    height: .53333rem;
    line-height: .53333rem;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-family: PingFangSC-Light;
  }

  .weex-text {
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    position: relative;
    white-space: pre-wrap;
    font-size: 0.4266666666666667rem;
    word-wrap: break-word;
    overflow: hidden;
  }

  .m-recommendArea[data-v-26c33bf4] {
    max-width: 6rem;
  }

  .m-commaLeft[data-v-26c33bf4] {
    position: absolute;
    left: -.48rem;
    top: .13333rem;
    width: .28rem;
    height: .24rem;
  }

  .weex-root figure {
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .m-word[data-v-26c33bf4] {
    position: relative;
    max-width: 6rem;
    lines: 2;
    word-break: break-all;
    -webkit-box-orient: vertical;
    text-align: center;
    font-size: .42667rem;
    line-height: .64rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }

  .m-commaRight[data-v-26c33bf4] {
    position: absolute;
    right: -.50667rem;
    bottom: .08rem;
    width: .28rem;
    height: .24rem;
  }

  .weex-root figure {
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .m-slider[data-v-26c33bf4] {
    width: 10rem;
    height: 3.2rem;
    margin-top: .42667rem;
  }

  .weex-scroller-horizontal .weex-scroller-inner {
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-orient: horizontal;
    height: 100%;
  }

  .m-rec-slider .weex-scroller-inner {
    position: absolute;
  }

  .m-slider .m-look[data-v-26c33bf4]:first-child {
    margin-left: .4rem;
  }

  .m-slider .m-look[data-v-26c33bf4] {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 4px;
    overflow: hidden;
    margin: 0 .13333rem;
  }

  .m-slider .m-image[data-v-26c33bf4] {
    width: 3.2rem;
    height: 3.2rem;
  }

  .weex-root figure {
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .m-partTlt[data-v-26c33bf4] {
    color: #7f7f7f;
    font-size: .37333rem;
    height: .53333rem;
    line-height: .53333rem;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-family: PingFangSC-Light;
  }

  .m-wrapper[data-v-37617678] {
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
    padding-top: .8rem;
  }

  .m-titleWrapper[data-v-37617678] {
    margin-bottom: .26667rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
  }

  .m-partTlt[data-v-37617678] {
    color: #333;
    font-size: .42667rem;
    height: .45333rem;
    line-height: .45333rem;
    margin: 0 .26667rem;
    font-weight: 700;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

  .m-tabWrapper[data-v-37617678] {
    width: 10rem;
    height: 1.76rem;
    padding-top: .32rem;
  }

  .m-fixedTab[data-v-37617678], .m-tab[data-v-37617678] {
    width: 10rem;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    top: 0;
    background-color: #fff;
  }

  .m-tabItem[data-v-37617678] {
    width: 2.29333rem;
    height: 1.6rem;
    margin: 0 .32rem;
    padding: .42667rem 0;
  }

  .weex-ct {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex-shrink: 0;
    /* flex-shrink: 0; */
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    -webkit-flex-basis: auto;
    flex-basis: auto;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    -webkit-align-content: flex-start;
    align-content: flex-start;
    border: 0 solid black;
    margin: 0;
    padding: 0;
    min-width: 0;
  }

  .m-tabTxt-active[data-v-37617678] {
    background-color: #ffe4af;
    color: #b0955f;
    font-weight: 700;
  }

  .m-tabTxt[data-v-37617678] {
    width: 2.29333rem;
    height: .74667rem;
    border-radius: 4px;
    line-height: .74667rem;
    text-align: center;
    box-sizing: border-box;
    font-size: .37333rem;
    color: #333;
    background-color: #f4f4f4;
    font-family: PingFangSC-Light;
  }

  .m-tabItem[data-v-37617678] {
    width: 2.29333rem;
    height: 1.6rem;
    margin: 0 .32rem;
    padding: .42667rem 0;
  }

  .m-tabTxt[data-v-37617678] {
    width: 2.29333rem;
    height: .74667rem;
    border-radius: 4px;
    line-height: .74667rem;
    text-align: center;
    box-sizing: border-box;
    font-size: .37333rem;
    color: #333;
    background-color: #f4f4f4;
    font-family: PingFangSC-Light;
  }

  .m-lookImageWrapper[data-v-17e3c4b9] {
    position: relative;
    background-color: #f2f2f2;
  }

  .weex-ct {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-flex-shrink: 0;
    /* flex-shrink: 0; */
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    -webkit-flex-basis: auto;
    flex-basis: auto;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    -webkit-align-content: flex-start;
    align-content: flex-start;
    border: 0 solid black;
    margin: 0;
    padding: 0;
    min-width: 0;
  }

  .m-lookDesc[data-v-17e3c4b9], .m-lookDetail[data-v-17e3c4b9] {
    width: 4.57333rem;
    box-sizing: border-box;
    -webkit-flex-direction: row;
    flex-direction: row;
    background-color: #fff;
  }

  .m-lookDesc[data-v-17e3c4b9] {
    padding: .24rem .21333rem 0;
    color: #333;
    font-size: .32rem;
    line-height: .48rem;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    lines: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }

  .m-lookDesc[data-v-17e3c4b9], .m-lookDetail[data-v-17e3c4b9] {
    width: 4.57333rem;
    box-sizing: border-box;
    -webkit-flex-direction: row;
    flex-direction: row;
    background-color: #fff;
  }

  .m-userpic[data-v-17e3c4b9] {
    width: .64rem;
    height: .64rem;
    box-sizing: border-box;
    border-radius: 24px;
    border: 1px solid #dbdbdb;
  }

  .weex-root figure {
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .m-userName[data-v-17e3c4b9] {
    width: 1.6rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .32rem;
    color: #7f7f7f;
    height: .64rem;
    line-height: .64rem;
    margin-left: .10667rem;
  }

  .weex-text {
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    position: relative;
    white-space: pre-wrap;
    font-size: 0.4266666666666667rem;
    word-wrap: break-word;
    overflow: hidden;
  }

  .m-upArea[data-v-17e3c4b9] {
    width: 1.33333rem;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .m-upText[data-v-17e3c4b9] {
    font-size: .32rem;
    color: #7f7f7f;
    width: 1.2rem;
    text-align: right;
    height: .64rem;
    line-height: .64rem;
    margin-right: .02667rem;
  }

  .m-hand[data-v-17e3c4b9] {
    display: block;
    width: .37333rem;
    height: .37333rem;
  }

  .weex-root figure {
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }


</style>
