<template>
  <div class="container-fluid" style="background-color:#F7F7F7">
    <div class="text-center" style="margin-top:20px;padding-top:5vw;">
      <p style="font-size: 2vw;font-weight: 400;">签瘾服务</p>
      <p style="font-size: 1vw;color:#777;margin-top:5px;padding-top:0.5vw;">循礼而动，致行无倦</p>
    </div>
    <div class="container d-flex justify-content-center align-items-center" style="height:25vw;margin:10px auto 15px auto;padding:1vw auto 3vw;">
      <div class="text-center">
        <img src="../images/down.png" alt="Android" style="width:18vw;z-index:10000;min-width:120px;" v-show="is1" @mouseleave="noShowAnd">
        <img src="../images/down.png" alt="ios" style="width:18vw;z-index:10000;min-width:120px;" v-show="is2" @mouseleave="noShowAnd">
        <img src="../images/fwh.jpg" alt="服务号二维码" style="width:18vw;z-index:10000;min-width:120px;" v-show="is3" @mouseleave="noShowAnd">
        <img src="../images/dyh.jpg" alt="订阅号二维码" style="width:18vw;z-index:10000;min-width:120px;" v-show="is4" @mouseleave="noShowAnd">
        <p v-show="isAnd" style="margin:1vw 0 1vw 0;padding:5px 0 0 0;font-size: 2vw;font-weight: 400;">{{this.isalt}}</p>
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-outline-warning" @mouseover="isAndShow(1)" v-show="!isAnd">Android 下载</button>
        <button type="button" class="btn btn-outline-warning" @mouseover="isAndShow(2)" v-show="!isAnd" @click.native="isIosShow">IOS 下载</button>
        <button type="button" class="btn btn-outline-warning" @mouseover="isAndShow(3)" v-show="!isAnd">关注服务号</button>
        <button type="button" class="btn btn-outline-warning" @mouseover="isAndShow(4)" v-show="!isAnd">关注订阅号</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isAnd: false,
      is1: false,
      is2: false,
      is3: false,
      is4: false,
      isalt:''
    };
  },
  methods: {
    isAndShow (e) {
      this.isAnd = true
      if(e == 1){
        this.is1 = true
        this.isalt = 'Android APP下载'
      }else if(e == 2){
        this.is2 = true
        this.isalt = 'IOS APP下载'
      }else if(e == 3){
        this.is3 = true
        this.isalt = '关注服务号'
      }else{
        this.is4 = true
        this.isalt = '关注订阅号'
      }
      // console.log(this.isAnd || this.is1)
      // console.log(typeof(e))
    },
    noShowAnd () {
      this.isAnd = false
      this.is1 = false
      this.is2 = false
      this.is3 = false
      this.is4 = false
    }
  }
};
</script>
<style scoped>
#set_img_h {
  /* padding-bottom: 6vw; */
  margin-bottom: 10px;
}
#set_img_h div {
  height: 30vw;
  min-height: 200px;
  padding-top: 5vw;
  margin-top: 5px;
}

#set_img_h img {
  width: 20vw;
  min-width: 120px;
  height: auto;
  margin-bottom: 1.5vw;
}
.w50 {
  width: 50%;
}
button {
  border-radius: 50px;
  background-color: rgba(245, 219, 68, 0.6);
  border: 1px solid #ff9b00;
  color: #434240;
  margin: 5px;
  min-width: 120px;
  /* opacity: 0.5; */
}
</style>