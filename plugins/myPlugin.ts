export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      sayMsg: (msg: string) => {
        console.log(`${msg} from myPlugin`);
      },
    },
  };
});
