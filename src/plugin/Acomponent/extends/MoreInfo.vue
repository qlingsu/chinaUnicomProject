<style>
.a-more-info-title {
  font-weight: bold;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  background-color: #fff;
}
.a-more-info-line {
  /* display: flex;
  justify-content: space-between; */
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #e1e1e1;
}
.a-more-info-btn {
  line-height: 50px;
  height: 50px;
  text-align: center;
  background-color: #fff;
  font-size: 14px;
  color: #737b84;
}
</style>
<template>
  <!-- 更多信息 详细信息 -->
  <div>
<!--    <div class="a-more-info-title">{{title}}</div>-->
    <div>
      <div class="a-more-info-line">
        <a-line-key-value
          :name="line.key"
          :value="line.value"
          v-for="line in lines"
          :key="line.key"
        ></a-line-key-value>
      </div>
      <div class="a-more-info-btn">更多信息</div>
    </div>
  </div>
</template>
<script>
import LineKeyValue from "./LineKeyValue";
export default {
  name: "a-more-info",
  components: {
    "a-line-key-value": LineKeyValue
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    lines: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>