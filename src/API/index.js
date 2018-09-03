/**
 * 包含n个接口请求函数的模块
 * 返回值：promise对象
 */

const BASR_URL = '/api'

import ajax from './ajax'
// 1、根据经纬度获取位置详情

// export function reqAddress(latitude,longitude){
// 	
// }
export const reqAddress = (geohash) => ajax(BASR_URL+'/position/'+geohash)


// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASR_URL+'/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = ({latitude, longitude}) => ajax(BASR_URL+'/shops', {latitude, longitude})

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = ({keyword,geohash}) => ajax(BASR_URL+'/search_shops',{keyword,geohash})

// 5、获取一次性验证码
export const reqCaptchas = () => ajax(BASR_URL+'/captchas')

// 6、用户名密码登陆
export const accountLogin = ({name, pwd, captcha}) => ajax(BASR_URL+'/login_pwd', {name,pwd,captcha}, 'POST')

// 7、发送短信验证码
export const mobileCode = (phone) => ajax(BASR_URL+'/sendcode', {phone})

// 8、手机号验证码登陆
export const phoneLogin = (phone, code) => ajax(BASR_URL+'/login_sms', {phone, code}, 'POST')

// 9、根据会话获取用户信息
export const reqUser = () => ajax(BASR_URL+'/userinfo')

// 10、用户登出
export const reqLogout = () => ajax(BASR_URL+'/logout')
