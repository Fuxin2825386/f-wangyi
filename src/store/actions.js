import {
  reqLbt,
  reqFl,
  reqSw,
  reqDr,
  reqDrs,
  reqSx
} from "../api"

import {
  RECEIVE_LBT,
  RECEIVE_ZY,
  RECEIVE_GOODS,
  RECEIVE_EVENT,
  RECEIVE_XR,

  RECEIVE_FL,
  RECEIVE_SW,
  RECEIVE_DR,
  RECEIVE_DRS,
  RECEIVE_SX


} from "./mutation-type"


export default {

  //异步获取轮播图信息
  async getLbt({commit}) {
    const result = await reqLbt()
    if (result.code === 0) {
      const {focusList} = result.msite
      commit(RECEIVE_LBT, focusList)
    }
  },


  //异步获取
  async getZy({commit}) {
    const result = await reqLbt()
    if (result.code === 0) {
      const {policyDescList} = result.msite
      commit(RECEIVE_ZY, policyDescList)
    }
  },

  //异步获取
  async getGoods({commit}) {
    const result = await reqLbt()
    if (result.code === 0) {
      const {kingKongModule} = result.msite
      const goods = kingKongModule
      commit(RECEIVE_GOODS, goods)
    }
  },

  //异步获取
  async getEvent({commit}) {
    const result = await reqLbt()
    if (result.code === 0) {
      const {bigPromotionModule} = result.msite
      const event = bigPromotionModule.bigPromotionList
      let arr = []

      event.map((item) => {
        item.data.contents.map((item) => {
          arr.push(item.picUrl)
        })
      })
      commit(RECEIVE_EVENT, arr)


    }
  },

  //同步请求
  async getXr({commit}) {
    const result = await reqLbt()
    if (result.code === 0) {
      const {indexActivityModule} = result.msite

      commit(RECEIVE_XR, indexActivityModule)
    }
  },


  //分类请求
  async getFl({commit}) {
    const result = await reqFl()
    if (result.code === 0) {
      const fl = result.classify
      commit(RECEIVE_FL, fl)
    }
  },


  //推荐请求
  async getSw({commit}) {
    const result = await reqSw();
    if (result.code === "200") {
      const sw = result.data;
      commit(RECEIVE_SW, sw)
    }
  },

  //推荐请求
  async getDr({commit}) {
    const result = await reqDr();
    if (result.code === "200") {

      const dr = result.data;
      commit(RECEIVE_DR, dr)
    }
  },

  //推荐请求
  async getDrs({commit}) {

    const result = await reqDrs();
    if (result.code === "200") {
      const drs = result.data;
      commit(RECEIVE_DRS, {drs})
    }
  },


  //推荐请求
  async getSx({commit}) {
    const result = await reqSx();
    if (result.code === "200") {
      const sx = result.data;
      commit(RECEIVE_SX, {sx})
    }
  },


}
