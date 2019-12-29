<template>
  <div class="container-fluid" style="background-color:#f7f7f7;">
    <div class="col-10" style="padding-top:1vw;margin-top:4px;" id="imgrel">
      <img src="../images/mlogo.png" alt="认证" style="width:4vw;height:auto;min-width:23px;margin-left:2vw;" />
    </div>
    <!-- title -->
    <div class="text-center" id="prod">
      <p style="font-size: 2vw;font-weight: 400;">TAGO活动</p>
    </div>
    <!-- subtitle-副标题 -->
    <div class="text-center" id="labelcon">
      <p style="font-size:1vw;color:#777;margin:5px 0;">签瘾致力于打造线下娱乐活动IP，目前已经在北京地区成功举办10场大型线下活动</p>
    </div>
    <div class="container-fluid media" style="padding:1.5vw 0;margin-top:10px;">
      <div style="width:30%;margin-left:0.5vw;" class="text-center align-self-center">
        <img src="../images/lrs.png" alt="海报" style="margin-left:0vw;width:24vw;height:auto;" />
      </div>
      <div style="width:65%;">
        <!-- <div class="text-center" style="padding-bottom: 4vw;margin-bottom: 4px;">
          <p style="font-size:2vw;font-weight:400;" id="act_title">京城急报</p>
          <p id="act_content" class="pset">各方狼族势力现已囤师城外，并在城中四处招兵买马，</p>
          <p id="act_content1" class="pset">并扬言悬赏能攻下神民两族的将受财宝无数，封"京城狼王"。</p>
          <p id="act_content2" class="pset">现如今已经是兵临神下了！</p>
          <p id="act_content3" class="pset">"签瘾"将在京城中与优质狼人杀俱乐部，</p>
          <p id="act_content4" class="pset">强强联手共同举办以俱乐部为战队制的狼人杀大赛《兵临神下》。</p>
          <p id="act_content5" class="pset">共同推广宣传狼人杀游戏，</p>
          <p id="act_content6" class="pset">以及自身的品牌IP，让更多的爱好者参与到其中。</p>
        </div> -->
        <div class="text-center" style="padding:4vw 0;margin-bottom:10px;">
          <img src="../images/vilv1.png" alt="弧形文字" style="width:47vw;height:auto;">
        </div>
        <div class="text-center col-*-12">
          <img src="../images/hb.png" alt="活动详细" style="width:41vw;height:auto;" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import setfont from "../api/jquery.arctext";
export default {
  data() {
    return {};
  },
  methods: {
    tiltfont() {
      $("#act_content").arctext({
        radius: 1000
      });
      $("#act_content1").arctext({
        radius: 1000
      });
      $("#act_content2").arctext({
        radius: 1000
      });
      $("#act_content3").arctext({
        radius: 1000
      });
      $("#act_content4").arctext({
        radius: 1000
      });
      $("#act_content5").arctext({
        radius: 1000
      });
      $("#act_content6").arctext({
        radius: 1000
      });
    }
  },
  mounted() {
    window.setfont = this.setfont;
    // this.tiltfont();
  }
};
</script>
<style scoped>
.pset {
  color: #777;
  font-size: 1vw;
  /* letter-spacing:5px; */
  /* line-height: 2vw; */
  /* transform: scale(1.5); */
}
</style>