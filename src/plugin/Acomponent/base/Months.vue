<template>
  <!-- 前后换月份的组件 -->
  <div
    style="display: flex;
            font-size: 20px;
            line-height: 20px;
            height: 20px;
            justify-content: center;"
  >
    <div
      class="iconfont iconzuojiantou"
      style="margin-right: 10px;touch-action: pan-y;"
      @click="getPre"
    ></div>
    <div>{{currentMonthText}}</div>
    <div
      class="iconfont iconyoujiantou"
      style="margin-left: 10px;touch-action: pan-y;"
      @click="getNext"
    ></div>
  </div>
</template>
<script>
import { getPreMonths, getNextMonths } from "../utils/monthUtil";
export default {
  name: "a-months",
  computed: {
    currentMonthText() {
      let self = this;
      return (
        self.currentMonth.slice(0, 4) +
        "年" +
        self.currentMonth.slice(4, 6) +
        "月"
      );
    }
  },
  data() {
    return {
      currentMonth: ""
    };
  },
  mounted() {
    let self = this;
    self.currentMonth = getPreMonths(1)[0];
    self.$emit("initMonth", self.currentMonth); //初始化数据
  },
  methods: {
    getPre() {
      let self = this;
      self.currentMonth = getPreMonths(2, self.currentMonth)[0];
      self.$emit("getPre", self.currentMonth);
    },
    getNext() {
      let self = this;
      self.currentMonth = getNextMonths(2, self.currentMonth)[0];
      self.$emit("getNext", self.currentMonth);
    }
  }
};
</script>