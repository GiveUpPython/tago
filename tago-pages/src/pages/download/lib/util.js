import axios from 'axios'
import { Toast } from 'vant'
import interfaces from './interfaces'
import { login } from './coordinate.js'

export default {
  request (option) {
    let token = localStorage.state ? JSON.parse(localStorage.state).token : ''
    let method = option.method ? option.method : 'get'
    let putData = {
      url: interfaces.interfaces.domain + interfaces.interfaces[option.interface],
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/prs.lamart.v1+json',
        'Authorization': 'Bearer ' + token
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY2hhZGFvZ291LmNuXC9hcGlcL2F1dGhvcml6YXRpb25zXC9waG9uZXMiLCJpYXQiOjE1NTg2NzQ1OTksImV4cCI6MTU2MTI2NjU5OSwibmJmIjoxNTU4Njc0NTk5LCJqdGkiOiJaMzR5UENLdGZOWWlIdUszIiwic3ViIjo0MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Sja_x4XsQJQAnKxVXZwv9vA-zGTrp6pNkz2cKLp1ypo'
      }
    }
    if (option.interfaceFn) {
      // 如果存在interfaceFn函数，那么putData的url值就是interfaceFn函数的返回值
      putData.url = option.interfaceFn(interfaces.interfaces.domain + interfaces.interfaces[option.interface])
    }
    if (option.typeData === 'json') {
      putData.headers['content-type'] = 'application/json'
    }
    if (method === 'get' || method === 'delete') {
      putData.params = option.data
    } else if (method === 'post') {
      putData.data = option.data
    } else {
      putData.data = option.data
    }
    /**
      * 请求拦截：在请求之前执行 比如loading处理
    * */
    return new Promise((resolve, reject) => {
      axios.interceptors.request.use(function (config) {
        Toast.loading({
          duration: 0, // 展示时长(ms)
          forbidClick: true, // 是否禁止背景点击  true是禁止点击，false是允许点击
          message: '加载中...'
        })
        return config
      })
      /**
        * 添加响应拦截器
      * */
      axios.interceptors.response.use(function (response) {
        return response
      })
      /**
        * 请求完成后执行
      * */
      axios(putData).then(res => {
        Toast.clear()
        resolve({
          status: res.status,
          result: res.data
        })
      }).catch(function (error) {
        // 401 token 失效 重新登陆
        Toast.clear()
        if (error.response.status === 401) {
          // 这里是调用登录失败的接口
          login()
        } else {
          Toast(error.response.data.message)
        }
      })
    })
  },
  upload (option) {
    let file = option.data
    let param = new FormData()
    param.append('file', file)
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/prs.lamart.v1+json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.state).token
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGkuY2hhZGFvZ291LmNuXC9hcGlcL2F1dGhvcml6YXRpb25zXC9waG9uZXMiLCJpYXQiOjE1NTg2NzQ1OTksImV4cCI6MTU2MTI2NjU5OSwibmJmIjoxNTU4Njc0NTk5LCJqdGkiOiJaMzR5UENLdGZOWWlIdUszIiwic3ViIjo0MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Sja_x4XsQJQAnKxVXZwv9vA-zGTrp6pNkz2cKLp1ypo'
      }
    }
    let inter = interfaces.interfaces.domain + interfaces.interfaces[option.interface]
    return new Promise((resolve, reject) => {
      axios.interceptors.request.use(function (config) {
        Toast.loading({
          duration: 0, // 展示时长(ms)
          forbidClick: true, // 是否禁止背景点击  true是禁止点击，false是允许点击
          message: '加载中...'
        })
        return config
      })
      axios.post(inter, param, config).then(res => {
        Toast.clear()
        resolve({
          status: res.status,
          result: res.data
        })
      }).catch(function (error) {
        Toast.clear()
        Toast(error.response.data.message)
      })
    })
  }
}
