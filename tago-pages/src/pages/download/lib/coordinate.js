import { Toast } from 'vant'
/**
 * js和移动端交互代码接口
 * 区分 android 和 ios 终端
 */
let u = navigator.userAgent
// let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端

/**
 * 分享
 */
export function share (event) {
  // console.log(event)
  let params = JSON.stringify(event)
  if (isiOS) {
    window.webkit.messageHandlers.share.postMessage(params)
  } else {
    window.native.shareForWeb(params)
  }
}

/**
 * 支付
 */
export function payment (event) {
  let params = JSON.stringify(event)
  if (isiOS) {
    window.webkit.messageHandlers.pay.postMessage(params)
  } else {
    window.native.payment(params)
  }
}

/**
 * 扫一扫
 */
export function scanCode () {
  var params = {
    title: '扫码验票',
    callback: 'fromCharCode'
  }
  params = JSON.stringify(params)
  if (isiOS) {
    window.webkit.messageHandlers.scanQRCode.postMessage(params)
  } else {
    window.native.openScan(params)
  }
}

/**
 * 活动报名
 */
export function signUp () {
  //
}

/**
 * 切换为参与者
 */
export function participant () {
  if (isiOS) {
    window.webkit.messageHandlers.switchRole.postMessage(12)
  } else {
    window.native.switchToUser()
  }
}

/**
 * 签主消息
 */
export function masterNews () {
  if (isiOS) {
    window.webkit.messageHandlers.enterMessageCenter.postMessage(12)
  } else {
    window.native.openMessage()
  }
}

/**
 * 注册签主之后调用
 */
export function validation () {
  if (isiOS) {
    window.webkit.messageHandlers.registerSignerFinished.postMessage(12)
  } else {
    window.native.registerSignerSuccess()
  }
}

/**
 * 服务协议/隐私政策返回
 */
export function returned () {
  if (isiOS) {
    window.webkit.messageHandlers.closeWebController.postMessage(12)
  } else {
    window.native.finishCurrrent()
  }
}

/**
 * 登陆
 */
export function login () {
  Toast.fail('登陆失败')
}

/**
 * 转时间戳
 */
export function dateToMs (date) {
  let result = new Date(date.replace(/-/g, '/')).getTime()
  return result
}

/**
 * 地点
 */
export function operating () {
  var params = {
    callback: 'address_format'
  }
  params = JSON.stringify(params)
  if (isiOS) {
    window.webkit.messageHandlers.pickPosition.postMessage(params)
  } else {
    window.native.selectAddress(params)
  }
}

/**
 * 进入活动群聊
 */
export function addChatListener (gid, name) {
  var params = {
    groupid: gid,
    groupname: name
  }
  params = JSON.stringify(params)
  if (isiOS) {
    window.webkit.messageHandlers.enterGroupChat.postMessage(params)
  } else {
    window.native.goToGroupChat(params)
  }
}

/**
 * 上传图片
 */
export function pictures (number, screenshots, w, h) {
  var params = {
    count: number,
    crop: screenshots,
    cropRate: {
      w: w,
      h: h
    },
    callback: 'directories'
  }
  params = JSON.stringify(params)
  if (isiOS) {
    window.webkit.messageHandlers.pickImage.postMessage(params)
  } else {
    window.native.openAlbum(params)
  }
}

/**
 * 保存二维码
 */
export function qrencode (url) {
  console.log(url)
  var params = JSON.stringify(url)
  if (isiOS) {
    window.webkit.messageHandlers.saveImage.postMessage(params)
  } else {
    window.native.saveImage(params)
  }
}

/**
 * 参数
 */
export function getUrlKey (url, name) {
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
        url
      ) || [''])[1].replace(/\+/g, '%20')
    ) || null
  )
}

/**
 * Tago时光
 */
export function timespec (type, id) {
  var params = {
    type: type,
    id: id
  }
  params = JSON.stringify(params)
  if (isiOS) {
    window.webkit.messageHandlers.enterPlatformElementDetail.postMessage(params)
  } else {
    window.native.goToRecommendsDetail(params)
  }
}
