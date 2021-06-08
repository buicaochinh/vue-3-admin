<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="(item, index) in listMenuItems"
      :key="index"
      :index="`${index}`"
      >{{ item.charAt(0).toUpperCase() + item.slice(1) }}</el-menu-item
    >
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { useRouter, useRoute } from "vue-router"
import { DASHBOARD_NAME, DOCUMENT_NAME, USER_NAME } from "../cores/routes";

const useHeader = ({ emit }: any) => {
  // States
  const activeIndex: Ref<string> = ref<string>("0");
  const listMenuItems: Array<string> = [
    DASHBOARD_NAME,
    DOCUMENT_NAME,
    USER_NAME,
  ];

  const router = useRouter();
  const route = useRoute();

  // Methods
  const handleCollapseMenu: Function = () => {
    emit("changeCollapse");
  };

  const handleSelect: Function = (key: any, keyPath: any) => {
    console.log(key, keyPath);
    router.push({name: listMenuItems[parseInt(key)]})
  };

  return {
    activeIndex,
    listMenuItems,
    handleCollapseMenu,
    handleSelect,
  };
};

export default defineComponent({
  name: "Header",
  setup(props, context) {
    return { ...useHeader(context) };
  },
});
</script>
