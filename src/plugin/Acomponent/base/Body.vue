<template>
  <div class="a-body" :style="'height: calc(100vh - '+height+'px);'">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "a-body",
  props: {
    titleHeight: {
      type: Number,
      default: 0
    },
    footerHeight: {
      type: Number,
      default: 0
    }
  },
  computed: {
    height() {
      let self = this;
      // console.log("height", self.$attrs);
      let attrs = self.$attrs;
      attrs = Object.assign(attrs, {});
      //顶部高度计算
      let topHeight = 0;
      if (self.titleHeight > 0) {
        //如果手动
        topHeight = self.titleHeight;
        //这里防止eslint问题报错 Do not access Object.prototype method 'hasOwnProperty' from target object  no-prototype-builtins
        //attrs.hasOwnProperty("notitle") 方法替换为Object.prototype.hasOwnProperty.call(foo, "bar")
      } else if (
        attrs instanceof Object &&
        Object.prototype.hasOwnProperty.call(attrs, "notitle")
      ) {
        //标签上有notitle，则设置为0
        topHeight = 0;
      } else if (window.appConfig && window.appConfig.style.titleHeight) {
        //如果都没有，默认走全局
        topHeight = parseInt(window.appConfig.style.titleHeight);
      }
      //底部高度计算
      let bottomHeight = 0;
      if (self.footerHeight > 0) {
        //如果手动设置了footer高度
        bottomHeight = self.bottomHeight;
      } else if (
        attrs instanceof Object &&
        Object.prototype.hasOwnProperty.call(attrs, "nofooter")
      ) {
        //标签上有nofooter，则设置为0
        bottomHeight = 0;
      } else if (window.appConfig && window.appConfig.style.footerHeight) {
        //如果都没有，默认走全局
        bottomHeight = parseInt(window.appConfig.style.footerHeight);
      }
      return topHeight + bottomHeight;
    }
  }
};
</script>