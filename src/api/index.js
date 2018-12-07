import ajax from "./ajax"

//获取头部轮播信息
export const reqLbt =()=>ajax("/msite")

//获取分类头部信息
export const reqFl =()=>ajax("/classify")
