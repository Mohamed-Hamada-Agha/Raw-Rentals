export default defineNuxtRouteMiddleware((to, from) => {
  console.log("From", from)
  console.log("To", to)
});