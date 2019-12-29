<template>
  <div class="card" style="margin-top:35px;width:100%;">
    <!-- class="card-img-top" -->
    <img src="../images/bigimg.png" alt="背景图片" style="width:100%;height:auto;" />
    <!-- card-img-overlay -->
    <div class="card-img-overlay text-center" id="card" style="padding-top:20vw;">
      <p id="toga" style="font-size:2.5vw;color:white;">Welcome To TAGO's Home</p>
      <p style="font-size:6vw;color:#fff;font-weight:600;margin-top:15px;">IT'S NICE TO MEET YOU</p>
      <a href="#send_to_us" class="btn btn-lg" v-show="false">TELL ME MORE</a>
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
<style>
#card > .btn {
  color: white;
  background-color: #fed136;
  border-color: #fed136;
}
</style>