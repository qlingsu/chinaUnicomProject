<style scoped>
.a-num-card-whole-with-button {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: -1px 1px 4px #ccc;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.a-num-card-name-with-button {
  background-color: #548fda;
  color: white;
  line-height: 40px;
  font-size: 14px;
  border-radius: 5px 5px 0 0;
  padding-left: 15px;
  display: flex;
}
.a-num-card-body-with-button {
  display: flex;
  justify-content: space-around;
  width: calc(100% - 25px);
  float: left;
}
</style>
<template>
  <!-- 一行三列用于展示数据的卡片,带叹号按钮那种 -->
  <div class="a-num-card-whole-with-button">
    <div class="a-num-card-name-with-button">
      <div>{{title}}</div>
      <div class="icon iconfont icontanhao" style="margin-left: 10px;" @click.stop="iconClick"></div>
    </div>

    <div v-for="(item,index) in items" :key="index" style="">
      <div style="margin: 15px 5px;    overflow: hidden;">
        <div class="a-num-card-body-with-button">
          <div style="width:65%;">{{item.TARGET}}</div>
          <div style="width:20%;">{{item.TARGETPLAN}}</div>
          <div style="width:15%;">{{item.TARGETVALUE}}</div>
        </div>
        <div class="icon iconfont iconfront-copy" style="width:20px;float:right;"  @click="rowClick(item)"></div>
      </div>

      <div
        v-show="item.TARGETNOTES&&showDetail"
        style="color:#7da3d3;
            font-size:12px;    
            margin: 15px 15px 10px 15px;
            line-height: 18px;"
      >{{item.TARGETNOTES}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-num-card-with-button",
  data() {
    return {
      showDetail: false
    };
  },
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
    rowClick(item) {
      this.$emit("rowClick",item);
    },
    iconClick() {
      let self = this;
      self.showDetail = !self.showDetail;
    }
  }
};
</script>