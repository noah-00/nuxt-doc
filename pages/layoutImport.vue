<script setup>
// if you want to use the default layout, you don't need to do anything.
// But if you want to use a custom layout, you can use the definePageMeta function.
definePageMeta({
  layout: "custom",
});

// if you want to disable the default layout, you can use the definePageMeta function.
definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="bg-blue-500">custom page</div>
</template>

<!-- / -->
