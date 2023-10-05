<script setup lang="ts"></script>

<template>
  <header>
    <ul>
      <li>
        <NuxtLink class="mx-2" to="/">Home</NuxtLink>
        <NuxtLink class="mx-2" to="/events">Events</NuxtLink>
        <NuxtLink class="mx-2" to="/pageRendering/csr">CSR</NuxtLink>
        <NuxtLink class="mx-2" to="/pageRendering/ssr">SSR</NuxtLink>
        <NuxtLink class="mx-2" to="/pageRendering/universalMode"
          >UNIVERSAL MODE</NuxtLink
        >
        <NuxtLink class="mx-2" to="/storeImport/first">STORE</NuxtLink>
        <NuxtLink class="mx-2" to="/storeImport/second">STORE SECOND</NuxtLink>
      </li>
    </ul>
  </header>
</template>
