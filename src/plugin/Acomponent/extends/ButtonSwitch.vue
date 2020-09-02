<style scoped>
.a-button-switch {
  border-radius: 5px;
  width: 40vw;
  height: 60px;
  text-align: center;
  padding-top: 10px;
  background-color: white;
  box-shadow: 2px 5px 11px #ccc;
}
.a-button-switch-selected {
  background-color: #017eff;
  color: white;
  box-shadow: none;
}

.a-button-angle {
  background: #017eff;
  width: 17px;
  height: 17px;
  transform: rotate(45deg);
  position: relative;
  bottom: -4px;
  left: 20vw;
}
</style>
<template>
  <!-- 两个按钮相互切换 -->
  <div style="display:flex;justify-content: space-around;margin-bottom: 20px;">
    <div
      v-for="button in buttons"
      :key="button.id"
      @click="btnClick(button)"
      :class="selected==button.id?'a-button-switch a-button-switch-selected':'a-button-switch'"
    >
      <div>{{button.name}}</div>
      <div>{{button.secondName}}</div>
      <div v-show="selected==button.id" class="a-button-angle"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-button-switch",
  props: {
    initBtn: {
      type: String,
      default: ""
    }
  },
  mounted() {
    let self = this;
    self.selected = self.initBtn || 1;
  },
  data() {
    return {
      selected: 1,
      buttons: [
        {
          id: 1,
          name: "月度简要数据",
          secondName: "（本年度累计）"
        },
        {
          id: 2,
          name: "年度事业发展",
          secondName: "计划完成进展"
        }
      ]
    };
  },
  methods: {
    btnClick(button) {
      let self = this;
      self.selected = button.id;
      self.$emit("btnClick", button);
    }
  }
};
</script>