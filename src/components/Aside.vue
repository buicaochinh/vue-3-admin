<template>
  <Brand />
  <el-menu
    default-active="1"
    class="el-menu-vertical"
    @select="handleSelect"
    :collapse="isCollapse"
  >
    <el-menu-item index="0">
      <i class="el-icon-menu"></i>
      <template #title>Dashboard</template>
    </el-menu-item>
    <el-menu-item index="1">
      <i class="el-icon-document"></i>
      <template #title>Documents</template>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-setting"></i>
      <template #title>Users</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Brand from "./Brand.vue"

const useSidebar = () => {
  //Methods
  const handleSelect: Function = () => console.log("handleOpen");

  // return
  return {
    handleSelect
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
