<style scoped>
.a-button-group {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
}

.a-button-in-group {
  /* width: 10vw;
  padding: 10px; */
  background-color: #f1f1f1;
  color: black;
  /* border-radius: 5px; */
  text-align: center;
}
.a-button-selected {
  background-color: #70b3f1;
  color: #fff;
}
</style>
<template>
  <!-- 一行上有多个按钮 -->
  <div style="width:100%;overflow-y: auto;" class="a-button-group">
    <a-button
      v-for="button in buttons"
      :key="button.id"
      @click="buttonClick(button)"
      v-bind="$attrs"
      :class="selected == button.id?'a-button-in-group a-button-selected':'a-button-in-group'"
    >{{button.name}}</a-button>
  </div>
</template>
<script>
export default {
  name: "a-button-group",
  props: {
    buttons: {
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
  mounted() {
    this.selected = this.buttons[0].id;
  },
  methods: {
    buttonClick(button) {
      this.selected = button.id;
      this.$emit("buttonClick", button);
    }
  }
};
</script>