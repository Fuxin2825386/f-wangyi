import ajax from "./ajax"


const BASE = "/xin"
//获取头部轮播信息
export const reqLbt = () => ajax("/msite")

//获取分类头部信息
export const reqFl = () => ajax("/classify")


//请求识物组件中的内容推荐列表数据
export const reqSw = () => ajax(BASE+"/topic/v1/find/recManual.json")

export const reqDr = () => ajax(BASE + "/topic/v1/find/getTabs.json")


export const reqDrs = () => ajax(BASE + "topic/v1/find/getTabData.json?page=1&size=5&tabId=4")


export const reqSx = () => ajax(BASE + "topic/v1/find/getTabData.json?page=1&size=5&tabId=5")





//登录相关操作

const BASES = '/api'



/**
 * 获取图片验证码
 */
export const reqCaptchas = () => ajax('/api/captcha')

/**
 * 账号密码登录
 */
export const pwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')


/**
 * 发送短信验证码
 */
export const reqSendCode = (phone) => ajax(BASES+'/sendcode', {phone})

/**
 * 手机号验证码登录
 */
export const smsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
