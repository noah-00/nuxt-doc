export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth middleware called");
});

// this middleware will be called for page that define middleware: "auth",
