<template>
  <div class="mcontent">
    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
      <!-- logo -->
      <!-- fixed-top、style="padding-top:5px;" -->
      <div class="container-fluid" id="logo">
        <a href="#">
          <img src="../images/logo.png" alt="logo" style="width:auto;height:40px;" />
          <img src="../images/qy.png" alt="签瘾" style="width:auto;height:40px;" />
        </a>
      </div>
      <!-- 显示按钮和链接 -->
      <div class="container justify-content-end fixed-top" id="btn">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" style="margin:10px 20px 0 0;">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- justify-content-end -->
        <div class="collapse navbar-collapse sticky-top justify-content-end" id="collapsibleNavbar" style="padding: 0px 0px 0px 10px;">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link navbar-brand" href="">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-brand" href="#product">产品介绍</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-brand" href="#imgrel">TAGO活动</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-brand" href="#about">关于我们</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-brand" href="#send_to_us">联系我们</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <blog />
    <product />
    <activity />
    <about />
    <call />
    <send />
  </div>
</template>

<script>
import blog from "@/components/biglog";
import product from "@/components/product.vue";
import activity from "@/components/activity.vue";
import about from "@/components/aboutus.vue";
import call from "@/components/callus.vue";
import send from "@/components/sendtous.vue";
export default {
  name: "indpage",
  data() {
    return {
      showNav: false,
    }
  },
  components: {
    blog,
    product,
    activity,
    about,
    call,
    send
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar-dark .navbar-nav .nav-link {
  color: white;
}
ul li a {
  font-size: 1.3vw !important;
  margin: 0 5px;
  /* color: black!important; */
}
</style>
