<style>
.a-info-div {
  box-shadow: 0 0 15px 0 rgba(120,181,255,0.18);
  margin:10px auto 0;
  width: 90%;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
}
.a-info-title {
  color: #2b6caf;
  font-size: 14px;
}
.a-risk-info-line {
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  border-bottom:1px solid #e1e1e1;
}
.a-info-detail {
  font-size: 12px;
  margin-top: 25px;
  /* display: flex; */
  color: #25282c;
}

.a-info-detail-title {
  color: #a5a5a5;
}
.a-risk-info-arrow {
  position: relative;
  right: 10px;
  bottom: 50px;
  font-size: 20px;
  /* vertical-align: middle; */
  float: right;
  font-weight: bold;
  color: #a09d9d;
}
</style>
<template>
  <!-- 信息卡片 "风控"用-->
  <div class="a-info-div">
    <div class="a-info-title">
      <div class="a-risk-info-line"><span class="fl">{{info.applyName}}</span><span class="fr">{{info.status}}</span></div>
    </div>
    <div class="a-info-detail">
      <div>
        <div class="a-info-line">
          <div class="a-info-detail-title">预警时间：</div>
          <div>{{info.warningTime}}</div>
        </div>
        <div class="a-info-line">
          <div class="a-info-detail-title">核查时间：</div>
          <div>{{info.checkTime}}</div>
        </div>
      </div>
      <div class="icon iconfont iconfront-copy a-risk-info-arrow" @click="infoClick"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-risk-info",
  props: {
    info: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    infoClick() {
      this.$emit("infoClick");
    }
  }
};
</script>