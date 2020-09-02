<template>
  <div style="width:100%">
    <div>{{label}}</div>
    <div style="display: flex;align-items: center;">
      <div :style="'width:'+width+';'" class="a-bar"></div>
      <div>{{number}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-bar",
  props: {
    label: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: 0
    },
    width: {
      type: String,
      default: ""
    }
  }
};
</script>