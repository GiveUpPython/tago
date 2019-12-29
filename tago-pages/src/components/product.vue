<template>
  <div class="container-fluid" style="padding-top:3vw;position:relative;margin-top:5px;" id="product">
    <!-- 左边logo -->
    <div class="col-10" id="Applogo">
      <img src="../images/logo1.png" alt="logo" class="float-left" style="width:3vw;min-width:20px;height:auto;margin-right:0.5vw;" />
      <p class="fiexd-bottom">签瘾APP</p>
    </div>
    <!-- title -->
    <div class="text-center" id="prod">
      <p>产品介绍</p>
    </div>
    <!-- subtitle-副标题 -->
    <div class="text-center" id="labelcon">
      <p style="font-size:2.1vw;color:#777;margin:3px 0;">签瘾app是一款以标签为主题的O2O生活娱乐任务平台</p>
    </div>
    <div class="container">
      <div class="row" style="padding:2vw 0;margin-top:10px;">
        <div class="text-center wsan">
          <img src="../images/appl.jpg" alt="app前图" style="width:15vw;height:auto;min-width:100px" />
        </div>
        <div class="wsan" id="vertical">
          <p>
            <br />如果您热爱参加线下活动;
            <br />如果您想来寻找更高力度的优惠;
            <br />如果您是想进行更真实的社交;
            <br />如果您只是想来看看现在的潮流;
            <br />更多玩法期待着您的发现...
          </p>
          <br />
        </div>
        <div class="wsan text-center">
          <img src="../images/appr.jpg" alt="app后图" style="width:15vw;height:auto;min-width:100px" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
#prod p {
  font-size: 2vw;
  font-weight: 400;
}
#Applogo {
  position: absolute;
  top: .8vw;
  left: 2vw;
}
#Applogo p {
  margin-top: .8vw;
  color: black;
  font-size: 1.5vw;
  font-weight: 400;
}

#vertical p {
  margin: 0 auto;
  color: #777;
  font-size: 1.5vw;
  letter-spacing: .15vw;
  writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
.wsan {
  width: 33.3%;
}
</style>