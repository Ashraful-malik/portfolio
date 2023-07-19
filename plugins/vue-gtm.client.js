import { createGtm } from "vue-gtm";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createGtm, {
    property: {
      id: "GTM-K2CX2Q9P",
      defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
      compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
      //   nonce: "2726c7f26c", // Will add `nonce` to the script tag
      vueRouter: useRouter(), // Pass the router instance to automatically sync with router (optional)
    },
  });
});
