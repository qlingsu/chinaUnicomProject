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
.a-info-line {
  display: flex;
  margin-bottom: 10px;
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
.a-info-arrow {
  position: relative;
  right: 10px;
  bottom: 65px;
  font-size: 20px;
  /* vertical-align: middle; */
  float: right;
  font-weight: bold;
  color: #a09d9d;
}
</style>
<template>
  <!-- 信息卡片 目前看是"效能"和"风控"用-->
  <div class="a-info-div">
    <div class="a-info-title">
      <div class="a-info-line">申办主体：{{info.company}}</div>
    </div>
    <div class="a-info-detail">
      <div>
        <div class="a-info-line">
          <div class="a-info-detail-title">申办时间：</div>
          <div>{{info.time}}</div>
        </div>
        <div class="a-info-line">
          <div class="a-info-detail-title">事项状态：</div>
          <div>{{info.status}}</div>
        </div>
        <div class="a-info-line">
          <div class="a-info-detail-title">经办科室：</div>
          <div>{{info.office}}</div>
        </div>
      </div>
      <div class="icon iconfont iconfront-copy a-info-arrow" @click="infoClick"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-info",
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