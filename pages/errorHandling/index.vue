<script setup>
const resetError = (error) => {
  error.value = null;
};
const someErrorLogger = (error) => {
  // here your error handling logic
  console.log("someErrorLogger", error);
};
</script>

<template>
  <div>
    <h1>Error Handling</h1>
    <NuxtErrorBoundary @error="someErrorLogger">
      <List />
      <template #error="{ error }">
        <p>{{ error }}</p>
        <button @click="resetError(error)">Clear Error</button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
