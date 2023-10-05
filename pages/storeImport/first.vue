<script setup lang="ts">
const store = useCounterStore();
const { count, double } = storeToRefs(store);
const { increment } = store;
</script>

<template>
  <div>
    <h1>Count/store:{{ count }}</h1>
    <h1>double count:{{ double }}</h1>
    <button @click="increment">count +</button>
    <br />
    <nuxt-link to="/storeImport/second">storeSecondへ</nuxt-link>
  </div>
</template>
