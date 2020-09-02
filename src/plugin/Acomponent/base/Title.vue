<template>
  <!-- 标题栏 -->
  <div>
    <!-- 占位 -->
    <div
      :class="hasPosition?'a-title-position':''"
      :style="hasPosition?'height:'+height+'px;':''"
    ></div>

    <div
      class="a-title"
      :style="hasBackgroundColor?'height:'+height+'px;line-height:'+height+'px;':'background: none;height:'+height+'px;line-height:'+height+'px;'"
    >
      <div
        @click="goBack"
        class="icon iconfont iconback"
        style="position: relative; left: 10px;font-size:20px"
      ></div>
      <div style="margin: auto;">{{title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-title",
  props: {
    title: {
      type: String,
      default: ""
    },
    //有没有背景颜色，没有背景演示就是透明
    hasBackgroundColor: {
      type: Boolean,
      default: true
    },
    //有没有占位，默认是有
    hasPosition:{
      type:Boolean,
      default:true
    }
  },
  computed: {
    height() {
      let height = 60;
      if (window.appConfig && window.appConfig.style.titleHeight) {
        height = window.appConfig.style.titleHeight;
      }
      return height;
    }
  },
  mounted() {
    //   console.log(this.hasBackgroundColor)
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      this.$emit("goBack");
    }
  }
};
</script>