<script setup lang="ts">
// -------------------------- composables ---------------------------------------
// If you define a function in composables, you can use it in the script tag anywhere.
const { sayHello } = useUtils();
sayHello();

// -------------------------- Plugins ---------------------------------------
const { $sayMsg } = useNuxtApp();
$sayMsg("pages/index.vue");

// -------------------------- utils ---------------------------------------
// If you define a function in utils, you can use it in the script tag anywhere.
console.log(TEST_CONST);

// -------------------------- store ---------------------------------------
const counter = useCounter();

// -------------------------- LazyComponents ------------------------------
const isShow = ref(false);
</script>

<template>
  <!----------------------- Auto Import Components ---------------------------->
  <div>
    <Alert />
    <Profile />
    <ProfileHeader />
  </div>

  <!----------------------- Auto Import Layouts ---------------------------->
  <!----- Automatically, the default.vue layout is loaded and drawn. ------->

  <!----------------------- assets image ---------------------------->
  <!-- If you save the image in the assets folder, http://localhost:3000/icon.png is not accessible. -->
  <!-- <img src="@/assets/icon.png" alt="image" /> -->
  <!-- In the public folder, http://localhost:3000/icon.png is accessible. -->
  <img src="/icon.png" alt="image" />

  <!----------------------- SVG icon ---------------------------->
  <IconsBell />

  <!----------------------- State -------------------------------->
  <Counter />
  <div>
    <p>Count: {{ counter }}</p>
    <button @click="counter++" class="mr-2">Increment</button>
    <button @click="counter--">Decrement</button>
  </div>

  <!----------------------- LazyComponents ----------------------->
  <!----  LazyComponents are loaded only when they are used. ----->
  <button @click="isShow = !isShow">Toggle</button>
  <LazyIconsBell v-if="isShow" />
</template>

<!-- / -->
