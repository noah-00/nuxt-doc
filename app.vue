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
