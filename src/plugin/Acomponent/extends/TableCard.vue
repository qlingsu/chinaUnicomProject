<style scoped>
.a-table-card-whole {
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 5px 5px 5px #e0f1ff, 5px -5px 5px #e0f1ff, -5px 5px 5px #e0f1ff,
    -5px -5px 5px #e0f1ff;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.a-table-card-name {
  background-color: #548fda;
  color: white;
  line-height: 40px;
  font-size: 14px;
  border-radius: 5px 5px 0 0;
}
.a-table-card-row {
  line-height: 40px;
  padding-left: 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.color-line {
  background-color: #eaf3ff;
  /* background-color: blue; */
}
</style>
<template>
  <!-- 带有table的card组件 -->
  <div class="a-table-card-whole">
    <!--标题栏-->
    <div class="a-table-card-name" @click="titleClick">
      <!--如果没有field字段-->
      <div v-if="columns[0] && !columns[0].field" class="a-table-card-row">
        <div v-for="columnKey in columns" :key="columnKey">{{columnKey}}</div>
      </div>
      <!--如果有field字段-->
      <div v-if="columns[0] && columns[0].field" class="a-table-card-row">
        <div v-for="columnKey in columns" :key="columnKey.field" :style="'width:'+columnKey.width">
          <!--显不显示该列名-->
          <div v-show="!(columnKey.show==false)">{{columnKey.name||columnKey.field}}</div>
        </div>
      </div>
    </div>
    <!--内容栏-->
    <div>
      <div v-for="row in rows" :key="row.index" @click="rowClick(row)">
        <!--如果没有field字段-->
        <div
          v-if="columns[0] && !columns[0].field"
          :class="row.index%2==0?'a-table-card-row color-line':'a-table-card-row'"
        >
          <div v-for="columnKey in columns" :key="columnKey">{{row[columnKey]}}</div>
        </div>
        <!--如果有field字段-->
        <div
          v-if="columns[0] && columns[0].field"
          :class="row.index%2==0?'a-table-card-row color-line':'a-table-card-row'"
        >
          <div
            v-for="columnKey in columns"
            :key="columnKey.field"
            :style="'width:'+columnKey.width"
          >
            <!--是箭头列-->
            <div v-show="columnKey.isArrow">
              <!-- {{row[columnKey.field]}} -->
              <div
                v-show="row[columnKey.field]=='up'"
                class="icon iconfont iconup-arrow a-arrow-model-arrow"
                style="color:#71e8c8;"
              ></div>
              <div
                v-show="row[columnKey.field]=='right'||row[columnKey.field]=='flat'"
                class="icon iconfont iconright-arrow a-arrow-model-arrow"
                style="color:#5fb4f6;"
              ></div>
              <div
                v-show="row[columnKey.field]=='down'"
                class="icon iconfont icondown-arrow a-arrow-model-arrow"
                style="color:#f65f7b;"
              ></div>
            </div>
            <!--不是箭头列-->
            <div v-show="!columnKey.isArrow">{{row[columnKey.field]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-table-card",
  props: {
    name: {
      type: String,
      default: ""
    },
    rows: {
      type: Array,
      default: function() {
        //[{index:aaa,key1:123,key2:234}]
        return [];
      }
    },
    columns: {
      type: Array,
      default: function() {
        //[key2,key1]
        return [];
      }
    }
  },
  methods: {
    titleClick() {
      this.$emit("titleClick");
    },
    rowClick(row) {
      this.$emit("rowClick", row);
    }
  }
};
</script>