<template>
  <!-- tabs标签页 -->

  <div class="a-tab">
    <div  class="tab_li" v-for="tab in tabs" :key="tab.id" @click="tabClick(tab)">
      <div :style="selected == tab.id?'color:#5ba5f4;':''">{{tab.name}}</div>
      <div :class="selected == tab.id?'a-tab-selected':''"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-tab",
  props: {
    tabs: {
      type: Array,
      default: function() {
        // {index:"",name:"",id:""}
        return [];
      }
    }
  },
  data() {
    return {
      selected: ""
    };
  },
  watch: {
    //   selected(newVal,oldVal){
    //   }
  },
  mounted() {
    this.selected = this.tabs[0].id;
  },
  methods: {
    tabClick(tab) {
      this.selected = tab.id;
      this.$emit("tabClick", tab);
    }
  }
};
</script>