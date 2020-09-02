<template>
  <div class="a-select-multi-line">
    <div style="display:flex;" @click="showSelect">
      <div>{{opinionSelected.name}}</div>
      <div class="icon iconfont icondown"></div>
    </div>
    <div class="a-select-option-multi-line" v-if="show && options.length>0">
      <div
        :class="item.name==opinionSelected.name?'a-select-option-line a-select-option-selected':'a-select-option-line'"
        :style="'width:'+100/numInLine+'%;'"
        v-for="item in options"
        :key="item.name"
        @click="changeHandle(item)"
      >{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
var Event = new Vue(); //定义一个空的Vue实例
export default {
  name: "a-select-multi-line",
  data() {
    return {
      show: false,
      opinionSelected: {}
    };
  },
  watch: {
    options: {
      handler(newArr) {
        let self = this;
        if (newArr.length > 0 && !self.initSelected) {
          //如果没有给默认值，就选第一个
          self.opinionSelected = newArr[0];
        } else if (self.initSelected) {
          //如果给了默认值，就选默认值
          self.opinionSelected = newArr.find(element => {
            return element.value == self.initSelected;
          }) || {};
        }
      },
      immediate: true
    }
  },
  mounted() {
    let self = this;
    Event.$on("a-select-multi-line-closeAll", self.hideSelect); //监听到某个组件要求关闭的事件
  },
  props: {
    initSelected: {
      type: String,
      default: ""
    },
    numInLine: {
      //一行几个
      type: Number,
      default: 1
    },
    options: {
      type: Array,
      default: function() {
        //{name:"" value:""}
        return [];
      }
    }
  },
  methods: {
    changeHandle(item) {
      let self = this;
      self.opinionSelected = item;
      self.show = false;
      self.$emit("select", item);
    },
    hideSelect() {
      let self = this;
      self.show = false;
    },
    showSelect() {
      let self = this;
      let showStore = self.show;
      Event.$emit("a-select-multi-line-closeAll"); //通知其他各组件关闭
      if (showStore) {
        //之前是已经打开的
        self.show = false;
      } else {
        self.show = true;
      }
    }
  }
};
</script>