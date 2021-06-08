<template>
  <el-container>
    <el-aside :width="`${isCollapse ? 65 : 200}px`"
      ><Aside :isCollapse="isCollapse"
    /></el-aside>
    <el-container>
      <el-header
        ><Header @change-collapse="changeIsCollapse($event)"
      /></el-header>
      <el-main><router-view /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Aside from "./Aside.vue";

const useLayout = () => {
  // States
  const isCollapse: Ref<boolean> = ref<boolean>(false);
  // Methods
  const changeIsCollapse: Function = () => {
    isCollapse.value = !isCollapse.value;
  };
  return {
    isCollapse,
    changeIsCollapse,
  };
};

import Dashboard from "../pages/index.vue";
export default defineComponent({
  name: "Layout",
  components: { Dashboard, Header, Aside, Footer },
  setup() {
    return { ...useLayout() };
  },
});
</script>
