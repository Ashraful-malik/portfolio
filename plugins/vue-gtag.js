import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  // console.log(config.public.hello);
  // console.log(`"${config.googleAnalytic}"`);
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: `"${config.googleAnalytic}"`,
      },
    },
    nuxtApp.$router
  );
});
