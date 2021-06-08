<template>
  <div class="brand">{{ brandName }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { APP_NAME } from "../cores/settings"
export default defineComponent({
  name: "Brand",
  setup() {
      return { brandName: APP_NAME }
  }
});
</script>

<style scoped>
.brand {
  height: 61px;
}
</style>
