<template>
  <div class="container-fluid">
    <div style="height:5vw;min-height:20px;" class="w-100"></div>
    <div id="send_to_us" class="w-100">
      <div class="text-center" style="margin-top:20px;padding-top:8vw;">
        <p style="font-size: 2vw;font-weight: 400;color:#fff">联系我们</p>
        <p style="font-size: 1vw;color:#777;margin-top:5px;padding-top:0.5vw;">签瘾会在24小时之内给您答复</p>
      </div>
      <form @submit.prevent="sendtous" style="margin-top:10px;padding-top:6vw;" class="d-flex flex-column justify-content-center">
        <div class="container d-flex align-items-center" id="set_inp_h">
          <div class="w-50 d-flex flex-column justify-content-center">
            <div class="form-group">
              <input type="text" id="name" class="form-control" v-model="subData.name" placeholder="YOUR NAME *" />
            </div>
            <div class="form-group">
              <input type="email" id="email" class="form-control" v-model="subData.email" placeholder="YOUR E-MAIL *" />
            </div>
            <div class="form-group">
              <input type="text" id="subject" class="form-control" v-model="subData.subject" placeholder="SUBJECT *" />
            </div>
          </div>
          <div class="w-50 d-flex align-items-center justify-content-center">
            <textarea class="form-control" id="textarea" rows="6" v-model="subData.message" placeholder="YOUR MESSAGE *"></textarea>
          </div>
        </div>
        <div class="w-100 d-flex justify-content-center" style="margin:15px auto; padding:2vw 0;">
          <button type="submit" class="btn btn-lg" style="background-color:#fed136;color:white;">SEND MESSAGE</button>
        </div>
        <div style="width:100%;" class="text-center" v-if="this.showert" @click="unshow">
          <p style="font-szie:1.5vw;color:#fff;">发送成功，请点击关闭！</p>
        </div>
        <p style="font-szie:1.5vw;color:#fff;" v-show="this.isnull">{{err}}</p>
      </form>
    </div>
    <div style="height:5vw;min-height:40px;padding:1vw 0;" class="w-100">
      <div class="container">
        <p style="font-size:12px;line-height:20px;font-family: tahoma,arial,sans-serif;">通讯地址：北京市海淀区增光路44号院5号楼底商 | 联系电话：15611117088</p>
        <p style="font-size:12px;line-height:20px;font-family: tahoma,arial,sans-serif;"><span style="color:#999;font-size:12px;">Copyright 2019 循礼咨询服务有限公司. 保留所有权利.</span>| 京ICP备19032928号</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      subData: {
        // "name": "",
        // "email": "",
        // "subject": "",
        // "message": ""
      },
      showert: false,
      isnull: false,
      err: '请填写真实有效的数据。'
    };
  },
  methods: {
    sendtous () {
      let exp = undefined;
      if (this.subData.name == exp) {
        this.err = '请填写您的姓名。'
        this.isnull = true;
        return;
      } else {
        let reg = /^[\u4E00-\u9FA5\·]+$/;
        if (!reg.test(this.subData.name)) {
          this.err = '请填写正确姓名（仅限汉字）'
          this.isnull = true;
          return;
        }
      }
      if (this.subData.email == exp) {
        this.isnull = true;
        return;
      } else {
        let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(this.subData.email)) {
          this.err = '请填写正确的邮箱，方便我们联系您。'
          this.isnull = true;
          return;
        }
      }
      if (this.subData.subject == exp) {
        this.err = '请填写您的问题。'
        this.isnull = true;
        return;
      }
      if (this.subData.message == exp) {
        this.err = '请填写您的建议。'
        this.isnull = true;
        return;
      }
      if (this.subData.name == '' || this.subData.email == '' || this.subData.subject == '' || this.subData.message == '') {
        this.err = '请填写真实有效的数据。'
        this.isnull = true;
      } else {
        let data = {
          "name": this.subData.name,
          "detail": this.subData.message,
          "subject": this.subData.subject,
          "contact_way": this.subData.email,
          "channel": 2
        }
        // console.log(data)
        this.$axios({
          method: "post",
          url: "/api/feedback",
          data: data,
          headers: { "Content-Type": "application/json" }
        }).then(res => {
          // console.log(res)
          this.isnull = false;
          this.showert = true;
        });
        // this.isnull = false;
        // this.showert = true;
      }
    },
    unshow () {
      this.showert = false;
    }
  }
};
</script>
<style scoped>
#send_to_us {
  height: 47vw;
  min-height: 400px;
  background: url("../images/map.png") no-repeat center top;
  background-size: 100% 100%;
}
#set_inp_h {
  height: 12vw;

/* padding-right: 20px; */
  min-height: 150px;
}
#set_inp_h > div {
  height: 12vw;
  padding-right: 20px;
  /* min-height: 200px; */
}
#set_inp_h > div > div {
  width: 100%;
  margin: .5vw;
}
.container > p:nth-child(2) {
  border-top: 1px solid gray;
}
</style>