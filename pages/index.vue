<script setup></script>

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
</template>

<!-- / -->
