<style>
.a-line-key-list {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  height: 40px;
  padding: 0 10px;
}
  .a-line-key-name{
    color: #757575;
  }
.a-line-key-value{
  color: #000;
}
</style>
<template>
  <div class="a-line-key-list">
    <!-- key value形式的line -->
    <div class="a-line-key-name">{{name}}</div>
    <div class="a-line-key-value">{{value}}</div>
  </div>
</template>
<script>
export default {
  name: "a-line-key-value",
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>