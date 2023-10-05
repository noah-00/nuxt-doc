<script setup lang="ts">
const store = useCounterStore();
const { count } = storeToRefs(store);
const { increment, $reset } = store;
</script>

<template>
  <div>
    <h1>Count/store2:{{ count }}</h1>
    <button @click="increment">count +</button>
    <br />
    <button @click="$reset">reset</button>
    <br />
    <nuxt-link to="/storeImport/first">storeSecondへ</nuxt-link>
  </div>
</template>
