<style scoped>
.a-footer {
  width: 100%;
  height: 20vw;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  /* background-color: #ccc; */
  text-align: center;
}
.a-footer-position {
  height: 20vw;
  width: 100%;
}
.a-circle {
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  /* background-color: #ccc; */
  position: absolute;
  bottom: 0;
  left: calc(50% - 15vw);
}
.a-normal {
  position: absolute;
  width: 17.5vw;
  height: 100%;
  /* background-color: #ccc; */
}
.a-button-name {
  position: absolute;
  bottom: 10px;
  text-align: center;
  width: 100%;
  color: #68a6f9;
}
</style>

<template>
  <!--页脚-->
  <div>
    <div class="a-footer-position"></div>
    <div class="a-footer">
      <div
        v-for="menu in menus"
        :key="menu.index"
        :class="menu.class"
        :style="'left:'+menu.left+'vw'"
        @click="buttonClick(menu)"
      >
        <img
          style="width:10vw;"
          :src="selectedIndex==menu.index?'img/bottom_nav_ico0'+menu.imgNum+'_pre.png':'img/bottom_nav_ico0'+menu.imgNum+'.png'"
          v-show="menu.class=='a-normal'"
        />
        <img
          style="width:20vw;"
          :src="selectedIndex==menu.index?'img/bottom_nav_ico0'+menu.imgNum+'_pre.png':'img/bottom_nav_ico0'+menu.imgNum+'.png'"
          v-show="menu.class=='a-circle'"
        />
        <div class="a-button-name">{{menu.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "a-footer-middle",
  data() {
    return {
      selectedIndex: 2,
      menus: [
        {
          index: 0,
          left: 0,
          imgNum: 1,
          icon: "1",
          name: "图表",
          class: "a-normal",
          path: "/index/diagram"
        },
        {
          index: 1,
          left: 17.5,
          imgNum: 2,
          icon: "",
          name: "风控",
          class: "a-normal",
          path: "/index/risk"
        },
        {
          index: 2,
          left: 35,
          imgNum: 3,
          icon: "",
          name: "导览",
          class: "a-circle",
          path: "/index/main/1"
        },
        {
          index: 3,
          left: 65,
          imgNum: 4,
          icon: "",
          name: "效能",
          class: "a-normal",
          path: "/index/efficiency"
        },
        {
          index: 4,
          left: 82.5,
          imgNum: 5,
          icon: "",
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