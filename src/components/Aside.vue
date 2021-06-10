<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical"
    @select="handleSelect"
    :collapse="isCollapse"
    background-color="#34495e"
    text-color="#fff"
    active-text-color="#41b883"
  >
    <el-menu-item index="-1" class="full-brand">
      <img src="../assets/logo.svg" alt="logo" width="30" height="56" />
      <Brand v-if="!isCollapse" />
    </el-menu-item>
    <el-menu-item
      v-for="(item, index) in navItemList"
      :key="index"
      :index="`${index}`"
    >
      <i :class="item.icon"></i>
      <template #title>{{
        item.name.charAt(0).toUpperCase() + item.name.slice(1)
      }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Brand from "./Brand.vue";
import { NAV_ITEM_LIST } from "../cores/settings"
import { DASHBOARD_NAME } from "../cores/routes"
import { useRouter } from "vue-router";

const useSidebar = () => {
  // States
  const navItemList = NAV_ITEM_LIST;
  const router = useRouter();
  // Methods
  const handleSelect: Function = (key: string) => {
    if (key !== "-1") {
      router.push({ name: navItemList[parseInt(key)].name });
    } else if (key === "-1") {
      router.push({ name: DASHBOARD_NAME });
    }
  };

  // return
  return {
    handleSelect,
    navItemList,
  };
};

export default defineComponent({
  name: "Aside",
  props: {
    isCollapse: Boolean,
  },
  components: { Brand },
  setup() {
    return { ...useSidebar() };
  },
});
</script>

<style scoped>
.el-menu-vertical {
  height: 100vh;
}

.full-brand {
  display: flex;
}
</style>
