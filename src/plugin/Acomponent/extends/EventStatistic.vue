<style scoped>
.rk-buttons-div {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  margin-top: 10px;
  position: relative;
}
.rk-button-div {
  width: 45vw;
}
.rk-button {
  width: 100%;
}
.rk-button-text {
  position: absolute;
  top: 20px;
  color: white;
  font-size: 14px;
  width: calc(40vw - 30px);
  padding: 15px;
}
</style>
<template>
  <!-- 事件统计 -->
  <div class="rk-buttons-div">
    <div class="rk-button-div" @click="eventClick({id:1})">
      <img src="img/rk_btn01.png" class="rk-button" />
      <div class="rk-button-text">
        <div style="font-size:16px;">按区域查看</div>
        <div style="font-size:12px;margin-top: 12px;">根据市区域划分查看统计</div>
      </div>
    </div>
    <div class="rk-button-div" @click="eventClick({id:2})">
      <img src="img/rk_btn02.png" class="rk-button" />
      <div class="rk-button-text">
        <div style="font-size:16px;">按业务查看</div>
        <div style="font-size:12px;margin-top: 12px;">根据业务类型查看统计</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-event-statistic",
  methods: {
    eventClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>