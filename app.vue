<script setup lang="ts">
const admin = true; // auth function
const layout = admin ? "default" : "custom";
</script>

<template>
  <NuxtLayout :name="layout">
    <Header></Header>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
