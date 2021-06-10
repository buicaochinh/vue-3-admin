<template>
  <el-button type="text" @click="$emit('changeCollapse')" class="toggle-icon">
    <i :class="collapseIcon"></i>
  </el-button>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from "vue";
import { COLLAPSE_ICON_UNFOLD, COLLAPSE_ICON_FOLD } from "../cores/icons";
export default defineComponent({
  name: "Header",
  props: {
    isCollapse: Boolean,
  },
  setup(props) {
    const collapseIcon: ComputedRef<string> = computed<string>(() =>
      props.isCollapse === true ? COLLAPSE_ICON_UNFOLD : COLLAPSE_ICON_FOLD
    );
    return { collapseIcon };
  },
});
</script>

<style scoped>
.toggle-icon {
  width: 60px;
  line-height: 60px;
  padding: 0;
  color: black;
}

.toggle-icon:hover {
  background-color: #eff;
}

i {
  font-size: 20px;
}
</style>
