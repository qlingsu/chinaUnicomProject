<template>
  <div>
    <input class="a-input" v-bind="$attrs" @input="handleInput" />
  </div>
</template>
<script>
export default {
  name: "a-input",
  methods: {
    handleInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>