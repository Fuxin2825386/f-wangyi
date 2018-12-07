
/*
vuex的mutations模块
*/
import {

  RECEIVE_LBT,
  RECEIVE_ZY,
  RECEIVE_GOODS,
  RECEIVE_EVENT,
  RECEIVE_XR,


  //分类信息
  RECEIVE_FL


} from "./mutation-type"
export  default{


  [RECEIVE_LBT](state,lbt){
    state.lbt = lbt
  },

  [RECEIVE_ZY](state,zy){
    state.zy = zy
  },


  [RECEIVE_GOODS](state,goods){
    state.goods = goods
  },

  [RECEIVE_EVENT](state,event){
    state.event = event
  },

  [RECEIVE_XR](state,xr){
    state.xr = xr
  },


  [RECEIVE_FL](state,fl){
    state.fl = fl
  },




}
