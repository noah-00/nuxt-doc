export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth global middleware called");
});

// this middleware will be called for every route change
