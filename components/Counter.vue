<script setup lang="ts">
const counter = useCounter();
</script>

<template>
  <div>
    <p>Count: {{ counter }}</p>
    <button @click="counter++" class="mr-2">Increment</button>
    <button @click="counter--">Decrement</button>
  </div>
</template>
