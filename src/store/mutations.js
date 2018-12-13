
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
  RECEIVE_FL,

  //达人信息
  RECEIVE_SW,
  RECEIVE_DR,
  RECEIVE_DRS,
  RECEIVE_SX




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




  [RECEIVE_SW](state,sw){
    state.sw = sw
  },

  [RECEIVE_DR](state,dr){
    state.dr = dr
  },

  [RECEIVE_DRS](state,{drs}){
    state.drs = drs
  },

  [RECEIVE_SX](state,{sx}){
    state.sx = sx
  },





}
