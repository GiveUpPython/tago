<template>
  <div class="app-container">
    <div v-wechat-title="$route.meta.title"></div>
    <div class="div-container">
      <img width=100% src="../images/openbrower.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ndynamic: {
        message: '',
        photo_list: [],
        locations: {
          address: ''
        },
        tagos: []
      },
      arraystruct: [],
      picture_format: '',
      software: 0,
      CRM_Contact_Form_Task_Label: false,
      page: 1,
      loading: false,
      finished: false,
      url: 'https://sj.qq.com/myapp/detail.htm?apkName=com.xunli.qianyin'
    }
  },
  mounted () {
    let ua = navigator.userAgent.toLowerCase()
    let isWeixin = ua.indexOf('micromessenger') !== -1
    let isAndroid = ua.indexOf('android') !== -1
    let isIos = (ua.indexOf('iphone') !== -1) || (ua.indexOf('ipad') !== -1)
    let u = navigator.userAgent
    // Android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    // Ios终端
    // let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    let type = 2 // android
    if (isiOS) {
      type = 1 // ios
    }
    // alert(u)
    this.util.request({
      method: 'GET',
      interface: 'getapps',
      interfaceFn: function (url) {
        return url + 'type=' + type + '&version=1.0'
      }
    }).then(res => {
      console.log(res.result.data)
      if (isWeixin) {
        window.location.href = 'https://sj.qq.com/myapp/detail.htm?apkName=com.xunli.qianyin'
      } else {
        window.location.href = res.result.data.download_url
      }
      //   alert(res.result.data.download_url)
      //   console.log(res.result.data.download_url)
    })
    // function isWeixinBrowser () {
    //   return /micromessenger/.test(ua)
    // }
  }
}
</script>
<style scoped>
.div-container {
  height: 1000px;
  width: 100%;
  background: #333333;
}
</style>
