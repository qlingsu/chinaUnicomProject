<style>
.a-select {
  height: 40px;
  border: none;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  /* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; */
}
.a-select-option {
  border: none;
  -moz-appearance: none;
  /* Firefox */
  -webkit-appearance: none;
  /* Safari和Chrome */
  appearance: none;
  outline: none;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  color: black;
}
.a-select-option:hover {
  background-color: #2785e7;
  color: #000;
  outline: none;
  border: none;
}
.a-select-option::-ms-expand {
  display: none;
}
</style>
<template>
  <select class="a-select" v-model="opinionSelected" @change="changeHandle">
    <option
      class="a-select-option"
      v-for="item in options"
      :value="item.value||item.name"
      :key="item.name"
    >{{item.name}}</option>
  </select>
</template>
<script>
export default {
  name: "a-select",
  data() {
    return {
      opinionSelected: ""
    };
  },
  watch: {
    options: {
      handler(newArr) {
        let self = this;
        if (newArr.length > 0 && !self.initSelected) {
          self.opinionSelected = newArr[0].value;
        } else if (self.initSelected) {
          self.opinionSelected = self.initSelected;
        }
      },
      immediate: true
    }
  },
  mounted() {
    let self = this;
  },
  props: {
    initSelected: {
      type: String,
      default: ""
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
    changeHandle() {
      let self = this;
      let option = self.options.find(option => {
        return option.value == self.opinionSelected;
      });
      console.log("option", option);
      self.$emit("select", option);
    }
  }
};
</script>