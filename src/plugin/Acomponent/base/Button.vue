<template>
  <!-- 按钮 有圆形和方形两种 -->
  <button @click="btnClick" :class="shape=='round'?'a-round-button':'a-square-button'">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "a-button",
  props: {},
  data() {
    return {
      shape: "square"
    };
  },
  mounted() {
    let self = this;
    let attrs = self.$attrs;
    attrs = Object.assign(attrs, {});
    if (
      attrs instanceof Object &&
      Object.prototype.hasOwnProperty.call(attrs, "round")
    ) {
      //round
      self.shape = "round";
    } else {
      self.shape = "square";
    }
  },
  methods: {
    btnClick(event) {
      event.stopPropagation();
      this.$emit("click");
    }
  }
};
</script>