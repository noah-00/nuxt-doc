<script setup>
const route = useRoute();
console.log(route.params.id);
</script>

<template>
  <div>
    <h1>events/[id].vue</h1>
    <p>Event ID: {{ $route.params.id }}</p>
  </div>
</template>
