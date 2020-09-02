<template>
  <div class="a-message-modal" v-if="visible">
    <!-- 提示框 -->
    <div class="a-message-box" :style="'color:'+color">{{text}}</div>
  </div>
</template>
<script>
export default {
  name: "message",
  data() {
    return {
      visible: false,
      text: "",
      color: "#67c23a",
      colors: [
        {
          type: "success",
          color: "#67c23a"
        },
        {
          type: "warning",
          color: "#e6a23c"
        },
        {
          type: "error",
          color: "#f56c6c"
        }
      ]
    };
  },
  methods: {
    show(options) {
      let self = this;
      console.log(options);
      let colorInfo = self.colors.find(color => {
        return color.type == options.type;
      });
      if (colorInfo) {
        self.color = colorInfo.color;
      }
      self.visible = true;
      setTimeout(function() {
        self.visible = false;
      }, 2000);
    },
    close() {
      let self = this;
      self.visible = false;
    }
  }
};
</script>