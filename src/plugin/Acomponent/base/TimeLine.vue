<style>
.a-time-line-node {
  position: relative;
  width: 140px;
  font-size: 14px;
  overflow: hidden;
}
.a-time-line-item {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: yellow;
  line-height: 40px;
  text-align: center;
}
.a-time-line-line {
  width: 100px;
  height: 0px;
  border: 1px solid;
  position: absolute;
  top: 50%;
  left: 40px;
}
</style>
<template>
  <div style="display:flex;">
    <div v-for="(item,index) in items" :key="index" class="a-time-line-node">
      <a-svg-icon :iconClass="item.icon" style="position: absolute;
    height: 40px;
    left: 0;"></a-svg-icon>
      <div class="a-time-line-item">{{item.name}}</div>
      <div class="a-time-line-line" v-if="index<items.length-1"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-time-line",
  props: {
    items: {
      type: Array,
      default: function() {
        //{name}
        return [];
      }
    }
  }
};
</script>