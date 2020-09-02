<template>
  <div>
    <div v-for="bar in computedBars" :key="bar.id" @click="barClick(bar)">
      <a-bar :label="bar.label" :number="bar.number" :width="bar.width"></a-bar>
    </div>
  </div>
</template>
<script>

export default {
  name: "a-bars",
  props: {
    bars: {
      type: Array,
      default: function() {
        //{id:"",
        // label:"",//显示的label
        // number:""}//数目
        return [];
      }
    },
    max: {
      //手动设置max
      type: Number,
      default: 0
    }
  },
  computed: {
    computedBars() {
      let self = this;
      let arr = [];
      self.bars.forEach(bar => {
        arr.push(bar.number);
      });
      let max = self.max > Math.max(...arr) ? self.max : Math.max(...arr);
      self.bars.forEach(bar => {
        bar.width = (bar.number / max) * 100 + "%";
      });
      return self.bars;
    }
  },
  methods: {
    barClick(bar) {
      console.log("bar=", bar);
      this.$emit("barClick", bar);
    }
  }
};
</script>