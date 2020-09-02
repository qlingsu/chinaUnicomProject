<style scoped>
.a-line-with-logo {
  display: flex;
  background-color: #eaf3ff;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  width: 100%;
  margin-top: 10px;
  /* padding: 0 10px; */
}
</style>
<template>
  <!-- 带logo的行 -->
  <div class="a-line-with-logo" @click="lineClick">
    <div>
      <img :src="line.logoPath" style="width:40px;" />
    </div>
    <div>{{line.name}}</div>
    <div>{{line.number}}</div>
  </div>
</template>
<script>
export default {
  name: "a-line-with-logo",
  props: {
    line: {
      type: Object,
      default: function() {
        return {
          logoPath: "",
          name: "",
          number: ""
        };
      }
    }
  },
  methods: {
    lineClick() {
      let self = this;
      self.$emit("lineClick", self.line);
    }
  }
};
</script>