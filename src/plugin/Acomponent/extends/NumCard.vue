<style scoped>
.a-num-card-whole {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: -1px 1px 4px #ccc;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.a-num-card-name {
  background-color: #548fda;
  color: white;
  line-height: 40px;
  font-size: 14px;
  border-radius: 5px 5px 0 0;
  padding-left: 15px;
}
.a-num-card-body {
  display: flex;
  justify-content: space-around;
}
</style>
<template>
  <!-- 一行三列用于展示数据的卡片 -->
  <div class="a-num-card-whole">
    <div class="a-num-card-name" @click="titleClick">{{title}}</div>
    <div
      v-show="detail"
      style="color:#7da3d3;
            font-size:12px;    
            margin: 15px 15px 10px 15px;
            line-height: 18px;"
    >{{detail}}</div>
    <div class="a-num-card-body">
      <div v-for="item in items" :key="item.name" style="margin: 15px 5px;">
        <div style="display:flex;">
          <div>{{item.number}}</div>
          <div
            v-show="item.arrow=='up'&&showArrow"
            class="icon iconfont iconup-arrow a-arrow-model-arrow"
            style="color:#71e8c8;"
          ></div>
          <div
            v-show="(item.arrow=='right'||item.arrow=='flat')&&showArrow"
            class="icon iconfont iconright-arrow a-arrow-model-arrow"
            style="color:#5fb4f6;"
          ></div>
          <div
            v-show="item.arrow=='down'&&showArrow"
            class="icon iconfont icondown-arrow a-arrow-model-arrow"
            style="color:#f65f7b;"
          ></div>
        </div>
        <div style="font-size:12px;margin-top: 8px;color:#868686;">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-num-card",
  props: {
    title: {
      type: String,
      default: ""
    },
    detail: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: function() {
        //  [{
        //     arrow:"",//right,up,down
        //     name:"",//名称
        //     number:""//数字
        // }]
        return [];
      }
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    titleClick() {
      this.$emit("titleClick");
    }
  }
};
</script>