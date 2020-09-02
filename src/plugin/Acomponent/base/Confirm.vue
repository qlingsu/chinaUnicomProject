<style scoped>
.a-confirm-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 199;
  background: rgba(0, 0, 0, 0.5);
}
.a-confirm-box {
  position: fixed;
  margin: auto;
  /* height: 60vh; */
  width: 80vw;
  border-radius: 20px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  z-index: 200;
  display: flex;
  flex-direction: column;

  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  -webkit-transition-property: opacity, -webkit-transform;
  transition-property: opacity, -webkit-transform;
  transition-property: transform, opacity;
  transition-property: transform, opacity, -webkit-transform;
}
.a-confirm-title {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  font-size: 20px;
}
.a-confirm-textarea {
  border: none;
  resize: none;
  background-color: #f1f0f5;
  width: 80%;
  /* height: calc(100% - 100px); */
  margin: 0 auto;
  font-size: 18px;
}
.a-confirm-button-div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  bottom: 0;
  /* position: absolute; */
  text-align: center;
  border-top: 1px solid #ccc;
  line-height: 40px;
}

.a-confirm-button {
  width: 50%;
  font-size: 20px;
}
</style>
<template>
  <transition>
    <div v-if="visible">
      <div class="a-confirm-modal"></div>
      <!-- 确认提示信息框 -->
      <div class="a-confirm-box" :style="showText?'':'top: 45%;'">
        <div class="a-confirm-title">{{title}}</div>

        <textarea
          class="a-confirm-textarea"
          :style="'height:'+textAreaHeight"
          v-model="text"
          v-show="showText"
        ></textarea>

        <a-radio
          @radioClick="radioClick"
          v-show="showRadio"
          v-for="radio in radios"
          :key="radio.value"
          :name="radio.name"
          :value="radio.value"
        ></a-radio>

        <div class="a-confirm-button-div">
          <div class="a-confirm-button" @click="cancel">取消</div>
          <div class="a-confirm-button" style="color:#3685ff;" @click="confirm">{{confirmText}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: "a-confirm",
  data() {
    return {
      visible: false,
      title: "",
      showText: false,
      text: "",
      confirmText: "确认",
      showRadio: false,
      radios: [],
      promiseStatus: null,
      textAreaHeight: "180px"
    };
  },
  methods: {
    show(options) {
      let self = this;
      console.log(options);
      self.text = "";
      self.visible = true;
      // self.confirmText = options.confirmText || self.confirmText;
      return new Promise(function(resolve, reject) {
        self.promiseStatus = { resolve, reject };
      });
    },
    close() {
      let self = this;
      self.visible = false;
    },
    radioClick(obj) {
      let self = this;
      self.text = obj.value;
      if (obj.value == "其他") {
        self.text = "";
      }
    },
    cancel() {
      let self = this;
      self.visible = false; //关闭模态框
      self.promiseStatus && self.promiseStatus.reject({ result: "cancel" });
    },
    confirm() {
      let self = this;
      self.visible = false; //关闭模态框
      self.promiseStatus && self.promiseStatus.resolve({ result: "confirm" });
    }
  }
};
</script>