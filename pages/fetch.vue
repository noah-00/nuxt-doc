<script setup lang="ts">
// ---------------------- useFetch ------------------------
// const { data: products, pending } = await useLazyFetch("/api/products");

// ---------------------- useAsyncFetch -------------------
const { data: products, pending } = await useAsyncData("products", () =>
  $fetch("/api/products")
);

const refresh = () => refreshNuxtData("products");
</script>

<template>
  <p>{{ pending ? "Loading..." : products }}</p>
  <button @click="refresh">Refresh</button>
</template>
