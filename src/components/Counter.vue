<template>
  <el-container class="counter-value">{{ counter }}</el-container>
  <el-button @click="increment">Increment</el-button>
  <el-button @click="decrement">Decrement</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCounter } from "../hooks/counter";
export default defineComponent({
  name: "Counter",
  setup() {
    return { ...useCounter() };
  },
});
</script>
