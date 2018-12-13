<template>
  <div class="wrap ">
      <div class="header" >
        <div>
          <i href="" class="iconfont icon-fangzi"></i>
        </div>
        <div>
          <a href=""></a>
        </div>
        <div>
          <i href="" class="iconfont icon-sousuo-copy"></i>
          <i href="" class="iconfont icon-gouwuche1"></i>
        </div>
      </div>
      <div class="content clearFix">
        <h1 class="title">手机号注册</h1>
        <div class="from-y clearFix">
          <div class="input-a">
            <label>
              <input type="text" maxlength="11" placeholder="手机号" v-model="phone">
            </label>
          </div>
          <div class="input-b">
            <label>
              <input type="text" maxlength="6" placeholder="请输入短信验证密码">
            </label>
            <div class="yan-z">
              <button
                @click.prevent="yz"
                :disabled="!rightPhoneNumber || timeIndex > 0"
                :class="{right_phone_number:rightPhoneNumber}">{{timeIndex > 0?`已发送(${timeIndex}s)`:'获取验证密码'}}</button>
            </div>
          </div>
          <div class="input-c">
            <label>
              <input type="text" placeholder="请输入密码">
            </label>
          </div>
          <div class="btn">
            <a href="javascript:;">注册</a>
          </div>
          <div class="xie-y">
            <label>
              <input type="checkbox" checked>我同意<a href="">《服务条款》</a>和<a href="">《网易隐私政策》</a>
            </label>
          </div>
          <div class="you-x">
            <label>
              <span @click="$router.replace('/geren')">邮箱账号注册</span>
              <i class="iconfont icon-youjiantou"></i>
            </label>

          </div>
        </div>
      </div>
  </div>
  </template>



<script>
  import {mapActions} from 'vuex'
  import {reqSendCode, smsLogin, pwdLogin} from '../../api/index'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {Toast,MessageBox} from "mint-ui"
  export default {

    components: {
      AlertTip
    },
    data(){
      return {
        timeIndex:0, //倒计时
        phone:"",//电话号码
        showAlert:false, //显示提示组件
        alertText:null, //提示内容
      }

    },
    computed:{
      //判断手机号码
      rightPhoneNumber:function () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      //获取短信
     async yz(){
        //开始倒计时
        this.timeIndex =30
        //启动循环器
        const tiemId = setInterval(()=>{
          this.timeIndex--;
          //判断 一旦时间到了,清除定时器
          if(this.timeIndex <= 0){
            this.timeIndex = 0
            clearInterval(tiemId)
          }
        },1000)

        //发送ajax请求
       const result = await reqSendCode(this.phone)
       if(result.code === 0){//发送验证码成功
          Toast("验证码已发送")
       }else {//发送验证码失败
         //发送失败把定时器停下来
        this.timeIndex = 0

         //发送验证码失败
         MessageBox.alert("发送验证码失败")
       }
      }
    }
  }


</script>
<style lang="less" type="text/less" scoped>
  @import "../../common/1-px/1-px.less";

  .wrap{
    width: 100%;
  .header{
    display: flex;
    justify-content: space-around;
    div{
      height: 120px;
      line-height: 120px;
      .iconfont{
        font-size: 65px;
        color:  rgba(100,100,100,8);
      }
    }
    div:nth-child(1){
      > i{
        margin-left: 20px;
        vertical-align: middle;
        font-size: 70px;
      }
    }
    div:nth-child(2){
     width: 400px;
      a{
       background: url("images/01.png") no-repeat 160px -118px;
        background-size: 2.29333rem 5.6rem;;
        display: inline-block;
        vertical-align: middle;
        height: 80px;
        width: 500px;
      }
    }
    div:nth-child(3){
     > i{
        margin-right: 20px;
        vertical-align: middle;
      }
    }
    .1-px-button(rgba(210,210,210,4))
  }
  .content{
    height: 120px;
    line-height: 120px;
    .title{
      font-size:35px;
      text-align: center;
    }
    .from-y{
      width: 650px;
      /*border: 1px solid red;*/
      margin: 70px auto;
      .input-a,.input-b,.input-c{
        padding-top: 5px;
        label{
          padding-top: 5px;
          input{
            width: 100%;
            height: 100%;
            position: relative;
            top: 10px;
            font-size: 28px;
            outline: none;
            opacity: 0.8;
            padding-left: 20px;
          }
        }
        .yan-z{
          position: absolute;
          right: 0.22rem;
          top: 50px;
          z-index: 100;
          > button{
              display: block;
              width: 2.3rem;
              height: 0.75rem;
              text-align: center;
              font-size: 20px;
              background: #fff;
              line-height: 0.75rem;
              border: 1.5px solid #7F7F7F;
              border-radius: 15px;
              outline: none;
          }
        }
       .1-px-button(rgba(210,210,210,4))
      }
      .input-a{

      }
      .input-b{

      }
      .input-c{

      }
      .btn{
        margin: 0.426rem 0 0.313rem;
        background: #b4282d;
        border-radius: 5px;
        a{
          font-size: 20px;
          color: white;
          text-align: center;
          width: 100%;
          height: 100px;
          display: block;
          line-height: 100px;
        }
      }
      .xie-y{
       > label{
         display: block;
         margin-top: -40px;
         > input{
           vertical-align: middle;
           position: relative;
           top: -3px;
           width: 30px;
           height: 30px;
           display: inline-block;
           border: 1px silver solid;
          }
         > a{
           color: #5fbfff;
         }
        }
      }
      .you-x{
        position: relative;
        display: flex;
        justify-content: center;
        label{
          position: relative;
          top: -30px;
          display: inline-block;
          > span{
            display: inline-block;
            text-align: center;
          }
          > i{
            vertical-align: middle;
            font-size: 40px;
          }
        }

      }
    }
  }

}


  .get_verification{
    position :absolute;
    top :50%;
    right: 10px;
    transform: translateY(-50%);
    border: 0;
    color: #ccc;
    font-size: 14px;
    background: transparent;
  }
  .right_phone_number{
    color:black;
  }



</style>
