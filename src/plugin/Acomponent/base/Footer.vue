<template>
  <!--页脚-->
  <div class="a-footer">
    <div v-for="menu in menus" :key="menu.index" :class="menu.class" @click="buttonClick(menu)">
      <div
        :class="'a-normal-icon iconfont '+ menu.icon"
        :style="selectedIndex==menu.index?'color:#548fda;':'color:#c9c9c9;'"
      ></div>
      <div
        class="a-button-name"
        :style="selectedIndex==menu.index?'color:#548fda;':'color:#c9c9c9;'"
      >{{menu.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-footer",
  data() {
    return {
      selectedIndex: 2,
      menus: [
        {
          index: 0,
          left: 0,
          imgNum: 1,
          icon: "icontubiao",
          name: "图表",
          class: "a-normal",
          path: "/index/diagram"
        },
        {
          index: 1,
          left: 20,
          imgNum: 2,
          icon: "iconfengkong",
          name: "风控",
          class: "a-normal",
          path: "/index/risk"
        },
        {
          index: 2,
          left: 40,
          imgNum: 3,
          icon: "icondaolan",
          name: "导览",
          class: "a-normal",
          path: "/index/main/1"
        },
        {
          index: 3,
          left: 60,
          imgNum: 4,
          icon: "iconxiaoneng",
          name: "效能",
          class: "a-normal",
          path: "/index/efficiency"
        },
        {
          index: 4,
          left: 80,
          imgNum: 5,
          icon: "iconshenpi",
          name: "审批",
          class: "a-normal",
          path: "/index/audit"
        }
      ]
    };
  },
  watch: {
    $route: {
      handler() {
        let self = this;
        let currentPath = this.$route.path;
        console.log("currentPath=" + currentPath);
        let menuSelected = self.menus.find(menu => {
          return (
            menu.path.includes(currentPath) || currentPath.includes(menu.path)
          );
        });
        self.selectedIndex = menuSelected
          ? menuSelected.index
          : self.selectedIndex;
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    buttonClick(menu) {
      this.selectedIndex = menu.index;
      this.$router.push(menu.path);
    }
  }
};
</script>