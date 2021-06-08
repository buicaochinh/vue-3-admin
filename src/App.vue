<template>
  <Layout />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Counter from "./components/Counter.vue";
import Layout from "./components/Layout.vue";
export default defineComponent({
  name: "App",
  components: { Layout, Counter },
});
</script>

<style>
* {
  font-family: "Helvetica Neue", Helvetica;
  margin: 0;
  padding: 0;
}
</style>
