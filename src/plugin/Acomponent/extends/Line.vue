<style scoped>
.a-line {
  display: table;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgba(120,181,255,0.18);
  min-height: 50px;
  line-height: 25px;
  margin:10px auto 0;
}
.a-line-name {
  display: table-cell;
  max-width: 60%;
  width: 60%;
  padding: 5px 10px;
  vertical-align: middle;
}
.a-line-value {
  display: table-cell;
  max-width: 20%;
  width: 20%;
  padding: 5px 10px;
  color: #2c99ff;
  vertical-align: middle;
  text-align: right;
}
.a-line-arrow{
  padding: 5px 10px;
    line-height: 25px;
    height: 25px;
    display: table-cell;
    vertical-align: middle;
    width: 10%;
    max-width: 10%;;
}
</style>
<template>
  <!-- 不带logo的行 -->
  <div class="a-line" @click="lineClick">
    <div class="a-line-name">{{name}}</div>
    <div class="a-line-value">{{number}}</div>
    <div class="icon iconfont iconfront-copy a-line-arrow"></div>
  </div>
</template>
<script>
export default {
  name: "a-line",
  props: {
    name: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: 0
    }
  },
  methods: {
    lineClick() {
      let self = this;
      self.$emit("lineClick");
    }
  }
};
</script>