<template>
<!--"我的" 悬浮按钮-->
  <div
    class="a-mine icon iconfont iconmine"
    :style="'left:'+left+'px;'+
            'top:'+top+'px;'+
            'width:'+width+'px;'+
            'height:'+height+'px;'+
            'line-height:'+height+'px;'+
            'color:'+color+';'+
            (backgroundColor?'background-color:'+backgroundColor:'')"
    @click="gotoMine"
    @mousedown="touchstart"
    @mousemove="touchmove"
    @mouseup="touchend"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
  ></div>
</template>
<script>
import { isPC } from "../utils/clientUtil";
export default {
  name: "a-mine",
  data() {
    return {
      isMoving: false,
      toMove: false, //是移动的动作，而不是click的动作
      left: 15,
      top: 15,
      width: 50,
      height: 50,
      screenHeight: 0,
      screenWidth: 0
    };
  },
  props: {
    draggable: {
      //是否可拖拽
      type: Boolean,
      default: true
    },
    color: {
      //图形颜色
      type: String,
      default: "#207fe5"
    },
    backgroundColor: {
      type: String,
      default: "#ffff"
    }
  },
  created() {
    let self = this;
    if (isPC()) {
      self.screenHeight = document.body.clientHeight;
      self.screenWidth = document.body.clientWidth;
      self.left = self.screenWidth - self.width - 15; //初始值
    } else {
      self.screenHeight = window.screen.height;
      self.screenWidth = window.screen.width;
      self.left = self.screenWidth - self.width - 15; //初始值
    }
  },
  methods: {
    gotoMine() {
      let self = this;
      if (!self.toMove) {
        self.$emit("click");
      }
    },
    touchstart() {
      let self = this;
      self.isMoving = true;
      self.toMove = false;
    },
    touchmove(e) {
      let self = this;
      let event = e || window.event;
      if (self.isMoving) {
        if (isPC() && self.draggable) {
          let x = event.clientX;
          let y = event.clientY;
          self.left = x - self.width / 2;
          self.top = y - self.height / 2;
          self.toMove = true;
        } else if (self.draggable) {
          let x = event.changedTouches[0].pageX;
          let y = event.changedTouches[0].pageY;
          self.left = x - self.width / 2;
          self.top = y - self.height / 2;
        }
      }
    },
    touchend() {
      let self = this;
      self.isMoving = false;
    },
    mouseDownHandler() {
      let self = this;
      self.isMoving = true;
    },
    mouseUpHandleer() {
      let self = this;
      self.isMoving = false;
    }
  }
};
</script>