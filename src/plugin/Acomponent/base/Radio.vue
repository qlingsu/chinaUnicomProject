<template>
  <div
    style="height: 40px;
    line-height: 40px;
    font-size: 18px;
    display: flex;
    padding-left: 20px;"
    @click="radioClick"
  >
    <input style="height: 100%;margin: 0 5px;" :name="name" type="radio" :value="value" :id="value" />
    <label style="height: 100%;" :for="value">{{value}}</label>
  </div>
</template>
<script>
export default {
  name: "a-radio",
  props: {
    name: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    radioClick() {
      this.$emit("radioClick", { name: this.name, value: this.value });
    }
  }
};
</script>